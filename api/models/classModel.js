import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
      unique: true,
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },
    count: {
      type: "Number",
      required: true,
    },
    year: {
      type: "Number",
      required: true,
    },
    subjects: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Subject",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", classSchema);
export default Class;
