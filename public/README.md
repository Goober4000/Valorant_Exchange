# Valorant Web Application
https://valorant-exchange-a8qy-git-main-tommy-brennans-projects.vercel.app/

## Project Description
The Valorant Web Application aims to address the lack of community interaction among the player base and limited access to in-game items. Our client, Riot Games, are the developers of Valorant, and are currently focused on the community engagement. We propose a platform where players can interact with each other and trade items to promote excitement for gamers, streamers, and creators. To ensure the launch is successful, collaboration with cybersecurity tools, regulatory marketing, and legal terms will be applied to maintain an efficient, appealing, and sage enviornment.

This trading platform will increase player involvement by providing a dynamic way to acquire in-game items and offer an alternative to the current purchase-only model, allowing players to trade items instead of buying new ones. Using the Valorant API, we will set appropriate value ranges for items based on their popularity and rarity. The front-end of our application will be built with JavaScript and HTML/CSS for a user-friendly interface.

## iOS Browser Description

The platform will be optimized for iOS browsers, ensuring seamless access and functionality for users on iPhones, iPads. Recognizing that many users prefer Google Crhome, iOS open accessibility recognizes this issue and offers an unique advantage of cross-compatibility in which other services do NOT promote. One of the goals to achieve is inclusivity, aiming to accommodate a broad user base and deliver a consistent, enjoyable trading expereience for all Valorant players. Focusing on this targeted browser will make our trading platform a central location for player engagement and item exchange.

## Link to Developer Manual
https://github.com/Goober4000/Valorant_Exchange

# Developer Manual

## Installing Application and Dependencies
TO install application follow these steps:
1-Clone repository: https://github.com/Goober4000/Valorant_Exchange (make sure to have Node.js installed and change file locaation if needed)
2- installing dependencies !important:
    1. Node Package Manage: npm install
    2. Express: npm install express
    3.Supbase DB: npm install @supabase/supabase-js
    4.Body-parser: npm install body-parser

## Running Application on Server
Once the application and dependencies are installed, running the application is straightforward. Access any of the HTML files in the repository to start the application. Each HTML file links to one another, allowing multiple entry points for the user. The application is hosted on Vercel, ensuring that it is easily accessible and scalable. Simply navigate to the appropiate URL provided by Vercel to access the application. This setup provides a seamless way to deploy and test the application, ensuring that it is readily available for users.

## Test Description
To effectively test the application, severeal tools and techniques were implemented to unravel pottential issues. Inspecting console logs for all JavaScript functions ensure that data is collected correctly and function are executed as expected. Utilizing the network tab in developer tools help verify that APIs are as well, implemented correctly. Additionally, functionality verify that all User Interface elements, including form submissions, button clicks, and page navigations work properly. Ultimately, performance monitoring ensures that current and additional features in the application perform gracefulling, and provides meaningful feedback if any crashes were to occur.


## Endpoints to database
### Endpoint 1 Get
/: 

serves the home page html file from the public directory

### Endpoint 2 Get
/customers:

Handles GET requests to the /customers endpoint. It fetches all records from the Customer table in the Supabase database and sends them as a JSON response. 
If there's an error, it sends the error message.

### Endpoint 3 Post
/customer:

Handles POST requests to the /customer endpoint. It extracts firstName and lastName from the request body, inserts a new record into the Customer table, 
and returns the inserted data as a JSON response. 
If there's an error, it sends a 500 status with an error message.

### Endpoint 4 Get
/postings:

Handles GET requests to the /postings endpoint. It fetches all records from the posting table in the Supabase database and sends them as a JSON response. 
If there's an error, it sends the error message.

### API Valorant requests 

### Valorant Skins endpoint Get
'https://valorant-api.com/v1/weapons/skins':
Makes an HTTP GET request to the Valorant API endpoint that provides weapon skins data. 

### Valorant buddies endpoint Get
'https://valorant-api.com/v1/buddies':

Makes an HTTP GET request to the Valorant API endpoint that provides data about "buddies".


## Bug Details
The Valorant Exchange platform has a few known bugs that users should be aware of. One issues involves the weapon skins carousel, which may not load all images correctly on the main page due to a delay of fetching, however, refreashing the page resolves this. Additionally, some cosole messages intended to appear during specific actions, such as form submissions, may not show up even though the code is running correctly. These log messsages are designed to confirm actions but might not appear as expected. 

## Future Development
Looking ahead, we plan to improve the responsiveness of the platform by implementing prematurely accessed data in memory to reduce the load times of servers. Using some sort of algorithm such as, Gzip or Brotli, to reduce the siza of data transfered needed to operate the application. For advanced trading features, we aim to implement automated trading suggestions that provide detail trade history and analytics of trade to inform users. Addressing the known bugs and following future development, consistently producing an engaging users friendly platform will enhance the Valorant experience.


