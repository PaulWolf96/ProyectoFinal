const mongoose = require('mongoose');
const { default: Contacto } = require('../pages/contacto/contacto');
const DB_URI = 'mongodb://localhost/MiniMarket'

// Conexión
mongoose.connect(DB_URI,
{useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if(err){
        console.log('*** ERROR DE CONEXIÓN ***'), 
    }
    else{
        console.log('*** CONEXIÓN CORRECTA ***'),
    }
});

// Esquemas
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
            require:true,
        },
        email:{
            type:String
            require:true,
        },
    }
    { 
        timestamps:true
    }
)

const PostSchema = new mongoose.Schema(
    {
        author:{
            type:mongoose.Types.ObjectId
        }
        title:{
            type:String
        }
        picture:{
            type:Image
        }
        description:{
            type:String
        }
        Price:{
            type:Number
        }
    }
    {
        timestamps:true
    }
)

// Modelo
const User = New mongoose.model('User', UserSchema)
const Post = New mongoose.model('Post', PostSchema)

UserSchema.create(
    {
        name:'Coco',
        email:'coco@example.com',
    }
)