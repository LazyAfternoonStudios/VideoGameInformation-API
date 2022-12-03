# VideoGameInformationAPI

## Technologies
### REST API
The API is built with express.js.
### Database
The database we are using to store the video game information is Azure Cosmos DB for MongoDB which is a NoSQL database. <br>
We are using NoSQL in anticipation that we will be adding much more endpoints and data in the future.

Azure Cosmos DB for MongoDB works with Mongoose which is a MongoDB ORM npm package that is highly intuative to develop with. The only difference between Mondo DB and Azure Cosmos DB for MongoDB is the connection URI. 

## Environment Variables
After installing the packages you will need to create a .env file with the following variables:
```txt
COSMOS_ENDPOINT = "<PRIMARY CONNECTION STRING>"
```