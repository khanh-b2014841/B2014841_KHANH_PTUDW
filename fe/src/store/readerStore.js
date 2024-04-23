import { defineStore } from "pinia";
import { docGiaService } from "~/services/docGia.service";

export const readersStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    reader: null,
  }),
  actions: {
    async login(MATKHAU, DIENTHOAI) {
      try {
        const { data, message } = await docGiaService.login({
          MATKHAU,
          DIENTHOAI,
        });

        if (data) {
          this.reader = data;
          this.isLoggedIn = true;
          alert(message);
        } else {
          console.error("Đăng nhập thất bại");
        }
      } catch (error) {
        console.error("Đăng nhập thất bại: ", error);
      }
    },
    async setInfo(MADOCGIA) {
      try {
        const { data } = await docGiaService.getInfo(MADOCGIA);

        if (data) {
          this.reader = data;
        } else {
          console.error("Không lấy được thông tin");
        }
      } catch (error) {
        console.error("Không lấy được thông tin: ", error);
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.reader = null;
    },
  },
});
