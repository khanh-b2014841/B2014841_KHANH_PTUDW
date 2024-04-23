<script>
import { ref } from "vue";
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

    const addBook = async () => {
      try {
        const res = await sachService.create({
          TENSACH: TENSACH.value,
          DONGIA: DONGIA.value,
          SOQUYEN: SOQUYEN.value,
          NAMXUATBAN: NAMXUATBAN.value,
          MANXB: MANXB.value,
          IMAGE: IMAGE.value,
          TACGIA: TACGIA.value,
        });
        alert(res.message);
      } catch (e) {
        alert("thêm thất bại!");
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
      addBook,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Thêm sách</h2>
      <form @submit.prevent="addBook">
        <div class="form-group">
          <label for="name">Tên sách:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập tên sách"
            v-model="TENSACH"
          />
        </div>
        <div class="form-group">
          <label for="name">Hình ảnh:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập hình anh"
            v-model="IMAGE"
          />
        </div>

        <div class="form-group">
          <label for="price">Đơn giá:</label>
          <input
            type="text"
            class="form-control"
            id="price"
            placeholder="Nhập giá"
            v-model="DONGIA"
          />
        </div>
        <div class="form-group">
          <label for="count">Số quyển:</label>
          <input
            type="text"
            class="form-control"
            id="count"
            placeholder="Nhập số lượng"
            v-model="SOQUYEN"
          />
        </div>
        <div class="form-group">
          <label for="year">Năm xuất bản:</label>
          <input
            type="text"
            class="form-control"
            id="year"
            placeholder="Nhập năm xuất bản"
            v-model="NAMXUATBAN"
          />
        </div>
        <!-- <div class="form-group">
          <label for="NBX">Nhà xuất bản:</label>
          <select class="form-control" id="NBX" placeholder="chọn năn xuất bản">
            <option>kim đồng</option>
            <option>kim cương</option>
            <option>kim tuyến</option>
          </select>
        </div> -->
        <div class="form-group">
          <label for="year">Nhà Xuất bản:</label>
          <input
            type="text"
            class="form-control"
            id="year"
            placeholder="Nhập tên tác giả"
            v-model="MANXB"
          />
        </div>
        <div class="form-group">
          <label for="year">Tác giả:</label>
          <input
            type="text"
            class="form-control"
            id="year"
            placeholder="Nhập tên tác giả"
            v-model="TACGIA"
          />
        </div>
        <button type="submit" class="btn btn-primary button-add">Thêm</button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/formUpdate.css");
</style>
