export default function MarketUpdateCoin({image, name, price, dayChange, marketCap}){
    return (
        <div className="flex justify-between p-4 items-center text-lg font-medium hover:bg-indigo-200 border-b-2 border-slate-400">
            <div className="w-1/4">
                <div className="flex gap-3 items-center ">
                    <img src={image} className="w-14"></img>
                    <div>{name}</div>
                </div>
            </div>
            <div className="w-1/4 text-center"><div className="">€ {price.toFixed(2)}</div></div>
            <div className="w-1/4 text-center">
                {dayChange > 0 ? <div className="text-green-600">+{dayChange.toFixed(2)}%</div> : <div className="text-red-600">{dayChange.toFixed(2)}%</div>}
            </div>
            <div className="w-1/4 text-center"><div>€ {marketCap.toLocaleString()}</div></div>
        </div>
    );
}