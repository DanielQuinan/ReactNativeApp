const mongoose = require('mongoose');
app.listen(PORT, ()=>{
    console.log('escuchando')
}); 
const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
});

module.exports = mongoose.model('User', userSchema);