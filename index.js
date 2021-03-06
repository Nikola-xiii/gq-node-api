import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || "4000";
const db = "mongodb://nik1990:nik13wolf@ds137404.mlab.com:37404/ql-first-db";
import schema from "./graphql/";

// Connect to MongoDB with Mongoose.
mongoose
    .connect(
        db,
        {
            useCreateIndex: true,
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
                       schema,
                       graphiql: true
                   })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
