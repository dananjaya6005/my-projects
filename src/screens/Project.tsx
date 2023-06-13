import React,{forwardRef} from "react";
import CardView from "../components/CardView";


import dream_travel from '../icon/dream_travel.png'
import Lanka_news from '../icon/Lanka_news_icon.png'
import weather_app from '../icon/werather_app_icon.png'
import book_search from '../icon/book_search app.jpg'
import black_rose from '../icon/black_rose.png'
import loading from '../icon/loading.jpg'


function Project(){
    return(
        <>
                  
        <div className="threre_card_row">
            <CardView 
            projectName="Dream Travel" 
            Tool="Android stuido" 
            link="https://github.com/dananjaya6005/dream_travel_android_app.git"
            Discription="This project involves the development of a mobile application using Android Studio that aims to enhance the travel experience for users. The app provides a range of features designed to address common challenges and problems faced by travellers. Travelers often struggle to find reliable and up-to-date information about travel-related news, local services, and attractions when visiting a new city or country."
            Image={dream_travel}
            
            />


          <CardView 
                      projectName="Lanka News App" 
                      link="https://github.com/dananjaya6005/Lanka-News-app.git"
                      Tool="React Native + Web Scraping" 
                      Discription="This app was developed using React Native and web scraping to display Sinhala news from sources such as Ada Derana, Lankadeepa, BBC, and Mawbima. The app also utilizes RapidAPI to access various APIs and enhance its functionality. With its user-friendly interface and comprehensive coverage of current events, this app is a must-have for anyone looking to stay informed about the latest news in Sri Lanka." 
                      Image={Lanka_news}
                      
             />

          <CardView 
            projectName="Weather app" 
            Tool="React native + API" 
            link="https://github.com/dananjaya6005/weather-app.git"
            Discription="This app is build with to display real-time weather information with current location based.the app automatically adjusts its design based on day and night, providing a visually pleasing experience. In addition to displaying the current weather, the app also includes a 10-day forecast feature, allowing users to plan ahead.  " 
            Image={weather_app}
            
            />

        </div>

        <div className="threre_card_row">
        <CardView 
            projectName="Black Rose vs code Theme" 
            link="https://github.com/dananjaya6005/Black-Rose-vs-code-theme.git"
            Tool="Visial studio Theme" 
            Discription="This project is a VS Code theme that features a dark pink color scheme. The theme is available for free on the VS Code Marketplace, where users can easily download and install it. With its eye-catching design and user-friendly interface, this theme is a great choice for anyone looking to add a touch of style to their coding environment." 
            Image={black_rose}
            
            />
             <CardView 
            projectName="Google Book search app" 
            link=""
            Tool="React native + Graphql" 
            Discription="This app allows users to search for books using the Google Books API, a public API that is free for anyone to use. The app utilizes StepZen GraphQL to seamlessly integrate the Google Books API and provide users with a fast and efficient book search experience. With its user-friendly interface and powerful search capabilities, this app is a must-have for book lovers everywhere.  " 
            Image={book_search}
            
            />
             <CardView 
             link=""
            projectName="Coming soon ..." 
            Tool="pending  project" 
            Discription="Stay tuned for more exciting features! " 
            Image={loading}
            
            />

        </div>
        </>

    );
}

export default forwardRef(Project);