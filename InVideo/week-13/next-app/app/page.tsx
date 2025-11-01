import { PrismaClient } from "@prisma/client";
import axios from "axios";
import Image from "next/image";

const client = new PrismaClient();

async function getuserDetails() {

  const response = await client.user.findMany(
          {
              take:10
          }
      )
      
      return response[0]

  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  // const response = await axios.get("http://localhost:3000/api/users")
  // return response.data

}
//make this an async component
export default async function Home() {
  const userdetail = await getuserDetails();
  return (
    <div>
      hi there
      <div>
        {userdetail.username}
      </div>
    </div>
  );
}
