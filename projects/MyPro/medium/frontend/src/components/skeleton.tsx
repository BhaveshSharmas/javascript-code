export const Skeleton = () => {
    return <div className="mt-6 w-[40%] bg-green-100">
        <div className="bg-white w-parent">
            <div className="text-xs text-slate-500">
                <div className='inline mr-3'>
                    {/* <Avatar avname="B" size='small' /> */}
                </div>
                <div className="h-3 bg-gray-200 rounded-full w-48 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-48 mb-4"></div>  
            </div>
            <div className="mt-2 text-xl font-bold w-[60%]">
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
            <div className="text-sm mt-1 text-gray-400 tracking-wide">
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
            <div className="text-xs text-gray-500 mt-6 flex justify-between">
                <div className="h-2 bg-gray-200 rounded-full w-48 mb-2"></div>
            </div>
        </div>
    </div>

    {/* <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div> */}
}