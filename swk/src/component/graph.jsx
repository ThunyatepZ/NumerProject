import { all, create } from 'mathjs';
import React from "react";
import Plot from "react-plotly.js";

const math = create(all);

export function Graphishow({ x, y,check}) {
  try {
    if(check == true){
      x.sort((a, b) => a - b);
      y.sort((a, b) => a - b);
    }

  } catch (err) {
    // ถ้ามีข้อผิดพลาดในการจัดเรียงข้อมูลจะจับได้ที่นี่
    // console.error("Error sorting data:", err);
  }

  return (
    <div
      className="App"
      style={{
      }}
    >
      <Plot
        style={{
          
        }}
        data={[
          {
            x: x, // ข้อมูลแกน X
            y: y, // ข้อมูลแกน Y
            mode: "markers+lines", // การแสดงผลแบบมีทั้งจุดและเส้น
            type: "scatter", // ประเภทของกราฟคือ scatter
          },
        ]}
        layout={{
          title: "Graph", // ชื่อกราฟ
          xaxis: {
            title: "X", // ชื่อแกน X
          },
          yaxis: {
            title: "Y", // ชื่อแกน Y
          },
          dragmode: 'pan', // อนุญาตให้เลื่อนกราฟได้
          autosize: true, // ปรับขนาดอัตโนมัติ
        }}
        config={{ scrollZoom: true }} // อนุญาตให้เลื่อนเข้า-ออกได้ด้วยการ scroll
      />
    </div>
  );
}

export default Graphishow;
