import mongoose from "mongoose";
const { model } = mongoose;


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true, 
        lowercase: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
     
});

    const User = model("User", userSchema);
export default User;
