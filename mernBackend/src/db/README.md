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