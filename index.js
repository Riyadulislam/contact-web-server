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





// const serviceSID="VA0782653a0b20bda48c72a7b897e41efa"
// const accountSid="ACd723bbc93ecee790332624edee549977"
// const authToken= "6af2ddc92a5bff2e03d4885e293db033"
// const clients = require('twilio')(accountSid, authToken)


// function generateOTP() {
//     return Math.floor(100000 + Math.random() * 900000);
//   }

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1pxon9n.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        const contactOptionCollection=client.db('contactManager').collection('contact')
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
        app.post('/contactAdd',async(req,res)=>{
            const contact=req.body;
           
            const result=await contactOptionCollection.insertOne(contact)
            res.send(result)

        });
        
        app.post('/mobile',async(req,res)=>{
            const {phone}=req.body;
            console.log('p',phone) 
            // const OTP = generateOTP();
            // clients.messages.create({
            //     body: `Your OTP is: ${OTP}`,
            //     from: '+17193987273',
            //     to: {to:"+88"+ phone, channel: 'sms'}
            //   })
            //   .then((message) => console.log(message.sid));
         
            // clients.verify.v2.services(serviceSID)
            // .verifications
            // .create({to:"+1"+ phone, channel: 'sms'})
            //  .then(verification =>{
            //     console.log('kopppppp',verification.status)
            //     res.status(200).send({ verification})
            //     .catch((error)=>{
            //         console.log(error)
            //      res.status(400).send({ error});
            //     })
            //  });
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