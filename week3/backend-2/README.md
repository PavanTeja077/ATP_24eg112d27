1. generate package.json
2. create express erver
3. install mongoose and connect to mongodb server

rest api ----mongodb native driver ->db server
rest api ----mongoose odm tool ->db server, odm-> object document mapping
4. build USER REST API
            -create user
            -read all users
            -read auser by id
            -update a user by id
            -delete a user by id
5. create  schema and model of the resource(user)    
6. crate user api and define the routes

### user authentication(login)

-submit credentials and get token
-req------>public routes(by anyone)
-req---->middleware------>protected routes(by authenticated users only)
attacks:
-xss
-csrf 
to access cookies  property of the request object we need cookie parser middleware. otherwise req.cookie is undefined


---cross horizon  vs  same horizon ----
cross horizon -- when th eclient and server applications are running in different domains
same horizon -- the client also running on the same domain of the server
cookies -- will send along with request automatically in same horizon request,
but for cross horizon req , the token should be explicitly included to the request














