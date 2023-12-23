# Documento [Client Side]

## What is Documento?

Documento is a Fullstack application built using React JS and Python. 
This repository contains the the UI, i.e, the Client Side of the application. Documento allows the user to make a summary out of their document or get answer to questions regarding their document. Documento uses two NLP models to process the Document.
    

## Tips:
 Make sure you have the backend running before you start the application. This application can be executed using the command `npm start`

### Repositories :

1. Frontend - [document-processor-client](https://github.com/oindrila-b/document-processor-client)
2. Backend - [document-processor](https://github.com/oindrila-b/document_processor)

### Key Functionalities of the UI
 The CLient side has the following Key Functionalities :
 1. Getting Summary For The Sample Document.
 2. Asking Questions About The Sample Document.
 3. Uploading Their Own Document.
 4. Getting Summary For Their Uploaded Document.
 5. Asking Questions About Their Uploaded Document.


### API Endpoints

The Client Side application runs on the address :
    `http://localhost:3000`

It uses the following API Endpoints :
1. `http://localhost:5000/getSummary` as the endpoint to get the summary for the sample data or the uploaded document. The endpoint is a `GET` call and has the parameter `context`, which represents the context regarding which the summary is to be made using the backend server. 

2. `http://localhost:5000/askQuestion` as the endpoint to get the answer to the question for the sample data or the uploaded document. The endpoint is a `GET` call and has the following parameters `context`, and `question`, which represents the context and question regarding the context which needs to be answered by the backend server.

### Key Challenges Faced 
 The key challenges faced while building the front-end application was , 

  1. Parsing the csv file to get the text for the backend server to process. 
  2. Initially I wanted to allow uploading pdfs and parsing them, but it was not possible because of the contraints like knowing how the pdf was made, what the pdf contents are [images/links]. Since this was quite challenging I decided to let only the acceptance of doc/docx/text files.


### Improvements for the Frontend

There are the following improvements I would have made :

1. Addigng more animation to the frontend.
2. Adding animated indicators for loading data.
3. Adding an improved user experience regarding pages, navigation and interactions.
4. Overall a better design and implementation would be much better.