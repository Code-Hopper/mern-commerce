import express from "express"

import { test , validateAdmin , userRegister } from "../controllers/controller.js"

let router = express()

router.get('/api/test', test)

router.post('/api/admin-login', validateAdmin)

router.post('/api/user/register',userRegister)

export default router