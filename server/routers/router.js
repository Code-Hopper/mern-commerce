import express from "express"

import { test , validateAdmin } from "../controllers/controller.js"

let router = express()

router.get('/api/test', test)

router.post('/api/admin-login', validateAdmin)

export default router