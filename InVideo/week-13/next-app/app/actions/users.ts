"use server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function solve(username: string, password:string) {
    try {
        await  client.user.create(
            {
                data:{
                    username,
                    password
                }
            }
        )
        return true
    } catch (e) {
        console.log(e);
        return false
    }
}