const mongoose = require('mongoose');

const DandDSchema = mongoose.Schema({
    name_of_campagne: {type:String, required: true},
    name_of_world: {type:String, required: true},
    difficulty: {type:Number, required: false},
    pitch: {type:String, required: true},
    number_of_player_recomended: {type:Number, required: false},
    importants_place: {type:Array, required: false},
    monster_list: {type:Array, required: false},
    monster_name: {type:Array, required: false},
    creator: {type:String, required: false},
    creationDate: {type:Date, required: true},
    modificationDate: {type:Date, required: true},
    creationUser: {type:String, required: true},
    modificationUser: {type:String, required: true},
    active: {type:Boolean, required: true},
});

module.exports = mongoose.model('DandD', DandDSchema);