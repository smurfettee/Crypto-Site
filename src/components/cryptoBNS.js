import { useEffect, useState } from "react";
const BTC_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png";
const ETH_URL =  "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png";
const TETH_URL = "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png";
const XRP_URL = "https://s2.coinmarketcap.com/static/img/coins/200x200/52.png";


export default function CryptoBNS({coin}) {

    const [currency, setCurrency] = useState(0);
    const [percentage, setPercentage] = useState(0);
    let URL =  "";

    if (coin === "bitcoin"){
        URL = BTC_URL;
    }else if  (coin  === "ethereum"){
        URL = ETH_URL;
    }else if (coin === "tether"){
        URL = TETH_URL;
    }else if (coin === "ripple"){
        URL = XRP_URL;
    }

    //CAPITALIZE FIRST CHARACTER
    const coin_name = coin.charAt(0).toUpperCase() + coin.slice(1);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${coin}&sparkline=false&price_change_percentage=1h&locale=en`, {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
            },
            
        }).then(response => {
            response.json().then(res => {
                //console.log(res);
                setCurrency(res[0].current_price >= 1 ? res[0].current_price : parseFloat(res[0].current_price.toPrecision(2)));
                setPercentage(res[0].price_change_percentage_1h_in_currency.toFixed(2));
            });
        });
    }, []);

    return (
        <div className="flex flex-col items-center gap-2 font-bold">
            <img src={URL} className="w-28"></img>
            <div className="flex gap-5 text-lg">
                <div>{coin_name}</div>
                {percentage > 0 ? <div className="text-green-600">+{percentage}%</div> : <div className="text-red-600">{percentage}%</div>}
            </div>
            <div className="text-2xl">€ {currency}</div>
        </div>
    );
}