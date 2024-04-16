import mongoose from "mongoose";
// const { model, Schema } = mongoose; same as below



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

    const User = mongoose.model("User", userSchema);
export default User;
