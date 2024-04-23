<script>
import { readersStore } from "~/store/readerStore";
import { ref, onMounted, computed } from "vue";

export default {
  setup() {
    const MADG = ref("");
    const readerStore = readersStore();

    onMounted(async () => {
      const MADOCGIA = readerStore?.reader?._id;
      if (MADOCGIA) {
        MADG.value = MADOCGIA;
      }
    });
    const idx = computed(() => MADG.value);
    const validMADG = computed(() => MADG.value && MADG.value.length > 0);

    return {
      idx,
      MADG,
      validMADG,
    };
  },
};
</script>
<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <header class="header">
    <img class="imageLogo" src="../assets/images/logo.jpg" alt="" />

    <nav class="navbar">
      <form class="form-inline my-2 my-lg-0">
        <div class="searchForm">
          <input
            class="form-control mr-sm-2 searchInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="bx bx-search-alt-2 iconSearch"></i>
        </div>
      </form>
      <router-link to="/">
        <button class="buttonHeader">Trang chủ</button>
      </router-link>
      <router-link to="/about">
        <button class="buttonHeader">Giới thiệu</button>
      </router-link>
      <router-link to="/books">
        <button class="buttonHeader">Sách</button>
      </router-link>

      <button type="button" class="loginButton" v-if="!validMADG">
        Đăng nhập
      </button>

      <!-- thay doi sau khi dang nhap -->
      <i class="bx bxs-user-circle icon-DG" v-if="validMADG"></i>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="footer">
    <div class="footer-container">
      <img class="imageLogo" src="../assets/images/logo.jpg" alt="" />

      <div class="footer-left">
        <h3>Thông tin liên hệ</h3>
        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        <p>Điện thoại: 0123456789</p>
        <p>Email: khanh123@example.com</p>
      </div>
      <div class="footer-right">
        <h3>Liên kết nhanh</h3>
        <ul>
          <li><button class="footer-route">Trang chủ</button></li>
          <li><button class="footer-route">Sản phẩm</button></li>
          <li><button class="footer-route">Dịch vụ</button></li>
          <li><button class="footer-route">Giới thiệu</button></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Bản quyền &copy; 2024. Nguyễn Tấn Khanh - B2014841</p>
    </div>
  </footer>
</template>

<style lang="css" scoped>
@import url("~/assets/css/indexHome.css");
</style>
