<script>
import { ref } from "vue";
import { nhaXuatBanService } from "~/services/nbx.service";

export default {
  setup() {
    const TENNXB = ref("");
    const DIACHI = ref("");

    const addNbx = async () => {
      try {
        const res = await nhaXuatBanService.create({
          TENNXB: TENNXB.value,
          DIACHI: DIACHI.value,
        });
        alert(res.message);
      } catch (e) {
        alert("thêm thất bại!");
      }
    };
    return {
      TENNXB,
      DIACHI,
      addNbx,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Thêm Nhà Xuất Bản</h2>
      <form @submit.prevent="addNbx">
        <div class="form-group">
          <label for="name">Tên:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập tên Nhà xuất bản"
            v-model="TENNXB"
          />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ:</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Nhập Địa chỉ"
            v-model="DIACHI"
          />
        </div>

        <button type="submit" class="btn btn-primary button-update">
          Thêm
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/formUpdate.css");
</style>
