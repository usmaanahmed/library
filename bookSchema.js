import mongoose from "mongoose";
const {Schema} = mongoose;

const bookSchema = new Schema({
    isdn:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    mode:{
        type: String,
        required: true
    }

})

export default mongoose.model('book',bookSchema);