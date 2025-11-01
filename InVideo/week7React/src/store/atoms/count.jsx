import { atom, selector } from "recoil";

export const countAtom = atom({  //After that app.jsx does not need/use a useState variable dows not use a useContext we can
    key: "countAtom",     // get rid of everything.
    default: 0  
})

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom)
        return count % 2 == 0;
    }
})