import axiosClient from "../utils/client";

const getURL = (url = "") => `/theoDoiMuonSach/${url}`;

export const theoDoiMuonSachAPI = {
  create: async (data) => await axiosClient.post(getURL("create"), data),
  update: async (MADOCGIA, MASACH, NGAYMUON, TRANGTHAI) =>
    await axiosClient.put(
      getURL(
        `update?MaDocGia=${MADOCGIA}&MaSach=${MASACH}&NgayMuon=${NGAYMUON}`
      ),
      { TrangThai: TRANGTHAI }
    ),
  getAll: async (status = 0, page = null, MADOCGIA = null) => {
    let url = getURL(`all?status=${status}`);

    if (page) {
      url += `&page=${page}`;
    }

    if (MADOCGIA) {
      url += `&MaDocGia=${MADOCGIA}`;
    }

    return await axiosClient.get(url);
  },
  getCount: async () => await axiosClient.get(getURL("count")),
  getOne: async (MADOCGIA, MASACH, NGAYMUON) =>
    await axiosClient.get(
      getURL(`info?MaDocGia=${MADOCGIA}&MaSach=${MASACH}&NgayMuon=${NGAYMUON}`)
    ),
};
