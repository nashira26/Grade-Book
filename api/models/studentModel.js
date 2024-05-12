import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
      unique: true,
    },
    fullname: {
      type: "String",
      required: true,
      unique: true,
    },
    indexNo: {
      type: "Number",
      required: true,
      unique: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
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

const Student = mongoose.model("Student", studentSchema);
export default Student;
