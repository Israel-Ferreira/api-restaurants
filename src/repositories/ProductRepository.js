import Product from '../models/Product'

class ProductRepository {
    async findAll(){
        const products =  await Product.find({}).populate('restaurant','name')
        return products
    }

    async findById(id){
        const product  = await Product.findById(id).populate('restaurant', 'name')
        return product
    }

    async create(data){
        const product = new Product(data)
        await product.save()
    }

    async update(id,data){
        const product = await Product.findByIdAndUpdate(id,data)
        return product
    }

    async delete(id){
        await Product.findByIdAndDelete(id)
    }
}

export default new ProductRepository()