import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import moment from "moment";
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function CoinGraph({coin}) {

    const [coinsData, setCoinsData] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=eur&days=6`, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            response.json().then(res => {
                setCoinsData(res.prices);
            });
        });
    }, [coin]);


    //console.log(coinsData);
    if (coinsData != null){
        const coinChartData = coinsData.map((value) => ({x: value[0], y: value[1]}));
        const options = {
            responsive: true,
        };
        //console.log(coinChartData);

        const label = coinChartData.map(value => moment(value.x).format('MMM DD'));

        const data = {
            labels: label,
            datasets: [
                {
                    fill: true,
                    label: coin,
                    data: coinChartData.map(val => val.y),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }
            ]
        };

        return (
            <div>
                <Line options={options} data={data} className='w-[40rem]'/>
            </div>
        );
    }
}