import mongoose,{Schema} from 'mongoose'

const categorySchema = new Schema({
    name : {type:String, maxlength: 50, unique:true, required: true},
    description: {type:String, maxlength:255},
    status : {type:Number, default: 1},
    createdAt : {type:Date, default: Date.now}
})

const Category = moongose.model('category', categorySchema)

export default Category