const fetch=require('node-fetch');
const express=require('express');
const request=require('request')
const route=express.Router();


route
.get('/followers',(req,res)=>{

    baseUrl='https://github.com/';
    const appId="0ca906d3b9b0e4dba9a1"
    const appSecret="5552f5d5ad11e38bb8ab410a2d6deacf2bfc8dc0";
    username=req.body.username;
    var options = {
        url: `https://api.github.com/users/${username}?client_id=${appId}&client_secret=${appSecret}`,
        headers: {
          'User-Agent': 'request'
        }
      };
    request(options,(err,result,body)=>{

        if(err){
            res.statusCode=500;
            res.header('Content-Type:application/json');
            res.json({err:err});
        }
        const mydata=JSON.parse(body);
        console.log(mydata);

        res.statusCode=200;
        res.json({followers:mydata.followers});

    });
})
.get('/following',(req,res)=>{

    baseUrl='https://github.com/';
    const appId="0ca906d3b9b0e4dba9a1"
    const appSecret="5552f5d5ad11e38bb8ab410a2d6deacf2bfc8dc0";
    username=req.body.username;
    var options = {
        url: `https://api.github.com/users/${username}?client_id=${appId}&client_secret=${appSecret}`,
        headers: {
          'User-Agent': 'request'
        }
      };
    request(options,(err,result,body)=>{

        if(err){
            res.statusCode=500;
            res.header('Content-Type:application/json');
            res.json({err:err});
        }
        const mydata=JSON.parse(body);
        console.log(mydata);

        res.statusCode=200;
        res.json({following:mydata.following});

    });
});


module.exports =route;