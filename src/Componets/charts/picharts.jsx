import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Pichart({mydata}){
  return (
    <PieChart
      series={[
        {
          arcLabel:(item)=>`${item.value}`,
          data: mydata,
          highlightScope:{faded:'global',highlighted:'item'},
          faded:{innerRadius:30,additionalRadius:-30,color:'gray'}
        },
      ]}
      width={200}
      height={200}
    />
  );
}