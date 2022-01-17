import { Dialect, Sequelize } from 'sequelize';
import config from '@/config';

const connection = new Sequelize("solvex", "user", "pass", {
    host: './dev.sqlite',
    dialect: 'sqlite',
    logging: false,
})

export default connection;