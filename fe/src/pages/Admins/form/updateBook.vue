<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "~/router";

import { sachService } from "~/services/sach.service";

export default {
  setup() {
    const TENSACH = ref("");
    const DONGIA = ref("");
    const SOQUYEN = ref("");
    const NAMXUATBAN = ref("");
    const MANXB = ref("");
    const IMAGE = ref("");
    const TACGIA = ref("");

    const route = useRoute();
    const idBook = ref(route.query.id);

    const getNbx = async () => {
      try {
        const res = await nhaXuatBanService.getOne(idBook.value);
        if (res.data) {
          return res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      const data = await getNbx();
      if (data) {
        TENSACH.value = data.TENSACH;
        DONGIA.value = data.DONGIA;
        SOQUYEN.value = data.SOQUYEN;
        NAMXUATBAN.value = data.NAMXUATBAN;
        MANXB.value = data.MANXB;
        IMAGE.value = data.IMAGE;
        TENNXB.value = data.TENNXB;
        TACGIA.value = data.TACGIA;
      }
    });

    const updateBook = async () => {
      try {
        const res = await sachService.edit(idNbx.value, {
          TENSACH: TENSACH.value,
          DONGIA: DONGIA.value,
          SOQUYEN: SOQUYEN.value,
          NAMXUATBAN: NAMXUATBAN.value,
          MANXB: MANXB.value,
          IMAGE: IMAGE.value,
          TENNXB: TENNXB.value,
          TACGIA: TACGIA.value,
        });
        if (res.data) {
          alert("Cập nhật thành công");

          router.push("/bookadmin");
        }
      } catch (e) {
        console.log(e);
      }
    };
    return {
      TENSACH,
      DONGIA,
      SOQUYEN,
      NAMXUATBAN,
      MANXB,
      IMAGE,

      TACGIA,
      updateBook,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Cập nhật sách</h2>
      <form @submit.prevent="updateBook">
        <div class="form-group">
          <label for="name">Tên sách:</label>
          <input type="text" class="form-control" id="name" v-model="TENSACH" />
        </div>
        <div class="form-group">
          <label for="price">Hinh Anh:</label>
          <input type="text" class="form-control" id="price" v-model="IMAGE" />
        </div>
        <div class="form-group">
          <label for="price">Đơn giá:</label>
          <input type="text" class="form-control" id="price" v-model="DONGIA" />
        </div>
        <div class="form-group">
          <label for="count">Số quyển:</label>
          <input
            type="text"
            class="form-control"
            id="count"
            v-model="SOQUYEN"
          />
        </div>
        <div class="form-group">
          <label for="year">Năm xuất bản:</label>
          <input
            type="text"
            class="form-control"
            id="year"
            v-model="NAMXUATBAN"
          />
        </div>
        <!-- <div class="form-group">
          <label for="NBX">Nhà xuất bản:</label>
          <select class="form-control" id="NBX">
            <option>kim đồng</option>
            <option>kim cương</option>
            <option>kim tuyến</option>
          </select>
        </div> -->
        <div class="form-group">
          <label for="year">Nhà xuất bản:</label>
          <input type="text" class="form-control" id="year" v-model="MANXB" />
        </div>
        <div class="form-group">
          <label for="year">Tác giả:</label>
          <input type="text" class="form-control" id="year" v-model="TACGIA" />
        </div>
        <button type="submit" class="btn btn-primary button-update">
          Cập nhật
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/formUpdate.css");
</style>
