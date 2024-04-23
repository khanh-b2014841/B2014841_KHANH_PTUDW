<script>
import { ref, onMounted, computed } from "vue";
import { sachService } from "~/services/sach.service";

export default {
  setup() {
    const data = ref([]);

    const receiveBook = async () => {
      try {
        const res = await sachService.getAll();
        if (res.data) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      await receiveBook();
    });

    return {
      data,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <router-link to="/addbook">
      <button type="button" class="btn btn-success add-button">thêm</button>
    </router-link>
    <table class="table">
      <thead>
        <tr class="color-th">
          <th>Tên</th>
          <th>Hình ảnh</th>
          <th>Đơn giá</th>
          <th>số quyển</th>
          <th>Năm xuất bản</th>

          <th>tac gia</th>
          <th>hành động</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="item in data" :key="item._id">
          <td>{{ item.TENSACH }}</td>
          <td>{{ item.IMAGE }}</td>
          <td>{{ item.DONGIA.toLocaleString("vi-VN") }} VND</td>
          <td>{{ item.SOQUYEN }}</td>
          <td>{{ item.NAMXUATBAN }}</td>
          <td>{{ item.TACGIA }}</td>
          <td class="button-admin">
            <router-link to="/updatebook">
              <button type="button" class="btn btn-warning">sửa</button>
            </router-link>
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
