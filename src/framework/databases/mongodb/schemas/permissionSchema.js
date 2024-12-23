import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export const Permission = mongoose.model("Permission", permissionSchema);
