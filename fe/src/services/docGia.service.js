import axiosClient from "../utils/client";

const getURL = (url = "") => `/docGia/${url}`;

export const docGiaService = {
  register: async (data) => await axiosClient.post(getURL("register"), data),
  login: async (data) => await axiosClient.post(getURL("login"), data),

  getInfo: async (MADOCGIA) =>
    await axiosClient.get(getURL(`info?id=${MADOCGIA}`)),
  getAll: async () => await axiosClient.get(getURL("all")),
  update: async (MADOCGIA, data) =>
    await axiosClient.put(getURL(`update?id=${MADOCGIA}`), data),
};
