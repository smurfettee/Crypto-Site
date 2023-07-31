import { Link } from "react-router-dom";

export default function MarketUpdateCoin({image, name, price, dayChange, marketCap, id}){

    return (
        <Link to={`/coin/${id}`} className="flex justify-between p-4 items-center text-lg font-medium hover:bg-indigo-200 border-b-2 border-slate-400 cursor-pointer">
            <div className="w-44">
                <div className="flex gap-3 items-center">
                    <img src={image} className="w-14"></img>
                    <div className="whitespace-pre-wrap max-w-[100px]">{name}</div>
                </div>
            </div>
            <div className="w-44 text-center"><div className="">€ {price.toFixed(2)}</div></div>
            <div className="w-44 text-center">
                {dayChange > 0 ? <div className="text-green-600">+{dayChange.toFixed(2)}%</div> : <div className="text-red-600">{dayChange.toFixed(2)}%</div>}
            </div>
            <div className="w-44 text-center"><div>€ {marketCap.toLocaleString()}</div></div>
        </Link>
    );
}