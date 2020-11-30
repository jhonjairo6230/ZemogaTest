# Zemoga Test
## Backend
This project is the solution to the Zemoga Nodejs Backend challenge, here you will find two folders `Backend` and `FrontEnd` in the Backend folder you will find a backend solution based in serverless framework and AWS Lambda, you can read more about that in:

- Serverless: https://www.serverless.com/
- AWS Lambda: https://aws.amazon.com/es/lambda/features/

Here I decided use mvc software architecture mode because it's scalable light an easy to implement, for this reason I created this project structure:

 ![alt text](https://github.com/jhonjairo6230/ZemogaTest/blob/documentation/assets/backend-structure.png)

## Running instructions:
Before running this project was published on my personal AWS accountand you can test it using the following instructions: 

### End-Points
- Add new profile: "Add new profile:"
- Update profile: "https://5vktvhtwf1.execute-api.us-east-1.amazonaws.com/dev/profile"
- List all profiles: "https://5vktvhtwf1.execute-api.us-east-1.amazonaws.com/dev/profile"
- get specific profile: "https://5vktvhtwf1.execute-api.us-east-1.amazonaws.com/dev/profile/{id}"

you can test this web services using your preferred json client here I am going to show How to test in postman tool (you can donwload free that here: https://www.postman.com/downloads/)

-Add new profile:
![alt text](https://github.com/jhonjairo6230/ZemogaTest/blob/documentation/assets/create-profile.png)

-Update profile:
![alt text](https://github.com/jhonjairo6230/ZemogaTest/blob/documentation/assets/update-profile.png)

-List all profiles:
![alt text](https://github.com/jhonjairo6230/ZemogaTest/blob/documentation/assets/get-all.png)

-get specific profile:
![alt text](https://github.com/jhonjairo6230/ZemogaTest/blob/documentation/assets/get-one.png)


## Installation Backend
 First install Serverless using npm or yarn as you prefer:
 ```sh
 $ npm install serverless -g 
```

then go to Backend directory and run 
```sh
 $ sls deploy
```

then go to api sub directory
```sh
 $ cd api
```
and then install dependencies (this steep install required node modules used in this project)
```sh
 $ npm i --exact
```
then create a zip function to install node_modules in aws
```sh
 $ zip -r function.zip .
```

and finally update whit this
```sh
 aws lambda update-function-code --function-name zemoga-service-dev-createProfile --zip-file fileb://function.zip
```

# FrontEnd
This project was created used Angular framework and angular cli if you want run this project use the next instructions
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Time to solve

- Backend: 10 hours
- FrontEnd: 6 hours
- Documentation: 3 hours

 ### Contact:
 feel free to write me to:
 Jhon Jairo Ibarra Samboni
 * email: jhonjairo6230@gmail.com
 * linkedin: https://www.linkedin.com/in/jhon-jairo-ibarra-samboni-36a45539/