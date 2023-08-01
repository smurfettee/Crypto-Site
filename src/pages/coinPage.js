import CoinInfo from "../components/CoinInfo";

export default function CoinPage() {

    return (
        <div className="bg-indigo-100 flex flex-col items-center h-screen justify-center md:overflow-auto md:w-full">
            <CoinInfo/>
        </div>
    );
}