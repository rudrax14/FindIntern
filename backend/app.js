const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const express = require('express');
const connectDB = require('./conn')


const app = express();
connectDB();


const userRouter = require('./routers/userRouters');
const companyRouter = require('./routers/companyRouters');
const jobRouter = require('./routers/jobRouters');

const errorControllers = require('./controllers/errorControllers');


app.use(express.json());
app.use("/api/v1/jobseeker/",userRouter);
app.use("/api/v1/company/",companyRouter);
companyRouter.use('/:companyId',jobRouter);

//  app.use("/api/v1/jobseeker/company/:companyId/job/:jobId", userRouter, companyRouter, jobRouter);

app.use(errorControllers);


app.listen(5000,()=>{
    console.log("Listening");
})
















