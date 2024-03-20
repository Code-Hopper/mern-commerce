import express from "express"

import { test } from "../controllers/controller.js"

let router = express()

router.get('/api/test', test)

export default router