// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://snfbackend:7SkTLYORShY2XQ1B@cluster0.bsuehxw.mongodb.net/snf_backend?retryWrites=true&w=majority")
    .then(() => {
        console.log("connet to database successfully")
    })
    .catch((err) => {
        console.log(err)
    })
app.use(express.json());
// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Use routes from route.js
//login 
const LoginRouter = require("./route/login_route")

app.use('/login', LoginRouter)
//contact page
const contactRouter = require("./route/contact-data_route");
app.use("/contact", contactRouter);

//home page carrosal
const carouselRouter = require("./route/Home_carousel_route")
app.use('/carrosal', carouselRouter);

//home page 2 cards
const home2cardsRouter = require("./route/Home_2_Cards_route")
app.use('/home2cards', home2cardsRouter);

//home page 4 cards
const home4cardsRouter = require("./route/Home_4_Cards_route")
app.use('/home4cards', home4cardsRouter);

const Home_Media = require("./route/Home_Media")
app.use('/homemedia', Home_Media);

//home SUPPORTERS Image
const SUPPORTERS_Router = require("./route/Home_SUPPORTERS_route")
app.use('/supporter', SUPPORTERS_Router);

//What we are  page -->  Important_SNF_Project
const Important_SNF_Project_para_Router = require("./route/Important_SNF_Project_para_route")
app.use('/Important_SNF_Project_para', Important_SNF_Project_para_Router);


//what we are--->  Team SNF  Fouder Participate
const SNF_Team_FouderParticipate_Router = require("./route/Team_SNF_FounderParticipant_route")
app.use('/founderparticipates', SNF_Team_FouderParticipate_Router);

//what we are--->  Team SNF Mentors
const Team_SNF_Mentors_Router = require("./route/Team_SNF_Mentors_route")
app.use('/mentors', Team_SNF_Mentors_Router);

//what we are--->  Team SNF  NRI_Participants
const Team_SNF_NRI_Participants_Router = require("./route/Team_SNF_NRI_Participants_route")
app.use('/NRI_Participants', Team_SNF_NRI_Participants_Router);

//what we are--->  Team SNF State_Participants
const Team_SNF_State_Participants_Router = require("./route/Team_SNF_State_Participants_route")
app.use('/State_Participants', Team_SNF_State_Participants_Router);






// What we do -->  OnGoingProject_Clean_Water_Project
const OnGoingProject_Clean_Water_Project_Router = require("./route/OnGoingProject_Clean_Water_Project_route")
app.use('/OnGoingProject_Clean_Water_Project', OnGoingProject_Clean_Water_Project_Router);

// What we do -->  OnGoingProject_Shahid_Jawan_Fund
const OnGoingProject_Shahid_Jawan_Fund_Router = require("./route/OnGoingProject_Shahid_Jawan_Fund_route")
app.use('/OnGoingProject_Shahid_Jawan_Fund', OnGoingProject_Shahid_Jawan_Fund_Router);

// What we do -->  OnGoingProject_Educational_Facilities
const OnGoingProject_Educational_Facilities_Router = require("./route/OnGoingProject_Educational_Facilities_route")
app.use('/OnGoingProject_Educational_Facilities', OnGoingProject_Educational_Facilities_Router);

// What we do -->  OnGoingProject_Health_MedicalProjects
const OnGoingProject_Health_MedicalProjects_Router = require("./route/OnGoingProject_Health_MedicalProjects_route")
app.use('/OnGoingProject_Health_MedicalProjects', OnGoingProject_Health_MedicalProjects_Router);


// What we do -->  OnGoingProject_Environmental_Conservation
const OnGoingProject_Environmental_Conservation_Router = require("./route/OnGoingProject_Environmental_Conservation_route")
app.use('/OnGoingProject_Environmental_Conservation', OnGoingProject_Environmental_Conservation_Router);

// What we do -->  OnGoingProject_Sport_Projects
const OnGoingProject_Sport_Projects_Router = require("./route/OnGoingProject_Sport_Projects_route")
app.use('/OnGoingProject_Sport_Projects', OnGoingProject_Sport_Projects_Router);

//What we do -->  OnGoingProject_Birthday_Celebrations
const OnGoingProject_Birthday_Celebrations_Router = require("./route/OnGoingProject_Birthday_Celebrations_route")
app.use('/OnGoingProject_Birthday_Celebrations', OnGoingProject_Birthday_Celebrations_Router);


//Media/Awards -->  article_on_snf
const article_on_snf_Router = require("./route/article_on_snf_route")
app.use('/article_on_snf', article_on_snf_Router);

//Media/Awards -->  snf_in_news_papers
const snf_in_news_papers_Router = require("./route/snf_in_news_papers_route")
app.use('/snf_in_news_papers', snf_in_news_papers_Router);

//Media/Awards -->  awards_recognation
const awards_recognation_Router = require("./route/awards_recognation_route")
app.use('/awards_recognation', awards_recognation_Router);



app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});
