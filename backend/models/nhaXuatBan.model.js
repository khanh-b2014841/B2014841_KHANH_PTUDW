const mongoose = require("mongoose");

const nhaXuatBanSchema = mongoose.Schema(
    {
        TENNXB: {
            type: String,
            required: true,
            unique: true
        },
        DIACHI: {
            type: String,
            required: true,
        }
    }
);
module.exports = mongoose.model("NHAXUATBAN", nhaXuatBanSchema);
