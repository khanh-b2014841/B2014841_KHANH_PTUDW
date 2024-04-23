<script>
import { ref, onMounted, computed } from "vue";
import { nhanVienService } from "~/services/nhanVien.service";

export default {
  setup() {
    const data = ref([]);

    const receiveNhanVien = async () => {
      try {
        const res = await nhanVienService.getAll();
        if (res.data) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      await receiveNhanVien();
    });

    return {
      receiveNhanVien,
      data,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <router-link to="/addstaff">
      <button type="button" class="btn btn-success add-button">thêm</button>
    </router-link>
    <table class="table">
      <thead>
        <tr class="color-th">
          <th>Tên</th>
          <th>Địa chỉ</th>
          <th>Chức vụ</th>
          <th>Số điện thoại</th>

          <th>hành động</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="item in data" :key="item._id">
          <td>{{ item.HoTenNV }}</td>
          <td>{{ item.DiaChi }}</td>
          <td>{{ item.ChucVu }}</td>
          <td>{{ item.SoDienThoai }}</td>

          <td class="button-admin">
            <button type="button" class="btn btn-warning">sửa</button>
            <button type="button" class="btn btn-danger">xóa</button>
          </td>
        </tr>

        <!-- Thêm các hàng dữ liệu khác tại đây -->
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/bookAdmin.css");
</style>
