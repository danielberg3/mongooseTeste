const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://admin:<a1b2c3d4>@cluster0.olhcifm.mongodb.net/test');
}

module.exports = {startDB};