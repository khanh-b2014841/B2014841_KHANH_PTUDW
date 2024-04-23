const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sachSchema = mongoose.Schema(
    {
        TENSACH: {
            type: String,
            required: true,
        },
        DONGIA: {
            type: Number,
            required: true,
        },
        SOQUYEN: {
            type: Number,
            required: true
        },
        NAMXUATBAN: {
            type: Number,
            required: true,
        },
        MANXB: {
            type: Schema.Types.ObjectId,
            ref: 'NHAXUATBAN',
            required: true,
        },
        IMAGE: {
            type: String,
            required: true,
        },
        TACGIA: {
            type: String,
            required: true,
        }
    }
);
module.exports = mongoose.model("SACH", sachSchema);
