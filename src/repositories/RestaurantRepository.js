import Restaurant from '../models/Restaurant'


class RestaurantRepository {
    async findAll(){
        return await  Restaurant.find({})
    }

    async findById(id) {
        if(id !=  null) {
            return await Restaurant.findById(id)
        }else{
            throw new Error("Erro: Id Inválido")
        }
    }

    async create(data){
        const restaraunt = new Restaurant(data)
        await restaraunt.save()
    }

    async update(id,data){
        const restaurant = await Restaurant.findByIdAndUpdate(id, data)
        return restaurant
    }


    async delete(id){
        await Restaurant.findByIdAndDelete(id)
    }

}



export default new RestaurantRepository()