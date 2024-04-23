<script></script>
<template>
  <div class="col-md-9">
    <table class="table">
      <thead>
        <tr class="color-th">
          <th>Tên Đọc giả</th>
          <th>Tên sách</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>

          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>khanh</td>
          <td>Đắc nhân tâm</td>
          <td>10/5/2024</td>
          <td>10/5/2025</td>

          <td class="button-admin">
            <button type="button" class="btn btn-danger">Hủy</button>
            <button type="button" class="btn btn-success">Xác nhận</button>
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
