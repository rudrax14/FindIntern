const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const express = require('express');
const connectDB = require('./conn')

const cors = require('cors')
const app = express();
connectDB();
app.use(cors())

const authRouter = require('./routers/authRouters');
const userRouter = require('./routers/userRouters');
const companyRouter = require('./routers/companyRouters');
const jobRouter = require('./routers/jobRouters');
const adminRouter = require('./routers/adminRouters');

const errorControllers = require('./controllers/errorControllers');


app.use(express.json());
app.use("/api/v1/auth/",authRouter);
app.use("/api/v1/jobseeker/", userRouter);
app.use("/api/v1/recruiter/", companyRouter);
companyRouter.use('/:companyId', jobRouter);
app.use("/api/v1/admin/",adminRouter);

//  app.use("/api/v1/jobseeker/company/:companyId/job/:jobId", userRouter, companyRouter, jobRouter);

app.use(errorControllers);


app.listen(5000, () => {
    console.log("Listening");
})
















