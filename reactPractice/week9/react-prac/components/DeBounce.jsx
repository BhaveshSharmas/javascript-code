import { useEffect, useState } from "react"

export const SearchBar = function () {
    const [input, setInput] = useState(0);
    const debounced = useDebounce(input, 500);

    return <div>
        {debounced}
        <input type="text" onChange={function (e) {
            setInput(e.target.value)
        }} />
    </div>
}

function useDebounce(value, delay) {
    const [input, setInput] = useState(value);

    useEffect(function () {
        const oldClock = setTimeout(function () {
            setInput(value)
        }, delay)

        return function(){
            clearInterval(oldClock)
        }
    }, [value])
    
    return input
}

function useDebounced(value,timeout){
    const [input, setInput] = useState(value);

    let clocks = null;

    useEffect(function(){
        clearTimeout(clocks)
        clocks = setTimeout(function(){
            setInput(value)
        },timeout)
    },[value])

    return input
}
 