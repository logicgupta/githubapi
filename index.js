const fetch=require('node-fetch');
const express=require('express');
const app=express();
const repo=require('./git_repo');
const follow=require('./git_follow');
const bio=require('./git_bio');

app.use(express.json());
app.set('view engine',"jade");
app.use('/repo',repo);
app.use('/',follow);
app.use('/bio',bio);


app.listen(3000,console.log('server working on port 3000'));