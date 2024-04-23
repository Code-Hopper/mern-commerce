import express from "express"

import { test , validateAdmin , userRegister , userLogin } from "../controllers/controller.js"

let router = express()

router.get('/api/test', test)

router.post('/api/admin-login', validateAdmin)

router.post('/api/user/register',userRegister)
router.post('/api/user/login',userLogin)

export default router