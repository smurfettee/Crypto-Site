import CryptoBNS from "./cryptoBNS";

export default function Buynsell() {
    return (
        <div className="w-3/4 flex flex-col items-center mb-52 m-40 md:w-4/5">
            <div  className="w-1/2 m-4 text-center text-[50px] text-[#242424] font-bold md:whitespace-nowrap md:w-[100%] md:text-[40px]">
                Track and Trade
            </div>
            <div className="w-1/2 mb-10 text-center text-[50px] text-[#242424] font-bold md:w-[100%] md:text-[40px]">
                Crypto Currencies
            </div>
            <div className="w-1/2 mb-14 flex justify-center gap-10 md:flex-col">
                <CryptoBNS coin="bitcoin"/>
                <CryptoBNS coin="ethereum"/>
                <CryptoBNS coin="tether"/>
                <CryptoBNS coin="ripple"/>
            </div>
        </div>
    );
}