import express from 'express'

let app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
  res.json({message : 'Home'})
})

app.listen(3000,() => {
  console.log('http://localhost:3000')
})