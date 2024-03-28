#####
This is Expressjs Typescript Base Code Project, used for new projects as basement

# Node Version
18.13  stable (currently) or Higer 

# npm install

# Packages
Install all new Packages to dependency with -S / --save

# Features Added
1. Base code packages & commands
2. Eslint with Prettier & Sonarjs
3. Unit Test case of Mocha with Code coverage & Report coverage
4. Swagger docs of Apis
5. Logs of all error & Apis
6. Folder architecture
7. Version wise Apis & services
8. MongoDb (project dependent)

# Script commands
1. npm run dev -> To run service in development mode
2. npm run build -> To generate build
3. npm run removebuild -> To delete build
4. npm run start -> To generate build & run service in build mode
5. npm run test -> To run test cases
6. npm run reportCoverage -> To run test cases with report coverage
7. npm run codeCoverage -> To run test case with code coverage
8. npm run coverage -> To run test case with report & code coverage
9. npm run unitTestsAndBuild -> To remove previous build and run test 
   cases &  generate build & run service
10. npm run lint -> To find eslint errors
11. npm run lint:fix -> To auto fix possible eslint errors

# Main urls
1. /  -> Welcome url of service
2. /api/v1 -> Welcome url of v1 apis
4. /api/swagger -> Swagger docs of all versions Apis
5. /api/reportCoverage -> Test case report coverage url
6. /api/codeCoverage -> Test case code coverage report url


# To Generate Swagger files
1. https://p2o.defcon007.com/
   # Test Apis and add examples of each Api in Postman and export the collection
   # by using above url convert Apis export json to yaml file
   # and generate swagger files for each api & update manually minor changes


# check above swagger url to see task APIs