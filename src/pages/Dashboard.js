import React from "react";
import "../App.css";
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from "recharts";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Chart = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];



    return (
        <div style={{ textAlign: "center" }}>
            <h1>Qualquer texto</h1>
            <div >

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid>

                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#002D4B"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </Grid>
                        {/* </Grid>

                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    > */}
                        <Grid>

                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="value" fill="#002D4B" background={{ fill: '#eee' }} />
                            </BarChart>
                        </Grid>
                        <Grid>
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="#002D4B" activeDot={{ r: 8 }} />

                            </LineChart>
                        </Grid>

                        <Grid  container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={0}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                    fill="#002D4B"
                                    label
                                />
                            </PieChart>
                        </Grid>
                    </Grid>
                </Box>


            </div>
        </div>
    );
};


export default Chart;
