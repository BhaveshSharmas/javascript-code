import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function getUser(firstname) {
    const res = await prisma.user.findFirst({
        where: {
            firstname: firstname
        },
        select: {
            firstname: true
        }
    });
    console.log(res);
}
getUser("ram");
//# sourceMappingURL=getUser.js.map