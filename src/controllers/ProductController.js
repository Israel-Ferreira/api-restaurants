import ProductRepository from '../repositories/ProductRepository'
import ProductValidator from '../validators/ProductValidator'


class ProductController {
    async getAll(req,res,next){
        const products = await ProductRepository.findAll()
        res.status(200).send(products)
    }

    async getById(req,res,next){
        const {id} = req.params
        const product = await ProductRepository.findById(id)

        if(product){
            res.status(200).send(product)
        }else{
            res.status(404).send({message: "Produto não encontrado"})
        }
    }

    async create(req,res,next){
        if(ProductValidator.validate(req.body)){
            try{
                await ProductRepository.create(req.body)
                res.status(201).send({message: "Produto Criado com Sucesso"})
            }catch(err){
                res.status(500).send(err.message)
            }
        }else{
            res.status(500).send({message: "Erro: Campos do Corpo da Requisição Vazios"})
        }
    }


    async update(req,res,next){
        const {id} = req.params

        if(ProductValidator.validate(req.body)){
            try{
                const product = await ProductRepository.update(id,req.body)
                res.status(200).send(product)
            }catch(err){
                res.status(500).send({message: err.message})
            }
        }else{
            res.status(500).send({message: "Erro: Campos do Corpo da Requisição Vazios"})
        }
    }

    async delete(req,res,next){
        try{
            await RestaurantRepository.delete(id)
            res.status(200).send({message: "Restaurante Deletado com sucesso"})
        }catch(err){
            res.status(500).send({message: err.message})
        }
    }
}


export default new ProductController()
