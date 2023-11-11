import pkg from "pg";
const { Client } = pkg

export const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5050,
    password: "said250/",
    database: "forportfolio"
})
