import {Router} from 'express'
import RestaurantController from '../controllers/RestaurantController'

const router = Router()

router.get('/',RestaurantController.getAll)
router.post('/', RestaurantController.create)

router.get('/:id',RestaurantController.getById)
router.put('/:id',RestaurantController.update)
router.delete('/:id',RestaurantController.destroy)

export default router