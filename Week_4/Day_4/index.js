// ODM - Object Document Mapper
// CRUD - Create Read Update Delete

const mongoose = require('mongoose');
const Cat = require('./models/Cat');

//connect to a database
/* mongoose
  .connect('mongodb://localhost/exampleApp')
  .then((x) => console.log(`Connected to: ${x.connections[0].name}`))
  .catch((err) => console.log(err)); */

//Models
// Should be Capitalized
//defining the model
//const Cat = mongoose.model('Cat', { name: String });
//cats

/* const weakKitty = { name: 'Garfield' };
const kitty = new Cat(weakKitty); */

//save

/* kitty
  .save()
  .then((savedKitty) => console.log(`New cat created, ${savedKitty}`))
  .catch((err) => console.log(err));
 */
/* for (let i = 0; i < 100; i++) {
  let newCat = new Cat({ name: `Ironhacker ${i}` });
  newCat.save().then((savedCat) => {
    console.log(`New cat created, ${savedCat.name}`);
  });
} */

//Async await

async function dbManagement() {
  try {
    const connection = await mongoose.connect('mongodb://localhost/exampleApp');
    console.log(connection.connections[0].name);

    //Create
    /*  const kitty = new Cat({ name: 'Basement', age: 12, color: 'Black' });
    const savedCat = await kitty.save(); */
    //console.log(savedCat.name);
    //await Cat.create({ name: 'Felix', age: 12, color: 'Black' });

    //Read
    /* let foundCat = await Cat.find({ name: 'Doraemon' });
    console.log(foundCat); */
    /* let foundCats = await Cat.find({ age: { $gt: 10 } }, 'name', { sort: { name: 1 }, limit: 10 });
    console.log(foundCats); */

    /* let middleCat = await Cat.findOne({ name: 'Middle' });
    console.log(middleCat); */

    /* let thisCat = await Cat.findById('635a719db6b768f2a186008e');
    console.log(thisCat); */

    /*   let updatedCat = await Cat.updateOne({ name: 'Middle' }, { age: 15 });
    console.log(updatedCat); */

    /*     let updateAllCats = await Cat.updateMany({ age: 12 }, { age: 13 });
    console.log(updateAllCats); */
    /*  let thisUpdatedCat = await Cat.findByIdAndUpdate(
      '635a6d4773ba73001e764373',
      {
        name: 'Bolinhas',
      },
      { new: true }
    );
    console.log(thisUpdatedCat); */

    //Delete
    /*  await Cat.deleteOne({ name: 'Ceiling' });
    await Cat.findByIdAndRemove('635a719db6b768f2a186008e');
    await Cat.deleteMany({ age: 13 }); */
    let howMany = await Cat.countDocuments();
    console.log(howMany);

    connection.disconnect();
  } catch (error) {
    console.log(error);
  }
}

dbManagement();
