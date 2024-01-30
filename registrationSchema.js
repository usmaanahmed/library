import mongoose, { mongo } from "mongoose";
const {Schema} = mongoose;

const registrationSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model('registration',registrationSchema);