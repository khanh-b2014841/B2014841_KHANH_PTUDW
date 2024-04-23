const mongoose = require("mongoose");

const docGiaSchema = mongoose.Schema(
    {
        HOLOT: {
            type: String,
            required: true,
        },
        TEN: {
            type: String,
            required: true,
        },
        NGAYSINH: {
            type: Date
        },
        PHAI: {
            type: Number,
            enum: [0, 1, 2],
            default: 0,
        },
        DIACHI: {
            type: String,
            required: true,
        },
        DIENTHOAI: {
            type: String,
            required: true,
            unique: true
        },
        MATKHAU: {
            type: String,
            required: true,
        },
    }
);
module.exports = mongoose.model("DOCGIA", docGiaSchema);
