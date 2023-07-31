import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTwitter,faFacebook, faWhatsapp, faInstagram, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
library.add(faTwitter, faFacebook,faWhatsapp, faInstagram, faDiscord, faYoutube);

export default function Join(){
    return (
        <div className='flex flex-col items-center mb-28'>
            <div id="join" className="flex items-center md:flex-col md:m-4">
                <img className="w-44 mr-12 md:relative md:left-6" src="https://cdn-icons-png.flaticon.com/512/5171/5171046.png"></img>
                <div className="flex flex-col items-center gap-6 md:mt-16 md:mb-16">
                    <div className="text-6xl font-bold text-[#242424]">Join us via</div>
                    <div className="text-6xl font-bold text-indigo-800">Discord</div>
                    <div className="text-2xl">Invest and manage all your crypto at one place.</div>
                    <a href="https://discord.com" target="_blank" className="shadow-xl mt-12 bg-indigo-800 rounded-s-full rounded-e-full pl-10 pr-10 p-5 text-neutral-200 text-xl font-medium hover:bg-indigo-600 transition duration-100">Join via Discord</a>
                </div>
                <img className="w-44 h-44 ml-12" src="https://cdn-icons-png.flaticon.com/512/1685/1685646.png"></img>
            </div>
            <div className='w-1/2 flex justify-center gap-5 mt-20'>
                <a href='https://twitter.com' target="_blank"><FontAwesomeIcon icon="fa-brands fa-twitter" className='text-indigo-800 text-4xl hover:text-indigo-500 cursor-pointer'/></a>
                <a href='https://discord.com' target="_blank"><FontAwesomeIcon icon="fa-brands fa-discord" className='text-indigo-800 text-4xl hover:text-indigo-500 cursor-pointer'/></a>
                <a href='https://www.facebook.com' target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook" className='text-indigo-800 text-4xl hover:text-indigo-500 cursor-pointer'/></a>
                <a href='https://www.youtube.com' target="_blank"><FontAwesomeIcon icon="fa-brands fa-youtube" className='text-indigo-800 text-4xl hover:text-indigo-500 cursor-pointer'/></a>
            </div>
            <div className='mt-10 flex gap-6 text-lg font-medium text-indigo-800'>
                <a className='hover:text-indigo-500 cursor-pointer'>Privacy</a>
                <a className='hover:text-indigo-500 cursor-pointer'>Terms of Use</a>
            </div>
        </div>
    );
}