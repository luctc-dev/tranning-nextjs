// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/api";

export default async (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  // async await
  console.log(req.headers.cookie);

  const method = req.method;
  res.setHeader
  if(method !== "POST") {
    res.statusCode = 200;
    res.json({
      status: 500,
      message: "Method Not Allowed"
    })
  }
  const data = req.body;
  console.log("1. Api/Login Run | data = ", data) // Server
  try {
    const resHeroku = await api.callJson('/member/login.php', { data, method })
    const currentTime = new Date()
    const nextYear = new Date(currentTime.getFullYear() + 1, currentTime.getMonth());
    
    console.log("2. Response from heroku", resHeroku); // Server
    
    if(resHeroku.status === 200) {
      console.log("3. Gui Location thong qua Header -> Redirect"); // Server
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Set-Cookie', `token=${resHeroku.token}; expires=${nextYear.toUTCString()}; Path=/`);
      res.json(resHeroku);
    } else {
      
      res.statusCode = 302;
      res.setHeader('Location', '/login?error=failed')
      res.json(resHeroku);
    }
    
  } catch(e) {
    res.statusCode = 200;
    res.json({
      status: 500,
      message: "Internal Server Error"
    })
  }
}
