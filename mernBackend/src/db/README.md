# to run a project in terminal 
go to -> package.json 
add 
    -> "dev": "nodemon src/app.js"
    in script 

# to connect the database 
    -> const mongo = require('mongoose');
    mongo.connect('mongodb://localhost:27017/student', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log('Error: ' + err);
    });


# basic commands of MongoDB cheatsheet 
    1) # database operation 
    -> show dbs

    2) # show current database 
    -> db

    3) # create / switch new database 
    -> use dbname 

    4) # create document  
    -> db.databaseName.insertOne ({
        name: "name here",
        price: 50
    }) 

    5) # create a many documents 
    db.databseName.insert(
        {
        name: "nameHere",
        price: 50
        },
        {
            name: "anotherName",
            price:60
        },{
            name: "anotherName",
            price: 70
        }
    )

    6) # find one document 
    db.databseName.findOne()


    7) # find documents 
    db.databseName.find()

    8) # find documents in format 
    db.databseName.find().pretty()


    9) # update one document 
    db.databaseName.updateOne(
        {id:1}, 
        {$set: 
        {name: "name to be modified"}
        })

    10) # update multiple 
    db.databaseName.updat(
        {"price":50},
        {
            $set : {"price":60}
        }
    )


    11) # sorting in assending order 
    db.databaseName.find.sort(
        {name: 1}
    ).pretty()


    12) # desending order 
    de.databaseName.find.sort(
        {name:-1}
    ).pretty()


    13) # Add index for single field 
    db.databseName.createIndex(
        {"name": 1}
    )

    14) # create compound index 
    db.databaseName.createIndex(
        {"name" : 1, "date" : 1}
    )


    15) # delete documents 
    db.databaseName.remove(
        {name: "name to delete"}
    )


    16) # Drop index 
    de.databaseName.dropIndex("databaseName")


# reading data from DB
    // reading a documents from database 
    const getDocument =  async () => {
        try {
            // const result = await model.find({age:24}); // this will return all the documents that have age as 24
            // const result = await model.find({age:24}).select({name:1}); // this will return all the documents that have age as 24 and only name and age
            const result = await model.find({age:24}).select({name:1, _id:1}).limit(3); // this will return all the documents that have age as 24 and only name and age and limit the number of documents to 3
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
<!-- calling a function -->
getDocument();


# logical operator in MongoDB
1) $and
2) $not
3) $nor
4   ) $or
const filterDate = async () =>{
     try{
       const result = await model.find({$nor : [{age:24},{email:'example@gmail.com'}]}).select({name:1, _id:1}); //  that is true if and only if both operands are false
         console.log(result);
    }catch(err){
        console.log(err);
    }
}

// calling a function 
filterDate()



# Sorting and Count Query Methods using Mongoos
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



# update the value in database 
# first - while updating the value it will show the previous value which is in data base not which we have just updated 
// update which will show an data which we have updated in the database
const updateDocument = async (_id) =>{
    try{
        const result = await model.findByIdAndUpdate({_id},{$set:{name:'Prabin Balak'}}); 
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
updateDocument("621b435b902287f059092088");


# next method 
// updates the documents useing mongo

// const updateDocument = async (_id) =>{
//     try{
//         const result = await model.updateOne({_id},{$set:{name:'Prabin Balak'}}); 
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }
// updateDocument("621b435b902287f059092088");



# getting a currently updated value in result 
// getting an updated value in result 
const updateDocument = async (_id) =>{
    try{
        const result = await model.findByIdAndUpdate({_id},{$set:{name:'Prabin Balak'}},
        {new:true}); // this will return the updated value
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
updateDocument("621b435b902287f059092088");



# deleting the document form database 
const deleteDocument = async (_id) =>{
    try{
        const result = await model.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
deleteDocument("621b4b4bb844a55f32a02678");