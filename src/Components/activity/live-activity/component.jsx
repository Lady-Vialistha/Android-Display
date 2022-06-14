import React from "react";
import Background from "../../../Assets/EXPORT/kegiatan_selanjutnya_bg.svg";
import Ilustrasi from "../../../Assets/EXPORT/ilustrasi.svg";
import Style from "./styles";
import Data from "../../JSON/data.json";

const LiveActivity = () => {
  return (
    <Style>
      <div className="image">
        <img src={Ilustrasi} alt="" />
      </div>
      <div className="box">
        <div className="absolute">
          <h2 className="box-title">Kegiatan yang sedang berlangsung</h2>
          <div className="box-text">
            <div>
              <p>Nama kegiatan</p>
              <p>Pengajar</p>
              <p>Tanggal Waktu Mulai </p>
              <p>Tanggal Waktu Selesai </p>
            </div>
            <div className="block">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>

            <div>
              {Data.map((item, key) => {
                return (
                  <div key={key}>
                    <p>{item.name}</p>
                    <p>{item.teacher}</p>
                    <p>{item.start}</p>
                    <p>{item.end}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* batas */}
          {/* <div className="box-text">
            <p>Nama kegiatan </p>
            <p>
              {Data.map((item, key) => {
                return (
                  <div key={key}>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </p>
          </div>

          <div className="box-text">
            <p>Pengajar </p>
            <p>
              {Data.map((item, key) => {
                return (
                  <div key={key}>
                    <p>{item.teacher}</p>
                  </div>
                );
              })}
            </p>
          </div>

          <div className="box-text">
            <p>Tanggal Waktu Mulai </p>
            <p>
              {Data.map((item, key) => {
                return (
                  <div key={key}>
                    <p>{item.start}</p>
                  </div>
                );
              })}
            </p>
          </div>

          <div className="box-text">
            <p>Tanggal Waktu Selesai </p>
            <p>
              {Data.map((item, key) => {
                return (
                  <div key={key}>
                    <p>{item.end}</p>
                  </div>
                );
              })}
            </p>
          </div> */}

          {/* batas */}
        </div>
      </div>
    </Style>
  );
};
export default LiveActivity;
