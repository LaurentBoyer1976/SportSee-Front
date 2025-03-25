import React from 'react';
import BarChart from '../components/barChart.jsx';
import LineChart from '../components/lineChart.jsx';
import RadarChart from '../components/radarChart.jsx';
import RadialChart from '../components/radialChart.jsx';



const ChartsLayout = () => {
    return (
            <article className='charts__Container'>
                <div>
                    <BarChart />
                </div>
                <div>
                    <LineChart />
                    <RadarChart />
                    <RadialChart />
                </div>
            </article>
    );
};
export default ChartsLayout;