import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email:string, firstname:string, lastname:string, password:string){
    const res = await prisma.user.create({
        data: {
            email,
            firstname,
            lastname,
            password
        },
        select: {
            id: true,
            password: true
        }
    })

    console.log(res);
    
}
insertUser("user2@gmail.com","ram","sharma","1008");
