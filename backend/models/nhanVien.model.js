const mongoose = require("mongoose");

const NhanVienSchema = mongoose.Schema({
  HoTenNV: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  ChucVu: {
    type: String,
    required: true,
  },
  DiaChi: {
    type: String,
    required: true,
  },
  SoDienThoai: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("NhanVien", NhanVienSchema);
