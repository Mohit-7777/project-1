import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true,
    }
))


app.use(
  express.json({                                    //This means i can accept json via express
    limit: "16kb",
  })
);  

app.use(express.urlencoded({                        //This is used to encode the url like mohit%bisht%age%22  something
    extended:true,
    limit: "16kb"
}))

app.use(express.static("public"))                   //Used to store the files like imgs or pdfs in our local server so everyone can use it


app.use(cookieParser())                             //to access the cookies and use cookies from user browser
                                                    //only server can use it and server can remove it


//routes import
import userRouter from "./routes/user.routes.js"
                                                    
//routes declaration
app.use("/api/v1/users", userRouter )

// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/users/login        automatically


export { app }