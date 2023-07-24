export default function ChooseUs(){

    const URL = "https://icons.veryicon.com/png/o/business/bitcoin-icon/wallet-109.png";

    return (
        <div id="chooseUs" className=" w-3/4  flex flex-col items-center mb-60">
            <div className="m-10 font-bold  text-5xl text-indigo-800">Why Coinsafe?</div>
            <div className="flex">
                <div className="m-10 flex flex-col items-center w-1/3">
                    <img className="w-44 mb-4" src="https://cdn-icons-png.flaticon.com/512/3437/3437364.png"></img>
                    <div className="mb-2 text-2xl font-medium">Simplicity</div>
                    <div className="text-xl text-[#242424]">Coinsafe makes it easy to buy crypto using our mobile apps.</div>
                </div>
                <div className="m-10 flex flex-col items-center w-1/3">
                    <img className="w-44 mb-4" src="https://cdn-icons-png.flaticon.com/512/4319/4319160.png"></img>
                    <div className="mb-2 text-2xl font-medium">Education</div>
                    <div className="text-xl text-[#242424]">Not sure where to start? Head to our Discord and learn everything about crypto.</div>
                </div>
                <div className="m-10 flex flex-col items-center w-1/3">
                    <img className="w-44 mb-4" src="https://www.datocms-assets.com/30881/1629792639-web-iconsolutionshuman-handoff.svg?auto=format&w=640"></img>
                    <div className="mb-2 text-2xl font-medium">Service</div>
                    <div className="text-xl text-[#242424]">Find your answers instantly in our discord server. Reach us 24/7/365.</div>
                </div>
            </div>
        </div>
    );
}