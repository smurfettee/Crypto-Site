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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
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
        <div id="marketUpdate" className="flex flex-col items-center mb-36 md:w-full ">
            <div className="self-start text-3xl font-bold text-[#242424] mb-6 ">MARKET UPDATE</div>
            <div className="md:self-start md:overflow-x-scroll bg-red-200">
                <div className="flex justify-between text-2xl bg-indigo-800 text-white rounded-t-xl p-2 font-medium">
                    <div className="w-44 text-center">Coin</div>
                    <div className="w-44 text-center">Price</div>
                    <div className="w-44 text-center">24h Change</div>
                    <div className="w-44 text-center">Market Cap</div>
                </div>
                <CryptoList coinsdata={currentPosts}/>
                
            </div>
            <Pagination totalPosts={coinsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}