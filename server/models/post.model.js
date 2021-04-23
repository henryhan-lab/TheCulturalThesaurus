import mongoose from 'mongoose'
const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Text is required'
  },
  syn: {
    type: String,
    required: 'Synonyms are required'
  },
  definition: {
    type: String,
    required: 'Definition is required'
  },
  partOfSpeech: {
    type: String,
    required: 'Part of Speech is required'
  },
  category:{
    type:String,
    required: 'Category is required'
  },
  photoLink: {
    type:String,
    required: 'Giphy Link is required'
  },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Post', PostSchema)
