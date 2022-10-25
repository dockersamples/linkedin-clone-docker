import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import postModel from './models/postModel.js'; 
import userModel from './models/userModel.js'
// import starterData from './starterData.js'
// app config 
import cors from 'cors';
const app=express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const connection = process.env.MONGO_CONNECT_URL
// const connection = "mongodb://localhost:27017/linkedIn";
mongoose.connect(connection, {
 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
 
}).then(() => {
    console.log('successfully connected to the database');

}).catch(err => {
    console.log('error connecting to the database');
    console.log(err)
    process.exit();
});


app.get('/v1/linkedin/posts', (req,res) => {  
   
    postModel.find({},(err,data) => {
        if (!err) {
            console.log('hit /v1/linkedin/posts')
            console.log(data)
            res.status(201).send(data)
            

        } else {
            console.log(err)
            res.status(500).send(err)
        }

        
    } )
})









app.post('/v1/linkedIn/addPost', (req,res) => {
    const newPost = req.body

    console.log(newPost) 

    postModel.create(newPost, (err, data) => {
        if (!err) {          
            console.log('Post successful')
            console.log(newPost) 
            res.status(201).send(data)

        } else {
            console.log('Post unsuccessful')
            console.log(err)
        }
    })
})





app.post('/login', (req,res) => {
    

    const requestData = req.body
    
    // searches for user if found return user data object, if not found then add user to database
    userModel.findOne(requestData, (err, data) => {
        if (!err) {             

            if (data !== null ) {
                console.log('Found user!!!!!!')
                console.log(data)
                res.status(201).send(data)
            }
            
            
            else if (data === null ) {
                console.log('data was null user does not exist in db: creating')
                
                const user = { 
                    email:  req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    userImage: req.body.userImage


                }
                console.log(user)

                const newUser = new userModel(user)
            
                newUser.save((err) => {
                    if (!err) {
                        console.log(`User ${user} has been registered`)                    
                        console.log()
                        res.status(202).send(user)

                       
                        
            
                    } else {
                        // there was an error 
                        res.status(400).send(err)
            
                    }
                })
            }          
           

    } 
})

    // res.status(200).send('Slack Clone')
})



// starterData.forEach((newPost) => {

//     postModel.create(newPost, (err, data) => {
//         if (!err) {          
//             console.log('Starter Data Loaded Successful')
//             console.log(newPost)             
           
//         } else {
//             console.log('Post unsuccessful')
//             console.log(err)
//         }
//     })


// })

// app.post('/login', (req,res) => {
    
//     const requestData = req.body
    
//     // searches for user if found return user data object, if not found then add user to database
//     userModel.findOne(requestData, (err, data) => {
//         if (!err) {             

//             if (data !== null ) {
//                 console.log('Found user!!!!!!')
//                 console.log(data)
//                 res.status(201).send(data)
//             }
            
            
//             else if (data === null ) {
//                 console.log('data was null user does not exist in db: creating')
                
//                 const user = { 
//                     email:  req.body.email,
//                     password: req.body.password,
//                     userImage: req.body.userImage


//                 }
//                 console.log(user)

//                 const newUser = new userModel(user)
            
//                 newUser.save((err) => {
//                     if (!err) {
//                         console.log(`User ${user} has been registered`)                    

//                         res.status(202).send(user)
                       
                        
            
//                     } else {
//                         // there was an error 
//                         res.status(400).send(err)
            
//                     }
//                 })
//             }          
           

//         } 
//     })
//     // res.status(200).send('Slack Clone')
// })


app.listen(port, () => console.log(`Listening on port : ${port}`))
// docker run -p 27017:27017 -v /Users/ellarnol/localTwitterDB:/data/db  mongo:latest©