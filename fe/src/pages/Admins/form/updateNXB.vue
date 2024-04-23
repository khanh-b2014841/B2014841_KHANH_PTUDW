<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "~/router";

import { nhaXuatBanService } from "~/services/nbx.service";

export default {
  setup() {
    const TENNXB = ref("");
    const DIACHI = ref("");
    const route = useRoute();
    const idNbx = ref(route.query.id);

    const getNbx = async () => {
      try {
        const res = await nhaXuatBanService.getOne(idNbx.value);
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
        TENNXB.value = data.TENNXB;
        DIACHI.value = data.DIACHI;
      }
    });

    const updateNbx = async () => {
      try {
        const res = await nhaXuatBanService.edit(idNbx.value, {
          TENNXB: TENNXB.value,
          DIACHI: DIACHI.value,
        });
        if (res.data) {
          alert("Cập nhật thành công");

          router.push("/nxbadmin");
        }
      } catch (e) {
        console.log(e);
      }
    };
    return {
      TENNXB,
      DIACHI,
      updateNbx,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Cập nhật Nhà Xuất Bản</h2>
      <form @submit.prevent="updateNbx">
        <div class="form-group">
          <label for="name">Tên:</label>
          <input type="text" class="form-control" id="name" v-model="TENNXB" />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ:</label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="DIACHI"
          />
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
