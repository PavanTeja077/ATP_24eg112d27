1.generate package.json
2.CREATE express server
install mongoose and connec to mongodb server
REST API---MongoDb native driver-->DB Server
REST API---Mongoose ODM tool --->DB server

4.Build USER API
-create User
-Read all user
-Read a user by id
-update a user by ID
-Delete a user by id

5.Create schema and model of the resource(User)
6.craete user API and Define routes

//note:use findone method to read a document with non object id fields,
use findByid to read with object id

//User created ==="user created" -->false
200--success
201 -- created
400 --bad request
401 --unauthorised
404 --not found
500--server side error

### user Authentication(login)
-Submit credentials and get tokens

   req--->-public routes-the routes which can be accessied by anyone
   req---middleware--->protected routes-the routes can be accessied by authentic users only

xss-
csrf/
..to access cookies properties of the requested object we need cookies parser middleware otherwise request.cookies is undefined

//11/03/2026
cross origin:when the client and server applications are running in different domains;
>same origin request means the client also running on the same domain of the server
>cookies will aslo send along with requests automatically in same origin request.but for the cross origin request,the token should be explietly include to the token..