import express from 'express'
import cors from 'cors'
let app = express();

app.use(express.json());
app.use(cors());
let users = [
  {id : 1,name : 'ali',email : 'ali@gmail.com',},
  {id : 2,name : 'khan',email : 'khan@gmail.com',},
]
app.get("/api/data",(req,res) => {
  res.json(users)
})
app.post('/api/data', (req, res) => {
  const body = req.body;

  const newUser = {
      id: users.length + 1,
      ...body
  }

  users.push(newUser)
  res.status(201).json({ message: 'New user created!', data: newUser })
})
app.listen(3000,() => {
  console.log('http://localhost:3000')
})