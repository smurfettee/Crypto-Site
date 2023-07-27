import { Link } from "react-scroll";
import { Link as LLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex bg-indigo-800">  
            <div className="w-1/2 flex justify-end">
                <div className="w-1/2 flex justify-center pt-9 pb-7">
                    <LLink to={'/'} className="text-4xl text-white font-extrabold relative bottom-2 drop-shadow-lg cursor-pointer">Coinsafe</LLink>
                </div>
            </div>
            <div className="w-1/2 flex justify-start">
                <div className="w-1/2 flex justify-center text-2xl gap-10 pt-9 pb-7 ">
                    <Link to={'marketUpdate'} smooth={true} duration={1000} className="font-bold text-white transition hover:text-pink-600 duration-300 drop-shadow-lg cursor-pointer">Market</Link>
                    <Link to={'chooseUs'} smooth={true} duration={1000} className="font-bold text-white transition hover:text-pink-600 duration-300 drop-shadow-lg cursor-pointer">Why Us?</Link>
                    <Link to={'join'} smooth={true} duration={1000} className="font-bold text-white transition hover:text-pink-600 duration-300 cursor-pointer">Join</Link>
                </div>
            </div>
        </div>
    );
}