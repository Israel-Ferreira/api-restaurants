import { Schema,model } from 'mongoose'


const RestaurantSchema = new Schema({
    "name": {type: String, required: true },
    "photo": {type: String, required: true },
    "address": {type: String, required: true},
    "openingHours": {type: String, required: true}
})


export default model('Restaurant', RestaurantSchema, 'restaurants')
