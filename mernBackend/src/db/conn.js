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
createStudents();