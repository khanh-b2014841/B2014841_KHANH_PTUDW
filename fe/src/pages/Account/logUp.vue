<script>
import { ref, onMounted } from "vue";
import router from "~/router";

import { docGiaService } from "~/services/docGia.service";

export default {
  setup() {
    const HOLOT = ref("");
    const TEN = ref("");
    const DIACHI = ref("");
    const DIENTHOAI = ref("");
    const MATKHAU = ref("");
    const REMATKHAU = ref("");

    const jawRegister = async () => {
      if (MATKHAU.value === REMATKHAU.value) {
        try {
          const receive = await docGiaService.register({
            TEN: TEN.value,
            HOLOT: HOLOT.value,
            DIACHI: DIACHI.value,
            DIENTHOAI: DIENTHOAI.value,
            MATKHAU: MATKHAU.value,
          });

          alert(receive.message);
          router.push("/login");
        } catch (e) {
          alert("Đăng ký thất bại");
        }
      }
    };
    return {
      HOLOT,
      TEN,
      DIACHI,
      DIENTHOAI,
      MATKHAU,
      REMATKHAU,
      jawRegister,
    };
  },
};
</script>
<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <container class="Container BackgroudContainer">
    <div class="boderForm">
      <h1>Đăng Ký</h1>
      <form @submit.prevent="jawRegister">
        <div class="mb-3">
          <div class="inputBox">
            <label for="" class="form-label">Số Điện Thoại:</label>
            <i class="bx bxs-phone"></i>
            <input type="text" id="" v-model="DIENTHOAI" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <div class="inputBox">
                <label for="" class="form-label">Tên:</label>
                <i class="bx bxs-pencil"></i>
                <input type="text" id="" v-model="TEN" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <div class="inputBox">
                <label for="" class="form-label">Họ Đệm:</label>
                <i class="bx bxs-pencil"></i>
                <input type="text" id="" v-model="HOLOT" />
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 textForm">
          <div class="inputBox">
            <label for="" class="form-label">Địa chỉ:</label>
            <i class="bx bx-cog"></i>
            <input type="text" id="" v-model="DIACHI" />
          </div>
        </div>
        <div class="mb-3">
          <div class="inputBox">
            <label for="" class="form-label">Mật Khẩu:</label>
            <i class="bx bxs-pencil"></i>

            <input type="password" id="" v-model="MATKHAU" />
          </div>
        </div>
        <div class="mb-3">
          <div class="inputBox">
            <label for="" class="form-label">Nhập lại mật khẩu:</label>
            <i class="bx bxs-pencil"></i>
            <input type="password" id="" v-model="REMATKHAU" />
          </div>
        </div>

        <button type="submit" class="btn btn-info textButton">Đăng Ký</button>
      </form>

      <div class="formRoute">
        <div class="textRoute">
          BẠN ĐÃ CÓ TÀI KHOẢN ?

          <router-link to="/login">
            <button>Đăng nhập ngay</button>
          </router-link>
        </div>
      </div>
    </div>
  </container>
</template>

<style lang="css" scoped>
@import url("~/assets/css/account.css");
</style>
