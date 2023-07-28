import { useParams } from "react-router-dom";
import CoinGraph from "./CoinGraph";
import { useEffect, useState } from "react";

export default function CoinInfo() {

    const {id} = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${id}&order=market_cap_desc&sparkline=false&locale=en`, {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
            },
        })
        .then(response => {
            response.json().then(res => {
                setCoin(res[0]);
            });
        });
    }, []);

    if (coin != null){

        const dayChange = coin.price_change_percentage_24h;

        return (
            <div className="flex gap-10 items-center relative bottom-20">
                <div className="flex flex-col items-center">
                    <img  src={coin.image} className="w-56 pb-4"></img>
                    <div className="pb-4 text-3xl text-[#242424] font-semibold">{coin.name}</div>
                    <div className="flex gap-3 text-lg font-medium">
                        <div>24h Change:</div>
                        {coin.dayChange > 0 ? <div className="text-green-500">+{dayChange.toFixed(2)}%</div> : <div className="text-red-500">{dayChange.toFixed(2)}%</div>}
                    </div>
                </div>
                <div className="h-60 w-1 bg-slate-700 rounded-s-full rounded-e-full"></div>
                <div>
                    <CoinGraph coin={id}/>
                </div>
            </div>
        );
    }
}