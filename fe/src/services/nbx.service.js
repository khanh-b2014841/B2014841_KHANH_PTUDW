import axiosClient from "../utils/client";

const getURL = (url = "") => `/nhaXuatBan/${url}`;

export const nhaXuatBanService = {
  create: async (data) => await axiosClient.post(getURL("create"), data),
  getAll: async () => await axiosClient.get(getURL("all")),
  edit: async (MANXB, data) =>
    await axiosClient.put(getURL(`update?id=${MANXB}`), data),
  getOne: async (MANXB) => await axiosClient.get(getURL(`info?id=${MANXB}`)),
};
