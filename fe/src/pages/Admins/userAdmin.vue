<script>
import { ref, onMounted, computed } from "vue";
import { docGiaService } from "~/services/docGia.service";

export default {
  setup() {
    const data = ref([]);

    const receiveDocGia = async () => {
      try {
        const res = await docGiaService.getAll();
        if (res.data) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      await receiveDocGia();
    });

    return {
      receiveDocGia,
      data,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <h1>Quản lý đọc giả</h1>
    <table class="table">
      <thead>
        <tr class="color-th">
          <th>Tên</th>
          <th>Địa chỉ</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Số điện thoại</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="item in data" :key="item._id">
          <td>{{ item.TEN }}</td>
          <td>{{ item.DIACHI }}</td>
          <td>{{ item.PHAI }}</td>
          <td>{{ item.NGAYSINH }}</td>
          <td>{{ item.DIENTHOAI }}</td>
        </tr>

        <!-- Thêm các hàng dữ liệu khác tại đây -->
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/userAdmin.css");
</style>
