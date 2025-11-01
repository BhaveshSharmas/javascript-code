export const RevenueCard = function({title,orderCount,amount}){
    return <div className="rounded-lg bg-white shadow-md pr-6 pl-6 pt-5 pb-5 mx-10 my-8">
        <div className=" text-gray-500 flex justify-center flex-col hover:bg-red-100 ">
            {title}
            ?
        </div>
        <div className="flex justify-between mt-4">
            <div className="text-3xl font-semibold">
                $ {amount}
            </div>
            <div className="text-blue-700 place-content-center">
                {{orderCount} ? <div className="flex underline">
                    <div> 
                        {orderCount} order(s)
                    </div>
                    <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path className="fill-blue-700" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </div>
                    </div> : null}
            </div>
            
        </div>
    </div>
}