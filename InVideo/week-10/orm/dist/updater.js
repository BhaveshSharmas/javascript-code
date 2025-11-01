import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function update(email, { firstname, lastname }) {
    const res = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            firstname,
            lastname
        }
    });
    console.log(res);
}
update("BhaveshGmail.com", {
    firstname: "dnaker",
    lastname: "Sharma"
});
//# sourceMappingURL=updater.js.map