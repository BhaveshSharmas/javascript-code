const zod = require('zod');

function validated(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);

    console.log(response);
    
}

validated([1,2,3])

function emailValidat(object){
    const schema = zod.object({
        email:zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(object);

    console.log(response);
    
}

emailValidat({
    email: "bhaveshshartmgmail.com",
    password: "12345678"
})