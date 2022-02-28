const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/student', {
    // useCreateIndex: true, // not supported in mongoose v5
    // useFindAndModify: false, // not supported in mongoose v5
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.log('Error: ' + err);
});

// schema : define a structure of a database, where what is in the database will be defined by the structure
// default validation, value etc.

const studentSchema = new mongo.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// module : are the classes that are used to interact with the database and the database is the module that is used to interact with the database such as insert, update, delete etc.

// collection creation : create a collection in the database
const model = new mongoose.model('Student', studentSchema);

// adding single document 
// const student = new model({
//     name: 'John',
//     age: 24,
//     email: 'example@gmail.com'
// })



// above single document addition code are used to inserted in database with following lines of code 

// we can also add the document to the database using the save method
// this work as a promise and in async way
// student.save().then(() => {
//     console.log('Student added');
// }).catch(err => {
//     console.log('Error: ' + err);
// });





// adding many documents 
// other way to make a connection with the database

// modern way to make a connection with the database

const createStudents = async () => {
    try {
        const students = new model({
            name: 'umesh',
            age: 14,
            email: 'umesh@gmail.com'
        });
        const student1 = new model({
            name: 'John',
            age: 24,
            email: 'john@gmail.com'
        });
        const student2 = new model({
            name: 'Jane',
            age: 24,
            email: 'john2@gmail.com'
        });

        const result = await model.insertMany([students, student1, student2]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}



// calling a function
// createStudents();


// reading a documents from database 
const limitDocument =  async () => {
    try {
        // const result = await model.find({age:24}); // this will return all the documents that have age as 24
        // const result = await model.find({age:24}).select({name:1}); // this will return all the documents that have age as 24 and only name and age
        const result = await model.find({age:24}).select({name:1, _id:1}).limit(3); // this will return all the documents that have age as 24 and only name and age and limit the number of documents to 3
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// calling a function
// limitDocument();



// logical operation in mongoose
// or logical operation
const orFilterDate = async () =>{
    try{
        const result = await model.find({$or : [{age:24},{email:'example@gmail.com'}]}).select({name:1, _id:1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// // calling a function 
// orFilterDate()



// and logical operation
const andFilterDate = async () =>{
    try{
        const result = await model.find({$and : [{age:24},{email:'example@gmail.com'}]}).select({name:1, _id:1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// // calling a function 
// andFilterDate()



// not logical operation
const notFilterDate = async () =>{
    try{
        const result = await model.find({$not : [{age:24},{email:'example@gmail.com'}]}).select({name:1, _id:1}); // except this value we will get all other 10 documents
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// // calling a function 
// notFilterDate()


// not logical operation
const norFilterDate = async () =>{
    try{
        const result = await model.find({$nor : [{age:24},{email:'example@gmail.com'}]}).select({name:1, _id:1}); //  that is true if and only if both operands are false
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// // calling a function 
// norFilterDate()





// Sorting and Count Query Methods using Mongoos
// counting the number of documents in the database

const countDate = async () =>{
    try{
        const result = await model.find(
            {$nor : [{age:24},{email:'example@gmail.com'}]})
            .select({name:1, _id:1}) //  that is true if and only if both operands are false
            .count(); // this will return the number of documents in the database
            console.log(result);
    }catch(err){
        console.log(err);
    }
}

// calling a function 
// countDate()



// sorting the documents
const sortDate = async () =>{
    try{
        const result = await model.find(
            {$nor : [{age:24},{email:'example@gmail.com'}]})
            .select({name:1, _id:1}) //  that is true if and only if both operands are false
            .sort({name:1}); // this will sort the documents in ascending order
            console.log(result);
    }catch(err){
        console.log(err);
    }
}

// calling the function 
// sortDate()  // this will sort the documents in ascending order




// updates the documents useing mongo