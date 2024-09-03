import React from "react";
import Plot from "react-plotly.js";
export function Graphishow({x,y}) {

  return (
    <div
      className="App"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   //height: "100vh",
      // }}
    >
      <Plot
        data={[
          {
            
            x: x,
            y: y,
            mode: "lines + markers",
            type: "scatter",
            
          },
        ]}
        layout={{
          title: "-",
          xaxis: {
            title: "X",
          },
          yaxis: {
            title: "Y",
          },
        }}
        config={{ scrollZoom: true}}
      />
      
    </div>
  );
}

export default Graphishow;