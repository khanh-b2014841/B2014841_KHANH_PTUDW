const nhaXuatBanModel = require("../models/nhaXuatBan.model");

const nbxControllers = {
  create: async (req, res) => {
    const { TENNXB, DIACHI } = req.body;

    if (!TENNXB || !DIACHI) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      const nhaXuatBan = await nhaXuatBanModel.create({
        TENNXB,
        DIACHI,
      });

      if (nhaXuatBan) {
        return res.status(200).json({
          message: "Thêm mới nhà xuất bản thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Thêm mới nhà xuất bản thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: e.message,
      });
    }
  },
  edit: async (req, res) => {
    const { id } = req.query;
    const { TENNXB, DIACHI } = req.body;

    if (!TENNXB || !DIACHI || !id) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      const nhaXuatBan = await nhaXuatBanModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            TENNXB,
            DIACHI,
          },
        },
        { new: true }
      );

      if (nhaXuatBan) {
        return res.status(200).json({
          message: "Cập nhật nhà xuất bản thành công!",
          data: nhaXuatBan,
        });
      } else {
        return res.status(404).json({
          message: "Cập nhật nhà xuất bản thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: e.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const nhaXuatBan = await nhaXuatBanModel.find();

      if (nhaXuatBan) {
        const results = [];
        for (const nxb of nhaXuatBan) {
          const count = await nhaXuatBanModel.countDocuments({ _id: nxb._id });
          results.push({
            _id: nxb._id,
            TENNXB: nxb.TENNXB,
            DIACHI: nxb.DIACHI,
            count,
          });
        }

        return res.status(200).json({
          message: "Lấy tất cả nhà xuất bản thành công!",
          data: results,
        });
      } else {
        return res.status(404).json({
          message: "Lấy tất cả nhà xuất bản thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: e.message,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.query;

    // kiem tra ma nha xuat ban
    if (!id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Không tồn tại mã nhà xuất bản!",
      });
    }

    try {
      // lay tat thong tin nha xuat ban
      const nhaXuatBan = await nhaXuatBanModel.findOne({ _id: id });

      if (nhaXuatBan) {
        return res.status(200).json({
          message: "Lấy thông tin nhà xuất bản thành công!",
          data: nhaXuatBan,
        });
      } else {
        return res.status(404).json({
          message: "Lấy thông tin nhà xuất bản thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: e.message,
      });
    }
  },
};

module.exports = { nbxControllers };
