import axiosClient from "../utils/client";

const getURL = (url = "") => `/nhanVien/${url}`;

export const nhanVienService = {
  login: async (data) => await axiosClient.post(getURL("login"), data),
  register: async (data) => await axiosClient.post(getURL("register"), data),
  info: async (MSNV) => await axiosClient.get(getURL(`info?id=${MSNV}`)),
  getAll: async () => await axiosClient.get(getURL("all")),
  update: async (MSNV, data) =>
    await axiosClient.put(getURL(`update?id=${MSNV}`), data),
};
