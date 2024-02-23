# Language Learning App




Open 2 different terminals

One for frontend
Type “cd emitrr_frontend”
Type “npm install” to install all the required libraries
Type “npm start” to start the frontend

One for backend
Replace the url in env with your won mongo db url
Type “cd emitrr_backend”
Type “npm install” to install all the required libraries
Type “nodemon index.js” to start the backend
Here are some screenshots and features of the app.


Frontend: 
# Welcome screen (Landing page)
![1](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/65869ade-bcdc-4bc7-a3a5-058742286f64)















# Registration screen 

![2](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/01d675ff-d969-4de0-8e01-fdaad62a0226)







# Login Screen

![3](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/cfeeaebf-7f6c-42fb-9e80-f35b7608549a)




# Checking for credentials






# Welcome screen (for user)
![5](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/1a5d8bca-3fcd-48b8-84df-fb83c8d7b4d5)






# Quiz screen
![6](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/2c11614b-dfe7-41e6-988e-717c2b0e8c01)


# Scoring for each question
![7](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/4a9b3171-55a6-4fbe-bef2-14128f5bd061)



# Profile page
![8](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/5ffbd5f5-1993-4bf9-9172-8346fb4a93d5)







# Leaderboard

![9](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/a4a84b37-3f6c-4f88-88c7-52c16546eb94)
![10](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/e772c398-70f1-4706-8e94-6d55ad04e1e2)
![11](https://github.com/PushkarWaykole/LanguageLearningApp/assets/80080666/4da66df0-20df-48dc-8f82-d2f376e5f975)

















# Backend

User Schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    languages: {
        type: [String],
        default: ["English", "Spanish", "French"],
    },
    selected_language:{
        type:String,
        require:false,
        default:"English",
    },
    score:{
        type:Number,
        default:0,
    }
})


# POST request

Register(/register) = to create a new user of the following email and hashed password

Login(/login)= match the password and send a token generated from bcypt

# GET request

/questions = retrieve all the questions available in the database
/:email/language = get the selected language of the user
/:email/getUserData=get entire user data from email
/getAllUser = get all users to show the leaderboard



# PUT request

/:email/:language/updateLanguage = update the selected language of the user

/:email/:score/updateScore = update the score of the user







