<script>
import { ref, onMounted, computed } from "vue";
import { nhaXuatBanService } from "~/services/nbx.service";

export default {
  setup() {
    const data = ref([]);

    const receiveNbx = async () => {
      try {
        const res = await nhaXuatBanService.getAll();
        if (res.data) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      await receiveNbx();
    });

    return {
      receiveNbx,
      data,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <h1>Quản lý nhà xuất bản</h1>
    <router-link to="/addnxb">
      <button type="button" class="btn btn-success add-button">thêm</button>
    </router-link>
    <table class="table">
      <thead>
        <tr class="color-th">
          <th>Tên</th>
          <th>Địa chỉ</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="item in data" :key="item._id">
          <td>{{ item.TENNXB }}</td>
          <td>{{ item.DIACHI }}</td>

          <td class="button-admin">
            <router-link :to="'/updatenxb?id=' + item._id">
              <button type="button" class="btn btn-warning">sửa</button>
            </router-link>
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
