const app = require('./app');
const dotenv = require('dotenv');
const path  = require('path');
const connectDataBase = require('./config/database');

dotenv.config({path:path.join(__dirname,"config/config.env")}) //absolute path
connectDataBase();

app.listen(process.env.PORT,()=>{
console.log(`Server listening port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})