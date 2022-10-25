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

