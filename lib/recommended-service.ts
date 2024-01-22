import { db }  from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async ( ) =>{

  const user = getSelf();
  console.log(user);


  const users = await db.user.findMany({
    orderBy:{
      createdAt: "desc"
    }
  });

  return users;

}