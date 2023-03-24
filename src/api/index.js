import { Router } from 'express'

import User from './User'
import Admin from './Admin'

const router = new Router()

router.use('/admin', Admin)
router.use('/user', User)

export default router