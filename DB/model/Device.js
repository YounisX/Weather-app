import mongoose, { Schema, Types, model } from "mongoose";


const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  serialNumber:{
    type:String,
    required:true,
    unique:true
  },
  latitude: {
    type: Number,
    required: true,
    default:26.8206
  },
  longitude: {
    type: Number,
    required:true,
    default:30.8025
  },
  slug:{
    type:String
  }
}, { timestamps:true });

deviceSchema.index({ location : '2dsphere' }); // Create spatial index

// Other methods...


const deviceModel = mongoose.models.Device || model('Device', deviceSchema)
export default deviceModel;