const express = require("express");
const { default: mongoose, connect } = require("mongoose");
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json()); // Parse JSON body

// MONGO DATABASE
// const MONGODB_URL = "mongodb+srv://judedev:<db_password>@cluster0.i8vbsdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const MONGODB_URL = "mongodb+srv://judedev:ghghghgd@cluster0.i8vbsdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// COnnecting to MongoDB

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connected...");

    // Server Listening
    app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`);
    })
})


app.get("/", (req, res)=>{
    res.json({message: "Welcome to Careerex Server"})
}) 

// Status Codes
/**
 * 100, 101 ------ Informational Status code 
 * 
 * 200 ------ If it is successful
 * 
 * 201 ----- If it is successful and something was created or added into a database, you use 201. All the status codes that falls within 200 is used when something is successful
 * 
 * 300, 301 ----- Either a page, files or resuorces has moved somewhere. Is for redirect, something has been moved somewhere. It is a redirect and moved resources
 * 
 * 400: --- Bad request from the user. When a user make a bad request you return him back with status code of 400.
 * 
 * 401: ----- The user did not signin of did not authuenicated
 * 
 * 404: --- What they are looking does not exist

* 500: ----- Any issue coming from your server (Backend). i.e. server error

** After you add a status code it is very important you add a message 

*** As a backend developer there are two important things you must do.
1. CRUD => Create, Read, Update and Delete something from the database.

2. Authentication: Register a user, Login a user, Forgot password, Reset password and Send them an Email. 

******************
DATABASE
Two types of Database:
1. Relational database: Are those databases that save its data in a table. e.g. MySQL, Postgres. They works with tables and every tables has rows and columns. One user data will be in one row and another is second row etc.

2. Non Relational Database: E.g. Mango 
Mango Database is a non relational database because it doesn't save data in a table rather it saves in a document. e.g. a notebook, you open the first page and write the information the user, you open the second page and write the details of the second user. No two users must be written in the same page. You use a doucument for every user. And all these users you put the documents together and it becomes a collection.

********
Is there any Database to use?

** If you are working on an application that you knows everything about it, you should go MySQL or PostGress But if it is a database that the software application can grow at any time go for MongoDB (or PostgreSQL. Mango Database can easily grow with any project.

*MongoDB SETUP ATLAS

A cluster is combination of more than one databases
* STEP 1. NETWORK ACCESS
* Click on the Network Access because we needed an IP Address
* 102.89.23.173/32 (includes your current IP address) That is my current IP address from my sysem but I want an IP that will allow access to anybody. 
* Click on Add IP Address
* Click allow access from anywhere
* You will see 0.0.0.0/0. It allow any body to connect to our database

* SETP 2. DATABASE Access
* Add New Database User
* Password Authentication: Make sure remember your password
* Built-in Role => Read and write to any database

* STEP 3: Clusters
* Click on Connect
* Connect to your application
* Select the first option -> Drivers
* Access your Atlas data using MongoDB’s native drivers (e.g. Node.js, Go, etc.)
* Copy: mongodb+srv://judedev:<db_password>@cluster0.i8vbsdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

* const MONGODB_URL = "mongodb+srv://judedev:<db_password>@cluster0.i8vbsdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

* Change <db_password> to your database password you created

* NB: npm install mongodb
Stopped: 45
**/

