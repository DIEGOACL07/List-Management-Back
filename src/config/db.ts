import colors from 'colors';
import mongoose from "mongoose";
import { exit } from "node:process";


export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL ?? '');
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`Conectado en: ${url}`));
        
        console.log(connection);
    } catch (error: any) {
        //console.log(error.message);
        console.log(colors.red.bold('Error al conectar a MongoDB'));
        exit(1);
    }
}