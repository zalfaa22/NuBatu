import React from "react";
import "../css/detailchat.css";

export default function DetailChat() {
  return (
    <div className="content">
      <div className="bungkus-chat">
        <div className="arrow">
          <img src="../../assets/arrow.svg"></img>
          <p>Kembali</p>
        </div>

        {/* putih */}
        <div className="bungkus-ziyad">
          <div className="oren d-flex grid gap-4 align-start">
            <img src="../../assets/oren.svg"></img>
            <div>
              <h1 style={{ fontSize: "22px" }}>Ziyad Ahmad Baharuddin</h1>
              <h2 style={{ fontSize: "18px", color: "#404040" }}>
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadiahkan fatihah kepada orang yang non Muslim, atau
                bertawasul untuk non Muslim tersebut? Kalau boleh, kira² apa
                dasar referensi kitabnya? Atau dalam sejarah, pernahkah sahabat
                atau Rasulullah sendiri melakukannya? Jika tidak, mengapa bisa
                demikian?
              </h2>
              <h3 style={{ fontSize: "16px", color: "#808080" }}>
                Sep 26, 2023
              </h3>
            </div>
          </div>

          {/* form */}
          <div class="pt-5">
            <label for="exampleFormControlInput1" class="form-label">
              Dijawab oleh
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nama Kyai/Ust/Habib"
            />
          </div>
          <div className="jawaban" style={{ position: "relative" }}>
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Jawaban"
                style={{ paddingRight: "100px" }}
              ></textarea>
              <button
                style={{
                  position: "absolute",
                  top: 35,
                  right: 10,
                  backgroundColor: "#009B4C",
                  width: "80px",
                  height: "40px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "12px",
                  color: "white",
                }}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
