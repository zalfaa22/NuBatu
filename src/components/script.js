import React, { useEffect, useState } from 'react';
import './css/texteditor.css';

export default function Texttor() {
    const [content, setContent] = useState('');

  const handleButtonClick = (command, value = null) => {
    document.execCommand(command, false, value);
    setContent(document.getElementById('text-input').innerHTML);
  };

  const handleCreateLink = () => {
    const url = prompt('Enter the URL:');
    if (url) {
      handleButtonClick('createLink', url);
    }
  };

  const handleFormatBlockChange = (event) => {
    const value = event.target.value;
    handleButtonClick('formatBlock', value);
  };

  useEffect(() => {
    const alignButtons = document.querySelectorAll('.align');

    alignButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const alignment = button.getAttribute('data-align');
        handleButtonClick('justify' + alignment);
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="options">
            {/* Heading Options */}
          <select
            id="formatBlock"
            className="adv-option-button"
            onChange={handleFormatBlockChange}
          >
            <option value="P">Normal</option>
            <option value="H1">Heading 1</option>
            <option value="H2">Heading 2</option>
            <option value="H3">Heading 3</option>
            <option value="H4">Heading 4</option>
            <option value="H5">Heading 5</option>
            <option value="H6">Heading 6</option>
          </select>
          {/* Text Format */}
          <button
            id="bold"
            className="option-button format"
            onClick={() => handleButtonClick('bold')}
          >
            <i className="bi bi-type-bold"></i>
          </button>
          <button
            id="italic"
            className="option-button format"
            onClick={() => handleButtonClick('italic')}
          >
            <i className="bi bi-type-italic"></i>
          </button>
          <button
            id="underline"
            className="option-button format"
            onClick={() => handleButtonClick('underline')}
          >
            <i className="bi bi-type-underline"></i>
          </button>
          {/* Additional Formatting Options */}
          {/* Uncomment and modify as needed */}
          {/* <button id="strikethrough" className="option-button format" onClick={() => handleButtonClick('strikethrough')}>
            <i className="bi bi-type-strikethrough"></i>
          </button>
          <button id="superscript" className="option-button script" onClick={() => handleButtonClick('superscript')}>
            <i className="bi bi-superscript"></i>
          </button>
          <button id="subscript" className="option-button script" onClick={() => handleButtonClick('subscript')}>
            <i className="bi bi-subscript"></i>
          </button> */}
          {/* List Options */}
          {/* Uncomment and modify as needed */}
          {/* <button id="insertOrderedList" className="option-button" onClick={() => handleButtonClick('insertOrderedList')}>
            <div className="bi bi-list-ol"></div>
          </button>
          <button id="insertUnorderedList" className="option-button" onClick={() => handleButtonClick('insertUnorderedList')}>
            <i className="bi bi-list"></i>
          </button> */}
          {/* Undo/Redo Options */}
          {/* Uncomment and modify as needed */}
          {/* <button id="undo" className="option-button" onClick={() => handleButtonClick('undo')}>
            <i className="bi bi-arrow-counterclockwise"></i>
          </button>
          <button id="redo" className="option-button" onClick={() => handleButtonClick('redo')}>
            <i className="bi bi-arrow-clockwise"></i>
          </button> */}
          {/* Link Options */}
          {/* Uncomment and modify as needed */}
          {/* <button id="createLink" className="adv-option-button" onClick={() => handleButtonClick('createLink')}>
            <i className="bi bi-link"></i>
          </button>
          <button id="unlink" className="option-button" onClick={() => handleButtonClick('unlink')}>
            <i className="bi bi-link-45deg"></i>
          </button> */}
          {/* Alignment Options */}
          <button
            id="justifyLeft"
            className="option-button align"
            onClick={() => handleButtonClick('justifyLeft')}
          >
            <i className="bi bi-justify-left"></i>
          </button>
          <button
            id="justifyCenter"
            className="option-button align"
            onClick={() => handleButtonClick('justifyCenter')}
          >
            <i className="bi bi-text-center"></i>
          </button>
          <button
            id="justifyRight"
            className="option-button align"
            onClick={() => handleButtonClick('justifyRight')}
          >
            <i className="bi bi-justify-right"></i>
          </button>
          <button id="createLink" className="adv-option-button" onClick={handleCreateLink}>
            <i className="bi bi-link"></i>
          </button>
        </div>
      <div id="text-input" contenteditable="true"></div>
    </div>
    {/* <!--Script--> */}
    {/* <script src="script.js"></script> */}
    </>
  )
}




let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];
//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);
  //create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });
  //fontSize allows only till 7
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  //default size
  fontSizeRef.value = 3;
};
//main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};
//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});
//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});
//link
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  //if link has http then pass directly else add https
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});
//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;
        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};
const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};
window.onload = initializer();




{/* <div className="row p-0 m-0 d-flex align-items-center align-content-center">
        <div className="p-2" style={{ backgroundColor: "#BFBFBF" }}>
          
          <select
            id="formatBlock"
            className="rounded-3 me-3"
            style={{ fontSize: "14px", fontWeight: "600px", padding: "11px" }}
            onChange={handleFormatBlockChange}
          >
            <option value="P">Normal</option>
            <option value="H1">Heading 1</option>
            <option value="H2">Heading 2</option>
            <option value="H3">Heading 3</option>
            <option value="H4">Heading 4</option>
            <option value="H5">Heading 5</option>
            <option value="H6">Heading 6</option>
          </select>

          
          <ToggleButtonGroup
            type="checkbox"
            value={value}
            onChange={handleChange}
            className="me-3"
          >
            <ToggleButton
              id="tbg-btn-1"
              className="bg-white border-secondary p-2 m-0"
              onClick={() => handleButtonClick('bold')}
              value={1}
            >
              <img src="../../assets/berita/bold-icon.svg" className="img-fluid"/>
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-2"
              className="bg-white border-secondary p-2 m-0"
              onClick={() => handleButtonClick('italic')}
              value={2}
            >
              <img src="../../assets/berita/italic-icon.svg" className="img-fluid"/>
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-3"
              className="bg-white border-secondary p-2 m-0"
              onClick={() => handleButtonClick('underline')}
              value={3}
            >
              <img src="../../assets/berita/underline-icon.svg" className="img-fluid"/>
            </ToggleButton>
          </ToggleButtonGroup>

          
          <ToggleButtonGroup
            type="checkbox"
            value={value}
            onChange={handleChange}
            className="me-3"
          >
            <ToggleButton
              id="tbg-btn-1"
              className="bg-white border-secondary p-2 m-0"
              onClick={() => handleButtonClick('justifyLeft')}
              value={1}
            >
              <img src="../../assets/berita/align-left-icon.svg"className="img-fluid"/>
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-2"
              className="bg-white border-secondary p-2 m-0"
              onClick={() => handleButtonClick('justifyCenter')}
              value={2}
            >
              <img src="../../assets/berita/align-center-icon.svg"className="img-fluid"/>
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-3"
              className="bg-white border-secondary p-2 m-0"
              onClick={() => handleButtonClick('justifyRight')}
              value={3}
            >
              <img src="../../assets/berita/align-right-icon.svg" className="img-fluid"/>
            </ToggleButton>
          </ToggleButtonGroup>

          
          <ToggleButtonGroup
            type="checkbox"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton
              id="tbg-btn-1"
              className="bg-white border-secondary p-2 m-0"
              onClick={handleCreateLink}
              value={1}
            >
              <img src="../../assets/berita/link-icon.svg" className="img-fluid"/>
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-3"
              className="bg-white border-secondary p-2 m-0"
              value={3}
            >
              <img src="../../assets/berita/quote-icon.svg" className="img-fluid"/>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <textarea
          class="form-control rounded-0 "
          style={{ paddingBottom: "6rem" }}
          aria-label="With textarea"
        ><div id="text-input" contenteditable="true"></div></textarea>
        
      </div> */}