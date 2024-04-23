const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const theoDoiMuonSachSchema = mongoose.Schema(
    {
        MADOCGIA: {
            type: Schema.Types.ObjectId,
            required: true,
            primaryKey: true,
            ref: 'DOCGIA'
        },
        MASACH: {
            type: Schema.Types.ObjectId,
            required: true,
            primaryKey: true,
            ref: 'SACH'
        },
        NGAYMUON: {
            type: Date,
            required: true,
            primaryKey: true
        },
        NGAYTRA: {
            type: Date,
            required: true,
        },
        TRANGTHAI: {
            type: Number,
            enum: [-1, 0, 1, 2],
            default: 0
        }
    }
);

// Định nghĩa validator cho NGAYMUON và NGAYTRA
theoDoiMuonSachSchema.path("NGAYMUON").validate(function (value) {
    return value < this.NGAYTRA;
}, "Ngày mượn phải nhỏ hơn ngày trả!");

module.exports = mongoose.model("THEODOIMUONSACH", theoDoiMuonSachSchema);
