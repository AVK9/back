import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

contactSchema.post('save', handleMongooseError);

const Contact = model('contact', contactSchema);

export default Contact;
