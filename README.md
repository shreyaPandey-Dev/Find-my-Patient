# React "Find My Patient" Tool
This project is a patient search tool built with React. It consists of two pages: a list page and a detail's page. The list page allows users to search for patients based on various criteria, apply filters, and sort the results. The detail's page displays the details of a selected patient.
The user can also delete a patient profile after going to the patient profile page.

#Landing Page image
<img width="950" alt="image" src="https://github.com/shreyaPandey-Dev/Find-my-Patient/assets/27900627/8f90969d-ea9c-4232-8e37-64659dce5a42">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Libraries used: 
Reactstarp - for table
React-hook-forms - for forms and watching input 
Cypress - for Testing


# List Page
The list page of the patient search tool provides the following functionalities:

# Search Functionality
A search form that allows users to search for patients by name, ID, or email using the provided data.
Two filters: a sex filter (male and female) and an age filter ("18 - 30", "31 - 45", "> 45").
An alphabetical sorting option.
The search data persists even when switching components or routes, ensuring that the data is not lost.

# Detail's Page
The detail's page of the patient search tool provides the following functionalities:

# Go Back Functionality
A "Go Back" button that allows users to navigate back to the list page.
The search results, filters, and sorting data will persist when returning to the list page.
# Delete Functionality
A "Delete" button to trigger the delete confirmation modal.
A delete confirmation modal with "Confirm Delete" and "Cancel" buttons.

# Getting Started
To get started with the project, follow the instructions below:

# Installation
Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the dependencies.
Available Scripts
In the project directory, you can run the following scripts:

# npm start: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes, and lint errors will be displayed in the console.
# npm test: Launches the test runner in the interactive watch mode. See the section about running tests for more information.
# npm run build: Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
Deployment
To deploy the application, you can follow the standard deployment process for a React app. More information about deployment can be found in the Create React App documentation.




