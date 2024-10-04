import { all, create } from 'mathjs';
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
const math = create(all);

function ConjugateGraph({ Xg = [], Yg = [], mainmatrix, submatrix,check}) {
                const [steps, setSteps] = useState([]);
                const f = (x, y) => {
                    if (!mainmatrix || !submatrix || mainmatrix.length < 2 || submatrix.length < 2) {
                        return 0;
                    }
                    else{
                        return (1 / 2) * (mainmatrix[0][0] * x * x + mainmatrix[0][1] * x * y + mainmatrix[1][0] * x * y + mainmatrix[1][1] * y * y) - (submatrix[0] * x + submatrix[1] * y);
                    }
                    
                };
            
                useEffect(() => {
                    if (!Xg.length || !Yg.length) {
                        return;
                    }
            
                    // Simulate conjugate gradient steps based on Xg and Yg
                    const simulateConjugateGradient = () => {
                        const stepData = [];
                        for (let i = 0; i < Xg.length; i++) {
                            const x = Yg[i];
                            const y = Xg[i];
                            const fx = f(x, y);
                            stepData.push({ x, y, z: fx });
                        }
                        setSteps(stepData);
                    };
            
                    simulateConjugateGradient();
                }, [Xg, Yg]); // Run effect when Xg or Yg changes
            
                // Create surface data for 3D plot
                const xValues = [...Array(100).keys()].map((i) => -10 + i * 0.2);
                const yValues = [...Array(100).keys()].map((i) => -10 + i * 0.2);
                const zValues = xValues.map((x) => yValues.map((y) => f(x, y)));
            
                return (
                    
                    <div className="App">
                        <h1>3D Conjugate Gradient Method</h1>
                        <Plot
                            data={[
                                {
                                    z: zValues,
                                    x:xValues,
                                    y:  yValues ,
                                    type: 'surface' ,
                                    colorscale:'jet' ,
                                },
                                {
                                    x: steps.map((s) => s.x),
                                    y: steps.map((s) => s.y),
                                    z: steps.map((s) => s.z),
                                    mode: 'lines+markers',
                                    type: 'scatter3d',
                                    marker: {
                                        color: 'red',
                                        size: 5,
                                    },
                                    line: {
                                        color: 'red',
                                        width: 2,
                                    },
                                    name: 'Conjugate Gradient Steps',
                                },
                            ]}
                            layout={{
                                title: 'Conjugate Gradient',
                                scene: {
                                    xaxis: { title: 'X Axis' },
                                    yaxis: { title: 'Y Axis' },
                                    zaxis: { title: 'Z Axis (f(x, y))' },
                                },
                                width: 700,
                                height: 500,
                            }}
                        />
                    </div>
                );

            
}

export default ConjugateGraph;
