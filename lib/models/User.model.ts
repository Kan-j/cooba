import mongoose, { Document, Schema, Model } from 'mongoose';



const UserSchema: Schema = new Schema({
  clerkId: { type: String, required: true},
  city: { type: String, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  profileImg: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isStudent: { type: Boolean, required: true },
  university: { type: String },
  onboarded: { type: Boolean, default: false},
});

// Pre-save middleware to set university to null if the user is not a student
UserSchema.pre('save', function (next) {
  if (!this.isStudent) {
    this.university = null;
  }
  next();
});

const User = mongoose.models?.User || mongoose.model('User', UserSchema);

export default User;
