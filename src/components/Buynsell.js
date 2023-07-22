import CryptoBNS from "./cryptoBNS";

export default function Buynsell() {
    return (
        <div className="w-3/4 flex flex-col items-center mb-52 m-40">
            <div  className="w-1/2 m-4 text-center text-[50px] text-[#242424] font-bold">
                Track and Trade
            </div>
            <div className="w-1/2 mb-10 text-center text-[50px] text-[#242424] font-bold">
                Crypto Currencies
            </div>
            <div className="w-1/2 mb-14 flex justify-center gap-10">
                <CryptoBNS coin="bitcoin"/>
                <CryptoBNS coin="ethereum"/>
                <CryptoBNS coin="tether"/>
                <CryptoBNS coin="ripple"/>
            </div>
        </div>
    );
}