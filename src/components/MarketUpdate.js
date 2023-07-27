import { useEffect, useState } from "react";
import CryptoList from "./CryptoList";
import Pagination from "./Pagination";

export default function MarketUpdate(){

    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&sparkline=false&price_change_percentage=1h&locale=en", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            response.json().then(res => {
                setCoinsData(res);
                console.log(res);
            });
        });
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div id="marketUpdate" className="w-1/2 flex flex-col items-center mb-36">
            <div className="self-start text-3xl font-bold text-[#242424] mb-6">MARKET UPDATE</div>
            <div className="w-[100%]">
                <div className="flex justify-between text-2xl bg-indigo-800 text-white rounded-t-xl p-2 font-medium">
                    <div className="w-1/4 relative left-4">Coin</div>
                    <div className="w-1/4 text-center">Price</div>
                    <div className="w-1/4 text-center">24h Change</div>
                    <div className="w-1/4 text-center">Market Cap</div>
                </div>
                <CryptoList coinsdata={currentPosts}/>
                <Pagination totalPosts={coinsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    );
}