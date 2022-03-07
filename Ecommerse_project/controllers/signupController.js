import userModel from '../models/user.js';

const saltRounds = 10;

class signupController {
    signupUser(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let contcatNumber = req.body.contactNumber;
        let address = req.body.address;
        let avatarUrl = req.body.avatarUrl;
        let gender = req.body.textGender;

        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        // database Name 
        const dbName = 'eCommerceProject';
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('users');

        _hash(password, saltRounds, async function (err, hash) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            try {
                await collection.insertOne({
                    username: username,
                    password: hash,
                    firstName: firstName,
                    lastName: lastName,
                    contactNumber: contactNumber,
                    address: address,
                    avatarUrl: avatarUrl,
                    gender:  gender
                });
                res.send(200, "Successfully Created User");
            } catch (err) {
                res.send(500, `Cant signup user &{err}`);
            }
        });
    }

    signupCustomer(req, res) {
        let username = req.body.txtUsername;
        let password = req.body.txtPassword;
        let firstName = req.body.txtFirstName;
        let lastName = req.body.txtLastName;
        let contactNumber = req.body.txtContactNumber;
        let avatarUrl = req.body.txtAvatarUrl;
        let gender = req.body.txtGender;

        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        // database name 
        const dbName = 'eCommerceProject';
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection("Customer");

        _hash(password, saltRounds, async function (err, hash) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            try {
                await collection.insertOne({
                    username: username,
                    password: hash,
                    firstName: firstName,
                    lastName: lastName,
                    contactNumber: contactNumber,
                    address: address,
                    avatarUrl: avatarUrl,
                    gender: gender
                });
                res.send(200, "Successfully Created User ");
            } catch (err) {
                res.send(500, `cannor signup user ${err}`);
            }
        }
        )
    };
}

export default signupController;