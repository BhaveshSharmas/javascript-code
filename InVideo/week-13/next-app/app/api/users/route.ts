import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    const response = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    if(!response){
        return NextResponse.json({
        result: "not done!"
    })
    }

    return NextResponse.json({
        result: "done!"
    })

}

export async function GET() {
    
    const response = await client.user.findMany(
        {
            take:10
        }
    )
    
    return NextResponse.json({
        data: response[0]
    })
}

// export async function POST(req:NextRequest) {
//     //this is how we get the body ot the json
//     const body = await req.json();

//     //headers
//     const heder = req.headers.get("authorization");

//     //query parameters
//     const parms = req.nextUrl.searchParams.get("name");
//     console.log(body);
    
//     return NextResponse.json({
//         result: body,
//         headers:heder,
//         params: parms
//     })
// }