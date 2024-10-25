import React from 'react'
import Plot from 'react-plotly.js'
//For inter
function realgraphforregression({props}) {
  return (
    <div
      className="App"
    >
      <Plot
        data={[
          {
            x : props.x,
            y : props.y,
            name: 'Main graph',
            mode : "markers",
            type: "scatter",

          },
          {
            x : props.Rlinex,
            y : props.Rliney,
            name: 'Regression',
            mode : "lines",
            type: "scatter",
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

export default realgraphforregression