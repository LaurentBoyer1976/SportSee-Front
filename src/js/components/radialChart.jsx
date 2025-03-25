import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const RadialChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey='uv'
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout='vertical'
                    verticalAlign='middle'
                    align='right'
                />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}