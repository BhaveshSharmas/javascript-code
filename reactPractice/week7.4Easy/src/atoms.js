import {atom, selector} from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 110
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})
export const messageAtom = atom({
    key: "messageAtom",
    default: 0
})
export const notificatinAtom = atom({
    key: "networkAnotificatinAtomtom",
    default: 10
})

export const totoalNotificationSelector = selector({
    key: "totoalNotificationSelector",
    get: function({get}) {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const messageAtomCount = get(messageAtom)
        const notificatinAtomCount = get(notificatinAtom)
        return networkAtomCount+jobsAtomCount+messageAtomCount+notificatinAtomCount;
    }
})