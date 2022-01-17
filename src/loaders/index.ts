import sequelizeConnection from './database';

(async () => {
   await sequelizeConnection.sync();
   console.log("Database connected");
})()