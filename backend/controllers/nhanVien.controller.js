const nhanVienModel = require("../models/nhanVien.model");
const bcrypt = require("bcrypt");

const staffControllers = {
  create: async (req, res) => {
    const { HoTenNV, Password, ChucVu, DiaChi, SoDienThoai } = req.body;

    if (!HoTenNV || !Password || !ChucVu || !DiaChi || !SoDienThoai) {
      return res.status(400).json({
        message: "Bắt buộc đầy đủ các trường!",
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(Password, 10);

      const nhanVien = await nhanVienModel.create({
        HoTenNV,
        ChucVu,
        Password: hashedPassword,
        DiaChi,
        SoDienThoai,
      });

      if (nhanVien) {
        return res.status(200).json({
          message: "Đăng ký thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Đăng ký thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  login: async (req, res) => {
    const { Password, SoDienThoai } = req.body;

    if (!Password || !SoDienThoai) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      const nhanVien = await nhanVienModel.findOne({ SoDienThoai });

      if (nhanVien && (await bcrypt.compare(Password, nhanVien.Password))) {
        return res.status(200).json({
          message: "Đăng nhập thành công!",
          data: {
            MSNV: nhanVien.MSNV,
          },
        });
      } else {
        return res.status(404).json({
          message: "Số điện thoại hoặc mật khẩu không không khớp!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.query;
    const { HoTenNV, ChucVu, DiaChi } = req.body;
    console.log(id);

    if (!HoTenNV || !ChucVu || !DiaChi || !id) {
      return res.status(400).json({
        message: "Bắt buộc đầy đủ các trường!",
      });
    }

    try {
      const nhanVien = await nhanVienModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            HoTenNV,
            ChucVu,
            DiaChi,
          },
          $unset: {
            Password: 1,
          },
        },
        { new: true }
      );

      if (nhanVien) {
        return res.status(200).json({
          data: nhanVien,
          message: "Cập nhật thông tin nhân viên thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Cập nhật thất bại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const nhanVien = await nhanVienModel.find({}, "-Password");

      if (nhanVien) {
        return res.status(200).json({
          message: "Lấy tất cả nhân viên thành công!",
          data: nhanVien,
        });
      } else {
        return res.status(404).json({
          message: "Lấy tất cả nhân viên bản thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: e.message,
      });
    }
  },
  getInfo: async (req, res) => {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        message: "Không tồn tại mã số nhân viên!",
      });
    }

    try {
      const nhanVien = await nhanVienModel.findOne(
        { _id: id },
        { Password: 0 }
      );

      if (nhanVien) {
        return res.status(200).json({
          data: nhanVien,
          message: "Lấy thông tin nhân viên thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Lấy thông tin nhân viên thất bại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
};

module.exports = { staffControllers };
