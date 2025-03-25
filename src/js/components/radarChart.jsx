import React from "react";
import { RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from "recharts";

const RadarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" width={730} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RechartsRadarChart>
        </ResponsiveContainer>
    );
}
export default RadarChart;