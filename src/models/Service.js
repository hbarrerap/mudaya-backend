import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        origin: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        commentaryUser: {
            type: String,
        },
        commentaryDriver: {
            type: String,
        },
        state: {
            type: String,
        },
        price: {
            type: Number,
        },
        idUser: {
            type: Number,
            required: true,
            ref: "User",
        },
        idDriver: {
            type: Number,
            ref: "Driver",
        },
        idVehicle: {
            type: String,
            ref: "Vehicle",
        },
    },
    {
        versionKey: false,
    }
);

export default model("Service", serviceSchema);
