import { PrismaClient } from "@prisma/client";

const pc = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    const test = await pc.user.create({
        data: {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname
        }
    })

    console.log(test);

}

async function updateUser() {
    const data = await pc.user.update({
        where: {
            username: "Bhavesh",
        },
        data: {
            lastname: "random",
        }
    })
}

async function insertTodo() {
    const res = await pc.todos.create({
        data: {
            title: "First to do",
            description: "first first karunga jaldi",
            done: true,
            userId: 1
        }
    })
    console.log(res);
    
}

async function getData(userId: number){
    const res = await pc.todos.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title:true,
            description: true,
            user: true
        }
    })

    console.log(res);
    
}

// insertUser("random", "12345", "random", "sharma");
//  updateUser();
// insertTodo();
getData(1);
