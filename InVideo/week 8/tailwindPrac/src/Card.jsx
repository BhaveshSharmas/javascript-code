export const Card = function(){
    return <div>
        <button className="mx-2 bg-gray-200 py-1.5 rounded-full px-4 shadow text-gray-500 font-medium font-semibold">
            Payouts (22)
        </button>

        <button onClick={function(){
            alert("Refund")
        }} className="mx-2 bg-blue-600 py-1.5 rounded-full px-4 shadow text-white font-medium font-semibold">
            Refunds (6)
        </button>
    </div>
}