<script></script>
<template>
  <div class="col-md-9">
    <div class="container">
      <h2>Cập nhật sách</h2>
      <form>
        <div class="form-group">
          <label for="name">Tên sách:</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="image">Hình ảnh:</label> <br />
          <input
            type="file"
            class="form-control-file"
            id="image"
            accept="image/*"
          />
        </div>
        <div class="form-group">
          <label for="price">Đơn giá:</label>
          <input type="text" class="form-control" id="price" />
        </div>
        <div class="form-group">
          <label for="count">Số quyển:</label>
          <input type="text" class="form-control" id="count" />
        </div>
        <div class="form-group">
          <label for="year">Năm xuất bản:</label>
          <input type="text" class="form-control" id="year" />
        </div>
        <div class="form-group">
          <label for="NBX">Nhà xuất bản:</label>
          <select class="form-control" id="NBX">
            <option>kim đồng</option>
            <option>kim cương</option>
            <option>kim tuyến</option>
          </select>
        </div>

        <div class="form-group">
          <label for="year">Tác giả:</label>
          <input type="text" class="form-control" id="year" />
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
