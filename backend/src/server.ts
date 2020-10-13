import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', async (req, res)=>{
  return res.json({ status: 'online' });
});

app.listen(3333);
