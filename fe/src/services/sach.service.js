import axiosClient from "../utils/client";

const getURL = (url = "") => `/sach/${url}`;

export const sachService = {
  create: async (data) => await axiosClient.post(getURL("create"), data),
  getAll: async (
    page = null,
    limit = null,
    MaNXB = null,
    MaLoai = null,
    key = null,
    type = null
  ) => {
    let url = getURL("all");

    if (page) {
      url += `?page=${page}`;
    }

    if (limit) {
      url += `&limit=${limit}`;
    }
    if (MaNXB) {
      url += `&MaNXB=${MaNXB}`;
    }
    if (MaLoai) {
      url += `&MaLoai=${MaLoai}`;
    }
    if (key && type) {
      url += `&key=${key}&type=${type}`;
    }

    return await axiosClient.get(url);
  },
  edit: async (MASACH, data) =>
    await axiosClient.put(getURL(`update?id=${MASACH}`), data),
  getOne: async (MASACH) => await axiosClient.get(getURL(`info?id=${MASACH}`)),
  getCount: async () => await axiosClient.get(getURL("count")),

  getRandom: async (MASACH) =>
    await axiosClient.get(getURL(`random?id=${MASACH}`)),
};
