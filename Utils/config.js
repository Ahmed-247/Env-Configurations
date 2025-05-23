import dotenv from "dotenv";
dotenv.config();

const mongodb_url = process.env.Mongo_URL;
const jwtsecret = process.env.Jwt_secret;
const port = process.env.PORT

export {mongodb_url, jwtsecret, port};
