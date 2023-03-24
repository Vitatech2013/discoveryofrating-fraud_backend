import { Router } from 'express'

import {
  adminLogin,
  viewUsers,
  postapps,
  viewPostedApps,
  deletePosts,
  show,
  update,
  viewFeedBack,
  viewRating,
  forgotPassword,
  updatePassword
} from './controller'

const router = new Router()

router.get('/adminlogin', adminLogin)

router.get('/viewusers', viewUsers)

router.get('/viewRating', viewRating)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

router.get('/viewFeedBack', viewFeedBack)

router.post('/postApps', postapps)



router.get('/viewPostedApps', viewPostedApps)


router.get('/:id', show)


router.delete('/:id', deletePosts)

router.put('/:id', update)



export default router
