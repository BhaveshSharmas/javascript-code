import axios from "axios"
import { atom,selector } from "recoil"

// export const notificationAtom = atom({ //The Default values for atom should be synchronous or a selector which can be async
//     key:"notificationAtom",
//     default: ({
//         network: 1,
//         jobs: 2,
//         message: 3,
//         notification: 4
//     })
// })

export const notificationAtom = atom({ //The Default values for atom should be synchronous or a selector which can be async
    key:"notificationAtom",
    default: selector({
        key: "notificationAtomSelector",
        get: async () => {
            const res = await axios.get("http://localhost:3000/")
            return res.data
        }
    })
})

export const  notificationSelector = selector({
    key: "notificationSelector",
    get: ({get}) => {
        const notif = get(notificationAtom)
        return notif.network +
        notif.jobs +
        notif.message+
        notif.notification
    }
})