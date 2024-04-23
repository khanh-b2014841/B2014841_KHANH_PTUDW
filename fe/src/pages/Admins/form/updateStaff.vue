<script></script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Cập nhật nhân viên</h2>
      <form>
        <div class="form-group">
          <label for="name">Tên:</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ:</label>
          <input type="text" class="form-control" id="address" />
        </div>

        <div class="form-group">
          <label for="position">Chức vụ:</label>
          <input type="text" class="form-control" id="position" />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại:</label>
          <input type="tel" class="form-control" id="phone" />
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
