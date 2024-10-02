import { all, create } from 'mathjs';
import React from "react";
import Plot from "react-plotly.js";

const math = create(all);

export function Graphishow({ x = [], y = [],check, maingraphx,maingraphy,XG,YG,gotox,gotoy}) {
  try {
    if(check === true){
      x.sort((a, b) => a - b);
      y.sort((a, b) => a - b);
    }

  } catch (err) {
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
            x: check === "One" && x.length > 0 ?  [1,...x] : x,
            y: check === "One" && y.length > 0 ? [1,...y] : y,
            name : check === "One" && x.length > 0 ? 'Onepoint' : 'Value',
            line: check === "One" ? { shape: "hv", color: "red" } : 1,
            mode: check === 'newton' ? "markers" : "markers+lines",
            type: "scatter",
          },
          {
            x : maingraphx,
            y : maingraphy,
            name: 'Main graph',
            mode : "lines",
            type: "scatter",
            
          },
          {
            x: XG,
            y :YG,
            name: 'x = x',
            mode : "markers+lines",
            type: "scatter",
          },
          {
            x: check === 'newton' && x.length > 0 ? gotox : gotox,
            y: check === 'newton' && y.length > 0 ? gotoy : gotoy,
          }


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
