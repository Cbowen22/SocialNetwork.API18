const {Schema, model} = require('mongoose');
const validator = require('validator');
const db_users = new Schema({
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
      ],
    },
    {
  
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  userSchema
  .virtual('friendCount')
  .get(function(){
    return this.friends.length;
  });
  const User = model('user', userSchema);
  module.exports = User;