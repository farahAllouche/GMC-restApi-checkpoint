const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name :{
        type : String, 
        required: true, 
        unique : true
    },
    email : {
        type : String, 
        required: true, 
        unique : true
    },
    age : Number,
    role : {
        type : String,
        enum : ['USER', 'ADMIN'],
        default : 'USER'
    }
})

userSchema.set("toJSON", {
    virtuals : true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
    },
    
})

const User = mongoose.model("user", userSchema)

module.exports=User