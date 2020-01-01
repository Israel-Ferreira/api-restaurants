import {Schema, model} from 'mongoose'

const ProductSchema = new Schema({
    "name": {type: String, required: true},
    "photo": {type: String, required: true},
    "category": {type: String, required: true},
    "restaurant": {type: Schema.Types.ObjectId, ref: "Restaurant"}
})


export default model('Product', ProductSchema, 'products')