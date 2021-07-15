import mongoose from "momgoose";
const cardSchema = mongoose.Schema({
    name : String,
    url : String
})
export default mongoose.model('cards',cardSchema);