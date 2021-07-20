const express = require('express');
const app = express();

// Return mock JSON data //
const mockUserData=[
        {name:'Mark'},
        {name:'Jill'}
]

app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

// Server Conection //
app.listen(8000,function(){console.log("server is running")})
