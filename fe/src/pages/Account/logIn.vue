<script>
import { ref } from "vue";
import router from "~/router";

import { readersStore } from "~/store/readerStore";

export default {
  setup() {
    const readerStore = readersStore();
    const DIENTHOAI = ref("");
    const MATKHAU = ref("");

    const functionLogin = async () => {
      await readerStore.login(MATKHAU.value, DIENTHOAI.value);
      if (readerStore.reader?._id) {
        router.push("/");
      } else {
        alert("Đăng nhập thất bại!");
      }
    };
    return {
      DIENTHOAI,
      MATKHAU,
      functionLogin,
    };
  },
};
</script>
<template>
  <container class="Container BackgroudContainer">
    <div class="boderForm">
      <h1>Đăng Nhập</h1>
      <form @submit.prevent="functionLogin">
        <div class="mb-3">
          <div class="inputBox">
            <label for="" class="form-label">Số Điện Thoại:</label>
            <i class="bx bxs-phone"></i>
            <input type="text" id="" v-model="DIENTHOAI" />
          </div>
        </div>

        <div class="mb-3">
          <div class="inputBox">
            <label for="" class="form-label">Mật Khẩu:</label>
            <i class="bx bxs-pencil"></i>

            <input type="password" id="" v-model="MATKHAU" />
          </div>
        </div>

        <button type="submit" class="btn btn-info textButton">Đăng Nhập</button>
      </form>

      <div class="formRoute">
        <div class="textRoute">
          BẠN CHƯA CÓ TÀI KHOẢN ?
          <router-link to="/logUp">
            <button>Đăng ký ngay</button>
          </router-link>
        </div>
      </div>
    </div>
  </container>
</template>

<style lang="css" scoped>
@import url("~/assets/css/account.css");
</style>
