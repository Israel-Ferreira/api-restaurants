import RestaurantRepository from '../repositories/RestaurantRepository'
import RestaurantValidator from '../validators/RestaurantValidator'

class RestaurantController {
    //restaurantRepository = new RestaurantRepsitory()


    async getAll(req,res,next) {
        const restaurants = await RestaurantRepository.findAll()
        res.status(200).send(restaurants)
    }

    async getById(req,res,next){
        const {id} = req.params

        try{
            const restaurant = await RestaurantRepository.findById(id)
            res.status(200).send(restaurant)
        }catch(err){
            res.status(500).send(err.message)
        }
    }

    async create(req,res,next) {
        console.log(req.body)
        if(RestaurantValidator.validate(req.body)) {
            try {
                await RestaurantRepository.create(req.body);
                res.status(201).send({message: "Restaurante Criado com Sucesso"})
            }catch(err){
                res.status(500).send({message: err.message})
            }
        }else{
            res.status(500).send({message: "Erro: Campos do Corpo da Requisição Vazios"})
        }
    }


    async update(req,res,next){ 
        const {id} = req.params
        const data = req.body

        if(RestaurantValidator.validateRestaurant(data)){
            try{
                const restaurant = await RestaurantRepository.update(id,data)
                res.status(200).send(restaurant)
            }catch(err){
                res.status(500).send({message: err.message})
            }
        }else{
            res.status(500).send({message: "Erro: Campos do Corpo da Requisição Vazios"})
        }
    }


    async destroy(req,res,next){
        const {id} = req.params

        try{
            await RestaurantRepository.delete(id)
            res.status(200).send({message: "Restaurante Deletado com sucesso"})
        }catch(err){
            res.status(500).send({message: err.message})
        }
    }
}

export default new RestaurantController();