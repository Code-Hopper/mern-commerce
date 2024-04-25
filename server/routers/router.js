import express from "express"
import {Auth} from "../middleware/Auth.js" 
import { test , validateAdmin , userRegister , userLogin , account } from "../controllers/controller.js"

let router = express()

router.get('/api/test', test)

router.post('/api/admin-login', validateAdmin)

router.post('/api/user/register',userRegister)
router.post('/api/user/login',userLogin)
router.get('/api/user/account',Auth,account)

export default router