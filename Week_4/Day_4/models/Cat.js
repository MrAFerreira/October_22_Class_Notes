const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema is the blueprint for the object we want to accept
const catSchema = new Schema({
  name: {
    type: String,
    //required: true,
    //unique: true,
    trim: true,
    /*  lowercase: true,
    uppercase: true */
    minLength: 1,
    maxLength: 20,
  },
  age: {
    type: Number,
    min: 0,
    max: 25,
  },
  color: {
    type: String,
    enum: ['White', 'Black', 'Orange'],
  },
  profilePic: {
    type: String,
    default:
      'https://ih1.redbubble.net/image.470293168.7346/fposter,small,wall_texture,product,750x1000.u6.jpg',
  },
  password: {
    type: String,
    match: /^(?=.*[0-5])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
  },
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
