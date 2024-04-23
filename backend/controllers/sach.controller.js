const sachModel = require("../models/sach.model");

const bookControllers = {
  create: async (req, res) => {
    const { TENSACH, DONGIA, SOQUYEN, NAMXUATBAN, MANXB, TACGIA, IMAGE } =
      req.body;

    if (
      !TENSACH ||
      !DONGIA ||
      !SOQUYEN ||
      !NAMXUATBAN ||
      !MANXB ||
      !TACGIA ||
      !IMAGE
    ) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    if (
      isNaN(parseInt(DONGIA)) ||
      isNaN(parseInt(SOQUYEN)) ||
      isNaN(parseInt(NAMXUATBAN))
    ) {
      return res.status(400).json({
        message: "Một số trường phải là số!",
      });
    }

    try {
      const sach = await sachModel.create({
        TENSACH,
        DONGIA,
        SOQUYEN,
        NAMXUATBAN,
        MANXB,
        TACGIA,
        IMAGE,
      });

      if (sach) {
        return res.status(200).json({
          message: "Thêm mới sách thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Thêm mới sách thất bại!",
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
    const { TENSACH, DONGIA, SOQUYEN, NAMXUATBAN, MANXB, TACGIA, IMAGE } =
      req.body;

    if (
      !TENSACH ||
      !DONGIA ||
      !SOQUYEN ||
      !NAMXUATBAN ||
      !MANXB ||
      !TACGIA ||
      !IMAGE ||
      !id
    ) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    // kiem tra gia tri so
    if (
      isNaN(parseInt(DONGIA)) ||
      isNaN(parseInt(SOQUYEN)) ||
      isNaN(parseInt(NAMXUATBAN))
    ) {
      return res.status(400).json({
        message: "Một số trường phải là số!",
      });
    }

    try {
      // cap nhat thong tin sach
      const sach = await sachModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            TENSACH,
            DONGIA,
            SOQUYEN,
            NAMXUATBAN,
            MANXB,
            TACGIA,
            IMAGE,
          },
        },
        { new: true }
      );

      if (sach) {
        return res.status(200).json({
          message: "Cập nhật sách thành công!",
          data: sach,
        });
      } else {
        return res.status(404).json({
          message: "Cập nhật sách thất bại!",
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
    const { page, limit, MANXB, key, type } = req.query;
    const LENGTH = limit ? parseInt(limit) : 8;
    let start = 0;
    if (!isNaN(parseInt(page)) && parseInt(page) > 0) {
      start = LENGTH * page - LENGTH;
    }

    try {
      let search = {};

      if (MANXB) {
        search = { MANXB };
      }
      if (key && type) {
        const searchValue = { $regex: key, $options: "i" };

        if (type === "name") {
          search = { TENSACH: searchValue };
        } else {
          search = { TACGIA: searchValue };
        }
      }

      const tatCaSach = await sachModel
        .find(search)
        .skip(start)
        .limit(LENGTH)
        .populate("MANXB");

      if (tatCaSach) {
        return res.status(200).json({
          data: tatCaSach,
          message: "Lấy tất cả sách thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Sách không tồn tại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Không tồn tại mã sách!",
      });
    }

    try {
      const sach = await sachModel.findOne({ _id: id }).populate("MANXB");

      if (sach) {
        return res.status(200).json({
          message: "Lấy thông tin sách thành công!",
          data: sach,
        });
      } else {
        return res.status(404).json({
          message: "Sách không tồn tại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  getCount: async (req, res) => {
    try {
      const soLuong = await sachModel.countDocuments();

      if (!isNaN(parseInt(soLuong))) {
        return res.status(200).json({
          data: soLuong,
          message: "Đếm số lượng thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Không thể đếm số lượng!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  getRandom: async (req, res) => {
    try {
      const tatCaSach = await sachModel.aggregate([
        { $sample: { size: 8 } },
        {
          $lookup: {
            from: "NHAXUATBAN",
            localField: "MANXB",
            foreignField: "MANXB",
            as: "MANXB",
          },
        },
      ]);

      if (tatCaSach) {
        return res.status(200).json({
          data: tatCaSach,
          message: "Lấy tất cả sách thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Sách không tồn tại!",
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

module.exports = { bookControllers };
