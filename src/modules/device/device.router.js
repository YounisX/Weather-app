import { Router } from "express";
import *as deciveController from '../device/controller/device.js'
import auth, { roles } from "../../middleware/auth.js";
const router = Router()




router.get('/', (req ,res)=>{
    res.status(200).json({message:"User Module"})
})

router.post('/create',deciveController.createDevice)

export default router