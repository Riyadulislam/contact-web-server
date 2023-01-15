const express = require('express');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const cors = require('cors');
const port =process.env.PORT || 5000;
require('dotenv').config();
const contactDetails=require('./data/contact.json')
;

const app =express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1pxon9n.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        const contactOptionCollection=client.db('contactManager').collection('contact')
         const userNumberDateCollection=client.db('contactManager').collection('information')
        app.get('/contactList',async(req,res)=>{
            const query={};
            const options= await contactOptionCollection.find(query).toArray();
            res.send(options)
        })
        app.get('/contactList/:id',async(req,res)=>{
            const id=req.params.id
           
            const query={_id:ObjectId(id)}
         
            const result =await contactOptionCollection.findOne(query)
            res.send(result)
          
        })
        app.get('/dateinfo',async(req,res)=>{
            const query={};
            const dateInfo= await userNumberDateCollection.find(query).toArray();
            res.send(dateInfo)
        })
        app.post('/contactAdd',async(req,res)=>{
            const contact=req.body;
           
            const result=await contactOptionCollection.insertOne(contact)
            res.send(result)

        });
        
        app.post('/mobile',async(req,res)=>{
            const info=req.body;
         console.log(info)
         const result=await userNumberDateCollection.insertOne(info)
         res.send(result)
        })
    }
    finally{

    }

}
run().catch(console.dir);





app.get('/',async(req,res)=>{
    res.send('contact werser is running');
})

app.listen(port,()=>console.log(`contact web server is running on ${port}`))

// // Import the Twilio library
// const twilio = require('twilio');

// // Your Twilio account SID and auth token
// const accountSid = 'your_account_sid';
// const authToken = 'your_auth_token';

// // Create a new Twilio client
// const client = new twilio(accountSid, authToken);

// // Function to generate a random OTP
// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000);
// }

// // Send an SMS message with the OTP
// const OTP = generateOTP();
// client.messages.create({
//   body: Your OTP is: ${OTP},
//   from: 'your_twilio_phone_number',
//   to: 'recipient_phone_number'
// }).then((message) => console.log(message.sid));