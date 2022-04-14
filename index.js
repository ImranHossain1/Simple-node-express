const express = require('express');
const cors= require('cors')
const app = express()

app.use(cors());
app.use(express.json());

const port =  5000;

app.get('/', (req, res)=>{
    res.send('Wow, I am so Excited with nodemon');    
});

const users =[
    {id: 0, name: "Mahi", email:"Mahi@gmail.com", phone: '01894864698'},
    {id: 1, name: "Sabana", email:"Shabana@gmail.com", phone: '01894864698'},
    {id: 2, name: "Shabnoor", email:"Shabnoor@gmail.com", phone: '01894864698'},
    {id: 3, name: "Shuchorita", email:"Shuchorita@gmail.com", phone: '01894864698'},
    {id: 4, name: "Sonia", email:"Sonia@gmail.com", phone: '01894864698'},
    {id: 5, name: "Susmita", email:"Susmita@gmail.com", phone: '01894864698'},
]

app.get('/users', (req, res)=>{
    const search =req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    res.send(users); 
})
//app method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    res.json(newUser);
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id; 
    const user = users[id];
    res.send(user);
})
app.get('/fruits', (req,res)=>{
    res.send(['Mangoes', 'Oranges', 'Banana', 'Apple']);
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send("Yammi Yammi Tok marka Fazli")
})
app.listen(port, ()=>{
    console.log('Listening to Port', port);
})
