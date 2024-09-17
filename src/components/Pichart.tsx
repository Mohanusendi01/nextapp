import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
interface Props{
    invest:string
}
function Pichart({invest}:Props) {
    const fillValue = (parseInt(invest)/1000000)*360
    const remainedValue = 360 - fillValue
    const data = [
        { name: 'invested', value: fillValue },
        { name: 'retuen', value: remainedValue},
      ];
      const COLORS = ["#0088FE", "#00C49F"];
  return (
    <div className=''>
        <PieChart width={300} height={400} >
        <Pie
          data={data}
          cx={130}
          cy={140}
          innerRadius={40}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
    </div>
  )
}

export default Pichart