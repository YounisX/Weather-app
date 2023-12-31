import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import deviceRouter from './modules/device/device.router.js'
import userRouter from './modules/user/user.router.js'
import { globalErrorHandling } from './utils/errorHandling.js'



const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    //Setup API Routing 
    app.use(`/auth`, authRouter)
    app.use(`/user`, userRouter)
    app.use(`/device`,deviceRouter)


    app.all('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    app.use(globalErrorHandling);
    connectDB()

}


export default initApp