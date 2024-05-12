import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
      unique: true,
    },
    rollNo: {
      type: "Number",
      required: true,
      unique: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    subjects: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Subject",
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
