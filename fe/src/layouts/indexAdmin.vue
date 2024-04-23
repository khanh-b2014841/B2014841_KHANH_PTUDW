<script></script>
<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <header class="header">
    <img class="imageLogo" src="../assets/images/logo.jpg" alt="" />

    <nav class="navbar">
      <form class="form-inline my-2 my-lg-0">
        <div class="searchForm">
          <input
            class="form-control mr-sm-2 searchInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="bx bx-search-alt-2 iconSearch"></i>
        </div>
      </form>
      <router-link to="/">
        <button class="buttonHeader">Trang chủ</button>
      </router-link>
      <router-link to="/about">
        <button class="buttonHeader">Giới thiệu</button>
      </router-link>
      <button class="buttonHeader">SÁCH</button>
      <button class="buttonHeader">ADMIN</button>
    </nav>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h1>Xin chào admin</h1>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/useradmin">
                <button>
                  <i class="bx bxs-book-reader"></i>Quản lý Đọc giả
                </button>
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/bookadmin">
                <button><i class="bx bx-book-open"></i>Quản lý sách</button>
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/nxbadmin">
                <button><i class="bx bxs-edit"></i>Quản lý nhà xuất bản</button>
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/staffadmin">
                <button>
                  <i class="bx bxs-user-account"></i>Quản lý nhân viên
                </button>
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/phieumuonadmin">
                <button>
                  <i class="bx bxs-user-account"></i>Phiếu theo dõi
                </button>
              </router-link>
            </li>
            <li class="list-group-item">
              <button><i class="bx bx-log-out"></i>Đăng xuất</button>
            </li>
          </ul>
        </div>
        <router-view />
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
@import url("~/assets/css/indexAdmin.css");
</style>
