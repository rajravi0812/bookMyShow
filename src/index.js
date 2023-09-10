const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())




app.post('/api/booking', async (req,res)=>{
    if(!req.body.movie){
        res.status(400).send("please enter movie name");
    }  else if(!req.body.slot){
        res.status(400).send("please slect time slot")
    } else {
        const newuser = await new connection({
            movie:req.body.movie,
            slot : req.body.slot,
            seats: req.body.seats
        })
        newuser.save();
        res.send(newuser);
    }
})

app.get('/api/booking', async (req, res) => {
    try {
      const lastElement = await connection.find()
        .sort({ _id: -1})
        .limit(1)
        .exec();
  
      return res.status(200).json(lastElement);
    } catch (error) {
      console.error('Error fetching last element:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  


app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   