export default function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}){

    let pages = [];

    for (let i=1; i< Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }

    return (
        <div className="flex justify-center m-5">
            <div className="w-1/2 flex justify-between md:w-[100%]">
                {
                    pages.map((page, index) => {
                        if (currentPage === page){
                            return <button key={index} onClick={() => setCurrentPage(page)} className="
                            m-2 w-16 text-xl font-medium bg-indigo-400 text-white rounded-md md:w-6 sm:w-4">{page}</button>;
                        }else {
                            return <button key={index} onClick={() => setCurrentPage(page)} className="
                            m-2 w-16 text-xl font-medium bg-indigo-800 text-white rounded-md hover:bg-indigo-400 md:w-6 sm:w-4">{page}</button>;
                        }
                    })
                }
            </div>
        </div>
    );
}