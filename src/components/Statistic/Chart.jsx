import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";


const data = [
{
    name: "Mon",
    uv: 2000,
},
{
    name: "Tue",
    uv: 100,
},
{
    name: "Wed",
    uv: 1000,
},
{
    name: "Thu",
    uv: 700,
},

{
    name: "Fri",
    uv: 1200,
},

{
    name: "Sat",
    uv: 900,
},

{
    name: "Sun",
    uv: 1600,
},

];
const Chart = () => {
  return (
    <div className='h-[400px] mt-8'>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#766EDA" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart