import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Updater {
    firstname: string,
    lastname: string
}

async function update(email:string, {firstname,lastname}: Updater){
    const res = await prisma.user.update({
        where: {
            email:email
        },
        data :{
            firstname,
            lastname
        }
    })
    console.log(res);
    
}

update("BhaveshGmail.com",{
    firstname: "dnaker",
    lastname: "Sharma"
})