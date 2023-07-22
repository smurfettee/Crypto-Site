import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex bg-indigo-800">  
            <div className="w-1/2 flex justify-end">
                <div className="w-1/2 flex justify-center pt-9 pb-7">
                    <Link to={'/'} className="text-4xl text-white font-extrabold relative bottom-2 drop-shadow-lg">Coinsafe</Link>
                </div>
            </div>
            <div className="w-1/2 flex justify-start">
                <div className="w-1/2 flex justify-center text-2xl gap-10 pt-9 pb-7 ">
                    <Link to={'/market'} className="font-bold text-white transition hover:text-pink-600 duration-300 drop-shadow-lg">Market</Link>
                    <Link to={'/about'} className="font-bold text-white transition hover:text-pink-600 duration-300 drop-shadow-lg">About</Link>
                    <Link to={'/join'} className="font-bold text-white transition hover:text-pink-600 duration-300 ">Join</Link>
                </div>
            </div>
        </div>
    );
}