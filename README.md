# VideoGameInformationAPI

## Technologies
### REST API
The API is built with express.js, written in TypeScript, and deployed to an Azure Functions App.
### Database
The database we are using to store the video game information is Azure Cosmos DB for MongoDB which is a NoSQL database. <br>
We are using NoSQL in anticipation that we will be adding much more endpoints and data in the future.

Azure Cosmos DB for MongoDB works with Mongoose which is a MongoDB ORM npm package that is highly intuative to develop with. The only difference between Mondo DB and Azure Cosmos DB for MongoDB is the connection URI. 

### Infrastructure
This API is deployed to an Azure Functions App and every endpoint is it's own function. The Functions App acts as a backend for the Azure API Manager which controlls the API keys, versioning, etc.

## Subscriptions
To keep costs minimal, both the Functions App and APIM are on consumption tiers. This does not auto generate a developer portal. <br>
This requires me to either make my own or manually create subscription keys. For now, this API is only for Lazy Afternoon and partners.

## Future Developments
* Create a developer portal to allow users to sign up for API keys. 
* Continue to seed the database with video game information.
* Clean up some extra docker files used during development. (I am debating on continuing to deploy directly from VSCode or use docker images.)
* Setup CI/CD for future updates.
