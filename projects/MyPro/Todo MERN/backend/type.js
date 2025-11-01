const zod = require('zod');


const todoFrame = zod.object({
    title: zod.string(),
    description: zod.string()
})

const update = zod.object({
    id: zod.string()
})  

let a = 1;

module.exports = {
    todoFrame: todoFrame,
    update: update
}