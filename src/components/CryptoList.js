import MarketUpdateCoin from "./MarketUpdateCoin";

export default function CryptoList({coinsdata}){
    return (
        <div>
            {
                coinsdata.map((coin, index) => {
                    return (
                        <MarketUpdateCoin
                            key={index}
                            image={coin.image}
                            name={coin.name}
                            id = {coin.id}
                            price={coin.current_price}
                            dayChange={coin.price_change_percentage_24h}
                            marketCap={coin.market_cap}
                        />
                    );
                })
            }
        </div>
    );
}