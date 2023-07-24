import Buynsell from "../components/Buynsell";
import ChooseUs from "../components/ChooseUs";
import Join from "../components/Join";
import MarketUpdate from "../components/MarketUpdate";

export default function MainPage() {
    return (
        <div className="bg-indigo-100 flex flex-col items-center">
            <Buynsell/>
            <MarketUpdate/>
            <ChooseUs/>
            <Join/>
        </div>
    );
}