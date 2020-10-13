import express from 'express';

const app = express();


app.get('/', async (req, res)=>{
  res.send({'status':'ok'})
})

app.listen(3333);