import 'reflect-metadata';
import express = require('express');
import { createConnection } from 'typeorm';
import userRoutes from "./user-module/user.routes";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

createConnection()
    .then(() => {
        console.log('Connected to the database');
        app.use('/users', userRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })

    .catch((error) => {
        console.error('Database connection error:', error);
    });
