import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(firstname: string){
    const res = await prisma.user.findFirst({
        where: {
            firstname: firstname
        },
        select:{
            firstname: true
        }
    })
    console.log(res);
}

getUser("ram");