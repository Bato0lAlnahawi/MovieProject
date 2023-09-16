# Movie Website Project

It is a simple Movie System Project created by "Infinite-Loop Team" ,it is a web-based platform designed to provide users with an enjoyable movie-watching experience. It offers a collection of movies from various genres, allowing users to browse, search, and watch their favorite films and make them write their reviews about the movies. The system also includes user registration and authentication to protect the user info.

## The Contents :

- [Team Members](#team-members)
- [Technologies Used](#technologies-used)


## Team Members
**Aya** Project Manager
-manage GitHub + Trello ,wrote the code ,do aome test ,and followed up with team indivdually .

**Doha** Scrum Master
-used to hold daily meetings and follow up the team's work , and explain the tasks for the team members .

**Anas** Backend Engineer
-wrote the code ,such as :programming the endpoints , and do the swagger file .

**Batool** Backend Engineer
-wrote the code ,such as :programming the endpoints .

**Shaima'a** QA + Responsible for Documetation
-test the code & write the README.md file , and describe inside it about the project .

**Shahed** QA + Responsible for Documetation
-test the code & write the README.md file , and describe inside it about the project .


## Technologies Used 
**Backend :** 
- Node.js :is an open-source, server-side JavaScript runtime environment. It allows you to build scalable, networked applications by executing JavaScript code outside of a web browser and with Node.js, we have created our web server, handle requests, and much more.

- Express.js :is a popular and fast web application framework for Node.js, you can create robust and scalable web applications using JavaScript on the server-side. It simplifies the process of building web applications and APIs by providing a set of powerful features and middleware. Express allows you to handle HTTP requests and methods like [GET, POST, DELETE,...], define routes, manage sessions, handle middleware functions, features such as authentication, logging, input validation, and error handling.

Express also supports various template engines, giving you the flexibility to generate dynamic HTML pages and render them on the server before sending the response to the client.

**Database :**
- MongoDB :it is a database used to store the data inside it .

**Hashing Process**
- bcrypt package : is a widely used cryptographic algorithm in the Node.js ecosystem. It specializes in securely hashing passwords. It achieves this by intentionally slowing down the hashing process, making it computationally intensive. This property thwarts attackers attempting to crack passwords through some methods like brute-force or dictionary attacks.

With bcrypt, developers can efficiently hash user passwords prior to storing them in a database. This provides an additional layer of security for user authentication.

**User Authentication :**
- JSON Web Tokens (JWT) :It is a widely used open standard for securely transmitting information between parties in the form of a JSON object. JWTs are often used for authentication and authorization purposes in web applications. It offers several advantages, such as being stateless (as all necessary information is contained within the token), enabling cross-domain authentication, and being easily verifiable without the need for database lookups.

A JWT consists of three parts: 
- The header :contains information about the token, such as the algorithm used for signing it. 
- The payload :holds the claims or statements about the user or application, such as their identity or role.
- The signature :is generated using a secret key,it can be used to verify the integrity of the token and ensure  it has not been tampered with.

**Testing**
- Postman :is a popular API development and testing tool. It provides a user-friendly interface for sending HTTP requests to a web service and receiving responses.

- Swagger documentation :is a framework for designing, building, and documenting APIs. It provides a standardized way to describe the functionality of an API, including details about endpoints, request/response formats, authentication methods, and more. Swagger-generated documentation is typically interactive, allowing developers to test API endpoints directly from the documentation. 


## Notes
Make sure to install all the peograms we need , like[Visual Studio Code,NodeJS ,Postman ,MongoDB , Git Bash ,...] ,
and install the packages we need inside the project [they are in the package-json file] .
