import React from 'react'
import Plot from 'react-plotly.js'
//For inter
function GraphforReg({props}) {
  return (
    <div
      className="App"
    >
      <Plot
        data={[
          {
            x : props.mode === "inter" || "regression" ? props.x : [1],
            y : props.mode === "inter" || "regression" ? props.y : [1],
            name: 'Main graph',
            mode : "lines",
            type: "scatter",

          },
          {
            x : props.mode === "inter" || "regression" ? [props.D] : [1],
            y : props.mode === "inter" ? "regression" [props.ansum] : [1],
            name : 'anser',
            mode : "markers",
            type : "scatter",
            marker : {
                size : 10,
                color : "red"
            }
          }

        ]}
        layout={{
          title: "Graph",
          xaxis: {
            title: "data : x",
          },
          yaxis: {
            title: "data : y",
          },
          dragmode: 'pan',
          autosize: true, 
        }}
        config={{ scrollZoom: true }}
      />
    </div>
  )
}

export default GraphforReg