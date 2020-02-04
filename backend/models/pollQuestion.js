var mongoose = require('mongoose');// Setup schema
var pollSchema = mongoose.Schema({
    
    instruction_text:{
        type:String,
        required: true
    },
    answer_options:[],
    answer:{
        type:String,
        required:true
    }
    create_date: {
        type: Date, 
        default: Date.now
    }
});// Export Contact model
var Poll = module.exports = mongoose.model('polls', pollSchema);module.exports.get = function (callback, limit) {
    Poll.find(callback).limit(limit);
}