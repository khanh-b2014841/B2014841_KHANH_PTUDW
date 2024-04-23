const theoDoiMuonSachModel = require('../models/theoDoiMuonSach.model')
const sachModel = require('../models/sach.model')

const updateCountBook = async (res, id, number) => {
    const count = await sachModel.findOne({ _id: id })

    if (!count && count.SOQUYEN <= 0) {
        return res.status(400).json({
            message: "Lấy số lượng sách thất bại!",
        })
    }

    const SOQUYEN = count.SOQUYEN + number

    //cap nhat so luong sach
    const sach = await sachModel.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                SOQUYEN
            }
        },
        { new: true }
    )

    if (!sach) {
        return res.status(400).json({
            message: "Cập nhật số lượng sách thất bại!"
        })
    }
}

const checkStatus = (data) => !isNaN(parseInt(data)) && [-1, 0, 1, 2].indexOf(data) !== -1

function checkDateValid(start, end) {
    const d1 = new Date(start);
    const d2 = new Date(end);

    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 15 && diffDays >= 3) {
        return true;
    } else {
        return false;
    }
}

const theoDoiMuonSachControllers = {
    create: async (req, res) => {
        const { MADOCGIA, MASACH, NGAYMUON, NGAYTRA } = req.body

        if (!MADOCGIA || !MASACH || !NGAYMUON || !NGAYTRA) {
            return res.status(400).json({
                message: 'Tất cả các trường là bắt buộc!'
            })
        }

        if (new Date() > new Date(NGAYMUON)) {
            return res.status(400).json({
                message: "Ngày mượn phải lớn hơn ngày hiện tại!"
            })
        }

        if (!checkDateValid(NGAYMUON, NGAYTRA)) {
            return res.status(400).json({
                message: "Ngày mượn và trả phải cách nhau ít nhất 3 ngày và nhiều nhất 15 ngày!"
            })
        }

        try {
            const check = await theoDoiMuonSachModel.findOne({
                MADOCGIA,
                MASACH,
                NGAYMUON
            })

            if (check) {
                return res.status(400).json({
                    message: "Thêm mới thẻ mượn thất bại!"
                })
            }

            const theoDoiMuonSach = await theoDoiMuonSachModel.create({
                MADOCGIA,
                MASACH,
                NGAYMUON,
                NGAYTRA
            })

            await updateCountBook(res, MASACH, -1)
            if (res.headersSent) {
                return;
            }

            if (theoDoiMuonSach) {
                return res.status(200).json({
                    message: "Thêm mới thẻ mượn thành công!"
                })
            } else {
                return res.status(404).json({
                    message: "Thêm mới thẻ mượn thất bại!"
                })
            }
        } catch (e) {
            return res.status(500).json({
                message: "Lỗi server!",
                error: e.message
            })
        }
    },
    update: async (req, res) => {
        const { MADOCGIA, MASACH, NGAYMUON } = req.query
        const { TRANGTHAI } = req.body

        if (!MADOCGIA || !MASACH || !NGAYMUON || !checkStatus(+TRANGTHAI)) {
            return res.status(400).json({
                message: 'Tất cả các trường là bắt buộc!'
            })
        }

        try {
            const theoDoiMuonSach = await theoDoiMuonSachModel.findOneAndUpdate(
                { MADOCGIA, MASACH, NGAYMUON },
                {
                    $set: {
                        TRANGTHAI
                    }
                },
                { new: true }
            )

            if (TRANGTHAI === 2 || TRANGTHAI === -1) {
                await updateCountBook(res, MASACH, +1)

                if (res.headersSent) {
                    return;
                }
            }

            if (theoDoiMuonSach) {
                return res.status(200).json({
                    message: "Cập nhật phiếu mượn thành công!",
                    data: theoDoiMuonSach
                })
            } else {
                return res.status(404).json({
                    message: "Cập nhật phiếu mượn thất bại!"
                })
            }
        } catch (e) {
            return res.status(500).json({
                message: "Lỗi server!",
                error: e.message
            })
        }
    },
    getAll: async (req, res) => {
        const { page, status, MADOCGIA } = req.query
        const LENGTH = 6
        let star = 0
        if (!isNaN(parseInt(page))) {
            star = (LENGTH * page) - LENGTH
        }

        try {
            let search = {}
            if (checkStatus(+status)) {
                search = { TRANGTHAI: +status }
            }

            if (MADOCGIA) {
                search = { ...search, MADOCGIA }
            }

            const tatCaPhieuMuon = await theoDoiMuonSachModel.find(search)
                .skip(star)
                .limit(LENGTH)
                .populate([
                    { path: 'MASACH' },
                    { path: 'MADOCGIA', select: '-MATKHAU' }
                ]);

            if (tatCaPhieuMuon) {
                return res.status(200).json({
                    data: tatCaPhieuMuon,
                    message: "Lấy tất cả phiếu mượn thành công!"
                })
            } else {
                return res.status(404).json({
                    message: "Phiếu mượn không tồn tại!"
                })
            }
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi server!",
                error: err.message
            })
        }
    },
    getOne: async (req, res) => {
        const { MADOCGIA, MASACH, NGAYMUON } = req.query

        if (!MASACH || !MADOCGIA || !NGAYMUON) {
            return res.status(400).json({
                message: "Tất cả các trường là bắt buộc!"
            });
        }

        try {
            const theoDoiMuonSach = await theoDoiMuonSachModel
                .findOne({ MASACH, MADOCGIA, NGAYMUON })
                .populate([
                    { path: 'MASACH' },
                    { path: 'MADOCGIA', select: '-MATKHAU' }
                ])

            if (theoDoiMuonSach) {
                return res.status(200).json({
                    message: 'Lấy thông tin phiếu mượn thành công!',
                    data: theoDoiMuonSach
                })
            } else {
                return res.status(404).json({
                    message: "Phiếu mượn không tồn tại!"
                })
            }
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi server!",
                error: err.message
            })
        }
    },
    getCount: async (req, res) => {
        try {
            const soLuong = await theoDoiMuonSachModel.countDocuments()

            if (!isNaN(parseInt(soLuong))) {
                return res.status(200).json({
                    data: soLuong,
                    message: 'Đếm số lượng thành công!'
                })
            } else {
                return res.status(404).json({
                    message: "Không thể đếm số lượng!"
                })
            }
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi server!",
                error: err.message,
            })
        }
    }
}

module.exports = { theoDoiMuonSachControllers }