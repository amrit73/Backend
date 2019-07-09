# Your Project Title Here
Name: Amrit Shrestha

CollegeID: 160329

Batch: Jan19D

Domain:
Animal Care System can be embedded with any veterinary clinic website according to their requirement. With the help of this system, the customers of respective veterinary clinic can easily make an appointment online. These clinics can take a donation and can provide extra support to their customers.  Hence, animal care system will be a great medium for veterinary and they can raise their business profit.





Packages Used
        "bcrypt": "^3.0.6",
        "body-parser": "^1.15.0",
        "cors": "^2.8.5",
        "express": "^4.13.4",
        "express-handlebars": "^3.1.0",
        "jest": "^24.8.0",
        "jsonwebtoken": "^5.7.0",
        "mongoose": "^4.4.5",
        "morgan": "^1.7.0"
        
Bcrypt: Bcrypt is a password hashing function. In my system, it is used for authentication process.
Installation is done using the npm install command:
$ npm install bcrypt

Body-parser: This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
Installation is done using the npm install command:
$ npm install body-parser

CORS- CORS stands for Cross-origin resource sharing. (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
Installation is done using the npm install command:
$ npm install cors

Express: Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −
•	Allows to set up middlewares to respond to HTTP Requests.
•	Defines a routing table which is used to perform different actions based on HTTP Method and URL.
•	Allows to dynamically render HTML Pages based on passing arguments to templates
Installation is done using the npm install command:
$ npm install express

Jsonwebtoken: A JSON Web Token (JWT) is a JSON object that is defined in RFC 7519 as a safe way to represent a set of information between two parties. The token is composed of a header, a payload, and a signature. JWT is used for authentication and they can also be used for sharing information, most of jwt are signed using a public key and a private key, therefore, it is very difficult to tamper with these token. Installation is done using the npm install command:
$ npm install jsonwebtoken

Mongoose: It is a MongoDB object modeling tool designed to work in an asynchronous environment. With the help of Mongoose, we can model our data.Installation is done using the npm install command:
$ npm install mongoose

Morgan: It is used log requests to the console.Installation is done using the npm install command:
$ npm install morgan

Jest: It is a delightful JavaScript Testing Framework. It is used to do testing.Installation is done using the npm install command:
$ npm install Jest

## List of Main Features
1)	Secured database as user’s password are encrypted using bcrypt function
2)	Schemas are well structured
3)	Admin can block the user in case of any violence by user.
4)	Admin can delete the post in the case when the post contains any disturbing content. 

## API Documentation
1)
router.post('/admin/update_forum')
This routes works when the post function is called on url(‘/admin/update_form’), it search the received id from the post data as _id and finds out the forum detail by comparing post _id to table’s id and updates in the respective id. If the data is updated successfully then it sends Success message “Forum Edited Successfully!’ as a json. 



2)
router.post('/admin/delete_forum')
This router works by getting the id of post(forum) from the user and it finds the id of that post in the database, if it finds the id in the database then it deletes record of the post in the database. And in the response it sends forum deleted successfully in json.


3)
router.get('/get_comment/:id')
This router receives third parameter of url as id. Then it selects all the comments of that specific forum id. And send all selected row in data as json. If the forum id is not found in database then throw error response in json.


4) 
router.post('/edtprofile')
This router is post function. It hit in the api when /localhost:3000/api/edtprofile is called. It gets the id from the user in post data and search it in the database. And the post data may be username, name , email, phone and password. If it finds the id then it will update in that respective id. As a response it sends success message.


5)
router.post('/post_comment/');
To post comment the user should be logged in or the post data should contain _id i.e user_id if not then he can't post comment. If the user is found on database then next step is to validate that whether the username is valid or not. If all goes ok then insert the comment to database with forum_id as foreign_key which later can be selected through forum_id for a specific forum. If the comment is inserted to the database then respond back success message to user.



