# PalDash
![PalDash Logo](https://image.ibb.co/h6KMde/IMG_0928.png)

### Description
PalDash is a web application that employs ``React.js``, ``Redux``, and ``Firebase`` in order to provide a means for people who would like
to have their MealPal's delivered to them. Currently, after 10:30AM, if you cancel your meal, MealPal still charges you for it. 
Rather than lose that meal, this app allows user to submit information in order to save their meals.  

### Environment
This application was developed using `create-react-app 1.5.2`.

### Select Directory Descriptions
The repository contains the following components:

   **Directory**   |   **Description**
   -------------- | ---------------------
   components | Contains React.js components relating to UI, Navigation, Requests, Logos and the Footer
   containers | Includes functional components that handle checkout, authorization and building requests
   hoc | Contains higher order components such as Aux, error handlers and layout
   store | Includes actions and reducers necessary for mapping state to props and props to dispatch
   assets | Contains logos and images used throughout the application

### Usage and Installation
* Clone the repository and cd into it:
```
* $ git clone git@github.com:AfaMadza/PalDash && cd PalDash
```
* Next, create a file called ``config.js`` in /src
* Copy and paste the following code and replace YOUR_KEY with your Firebase API KEY:
```
let config = {
    API_KEY : 'YOUR_KEY',
}

export default config;
```
* Start the application
```
$ npm start
```

###### Example 
```
npm start
Starting the development server...
Compiled successfully!

You can now view paldash in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.56.1:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

```
![Screen Shot](https://image.ibb.co/noJa4K/Capture.jpg)

---

### Authors

This project was created by:

Afa Madza: https://github.com/AfaMadza