import { Router } from 'express'
const router = Router()
import * as consolesCtrl from '../controllers/consoles.js'

/* GET users listing. */
router.get('/consoles', consolesCtrl.index)
router.get('/consoles/:id', consolesCtrl.show)
router.post('/consoles', consolesCtrl.create)
router.put('/consoles/:id', consolesCtrl.update)
router.delete('/consoles/:id', consolesCtrl.delete)

export {
  router
}
