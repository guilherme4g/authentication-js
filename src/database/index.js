import { createConnection } from "typeorm";

createConnection().then(() => console.log('bd is ready!'));