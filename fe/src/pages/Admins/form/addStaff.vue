<script>
import { ref } from "vue";
import { nhanVienService } from "~/services/nhanVien.service";

export default {
  setup() {
    const HoTenNV = ref("");
    const ChucVu = ref("");
    const DiaChi = ref("");
    const SoDienThoai = ref("");

    const addStaff = async () => {
      try {
        const res = await nhanVienService.create({
          HoTenNV: HoTenNV.value,
          ChucVu: ChucVu.value,
          DiaChi: DiaChi.value,
          SoDienThoai: SoDienThoai.value,
        });
        alert(res.message);
      } catch (e) {
        alert("thêm thất bại!");
      }
    };
    return {
      HoTenNV,
      ChucVu,
      DiaChi,
      SoDienThoai,
      addStaff,
    };
  },
};
</script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Thêm nhân viên</h2>

      <form @submit.prevent="addStaff">
        <div class="form-group">
          <label for="name">Tên:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập tên nhân viên"
            v-model="HoTenNV"
          />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ:</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Nhập địa chỉ"
            v-model="DiaChi"
          />
        </div>

        <div class="form-group">
          <label for="position">Chức vụ:</label>
          <input
            type="text"
            class="form-control"
            id="position"
            placeholder="Nhập chức vụ"
            v-model="ChucVu"
          />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại:</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="Nhập số điện thoại"
            v-model="SoDienThoai"
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
