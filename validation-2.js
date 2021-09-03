db.runCommand( {collMod:"<name of collection>", 
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties:{
          title:{
              bsonType:"string",
              description:"must be a string and is required"
          },
          text:{
              bsonType:"string",
              description:"must be a string and is required"
          },
          creator:{
              bsonType:"objectId",
              description:"must be a objectId and is required"
          },
          comments:{
              bsonType:"array",
              description:"must be an array and is required",
              items:{
                  bsonType:"object" ,//not allowed to be a string it must be a document
                  required:["text","author"],
                  properties:{
                      text:{
                          bsonType:"string",
                          description:"must be an string and is required"

                      }
                      ,
                      author:{
                          bsonType:"objectId",
                          description:"must be an objectId and is required"
                      }
                  }
              }
          }
      }
    },
  },
  validationAction:"warn" //default is "error" blocks the execution
});
