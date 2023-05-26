function LoadingPost(){
    return(
        <div className="bg-white rounded-xl p-4 shadow-innerShadow gap-5 w-full">
            <p className="w-full h-[300px] bg-gray-300 animate-pulse"></p>
            <div className="flex mt-3 animate-pulse ">
                <p className="h-[50px] w-[50px] rounded-full bg-gray-300 animate-pulse"></p>
                <div className="flex flex-col px-3 w-full animate-pulse">
                    <div className="flex justify-between py-2 items-center mt-1">
                        <p className="font-bold w-[140px] bg-gray-300 h-6 animate-pulse">
                            
                        </p>
                        <p className="font-light text-sm w-[90px] bg-gray-300 h-6 animate-pulse">
                            
                        </p>
                    </div>
                    <p className="w-full bg-gray-300 h-[100px] animate-pulse">
                        
                    </p>
                    <div className="flex justify-end gap-6 mt-1">
                        <a 
                            className="bg-gray-300 w-[100px] h-6 animate-pulse"
                            href="">

                        </a>
                        <a 
                         className="bg-gray-300 w-[100px] h-6 animate-pulse"
                         href="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {LoadingPost}