const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique : true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required : true
  },
  industry: String,
  size: Number,
  location: String,
  description: String,
  website: String,
  logoURL: String,
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

companySchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
  
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
   
    next();
  
  })

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
