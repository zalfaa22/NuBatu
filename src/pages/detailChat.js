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
          <div className="oren">
            <img className="za" src="../../assets/oren.svg"></img>
            <div>
              <h1 className="nama-chat">Ziyad Ahmad Baharuddin</h1>
              <h2 className="pertanyaan">
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadiahkan fatihah kepada orang yang non Muslim, atau
                bertawasul untuk non Muslim tersebut? Kalau boleh, kira² apa
                dasar referensi kitabnya? Atau dalam sejarah, pernahkah sahabat
                atau Rasulullah sendiri melakukannya? Jika tidak, mengapa bisa
                demikian?
              </h2>
              <h3 className="tgl-tanya">
                Sep 26, 2023
              </h3>
            </div>
          </div>

          {/* form */}
          <div class="pt-lg-5 pt-md-4 pt-3">
            <label for="exampleFormControlInput1" class="form-label">
              Dijawab oleh
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nama Kyai/Ust/Habib"
              // style={{fontSize: "10px"}}
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
                style={{ paddingRight: "95px" }}
              ></textarea>
              <button className="reply"
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
