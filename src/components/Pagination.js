export default function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}){

    let pages = [];

    for (let i=1; i< Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }

    return (
        <div className="flex justify-center m-5">
            <div className="w-1/2 flex justify-between">
                {
                    pages.map((page, index) => {
                        if (currentPage === page){
                            return <button key={index} onClick={() => setCurrentPage(page)} className="
                            m-2 w-8 text-xl font-medium bg-indigo-400 text-white rounded-md">{page}</button>;
                        }else {
                            return <button key={index} onClick={() => setCurrentPage(page)} className="
                            m-2 w-8 text-xl font-medium bg-indigo-800 text-white rounded-md hover:bg-indigo-400">{page}</button>;
                        }
                    })
                }
            </div>
        </div>
    );
}