import { Router } from 'express'

import {
  userRegistration,
  userLogin,
  viewProfile,
  updateProfile,
  viewFiles,
  downloadFiles,
  getUsers,
  checkRatingForFirstTime,
  userFeedback,
  appsRating,
  viewApps,
  forgotPassword,
  updatePassword
} from './controller'

const router = new Router()

router.post('/registration', userRegistration)

router.get('/forgotpassword', forgotPassword)

router.put('/updatepassword/:id',updatePassword)

router.post('/appsRating', appsRating)

router.post('/userfeedback', userFeedback)

router.get('/viewApps', viewApps)

router.get('/checkRatingForFirstTime', checkRatingForFirstTime)

router.get('/userlogin', userLogin)

router.get('/viewprofile', viewProfile)

router.put('/updateprofile/:id', updateProfile)

router.get('/viewfiles', viewFiles)


router.get('/downloadFiles/:id', downloadFiles)

router.get('/getusers', getUsers)

export default router
