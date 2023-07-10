import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: ["true", "Email already exists"],
            required: ["true", "Email is required"],
        },
        name: {
            type: String,
            required: ["true", "Name is required"],
        },
        password: {
            type: String,
        },
        user_name: {
            type: String,
            required: ["true", "Username is required"],
            match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (_, ret) {
        delete ret.password;
    },
});

export default models.User || model("User", userSchema);
