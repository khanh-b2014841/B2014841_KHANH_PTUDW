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
  <div
    id="carouselExampleCaptions"
    class="carousel slide h-25 slider-mr"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/images/slider1.jpg"
          class="d-block w-100"
          style="max-height: 75vh"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="title_slide">Sách</h5>
          <p>
            sách là một công cụ quan trọng trong việc truyền đạt thông tin và
            kiến thức, và chúng đóng vai trò quan trọng trong việc giáo dục,
            giải trí và khám phá cho con người.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/images/slider2.jpg"
          class="d-block w-100"
          style="max-height: 75vh"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="title_slide">Tri thức</h5>
          <p>
            Tri thức là một tài nguyên quý giá và có thể đóng vai trò quan trọng
            trong sự phát triển cá nhân, xã hội và kinh tế của một cá nhân hay
            một cộng đồng. Nó mang lại khả năng hiểu biết, sáng tạo, và tiến bộ
            trong nhiều lĩnh vực khác nhau.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/images/slider3.jpg"
          class="d-block w-100"
          style="max-height: 75vh"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="title_slide">Thư viện</h5>
          <p>
            thư viện là một tổ chức quan trọng trong việc cung cấp, bảo quản và
            truyền bá tri thức cho cộng đồng. Chúng đóng vai trò quan trọng
            trong việc khuyến khích học tập, nghiên cứu, và tiếp cận thông tin
            đa dạng.
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <container>
    <div class="row">
      <div class="title-home">
        <h1>SÁCH HAY</h1>
      </div>
      <container>
        <div class="product-container" v-if="data">
          <div class="product-card" v-for="item in data" :key="item._id">
            <img :src="`/src/assets/images/${item.IMAGE}`" alt="Sản phẩm 1" />
            <h3 class="product-name">{{ item.TENSACH }}</h3>
            <p class="product-price">
              {{ item.DONGIA.toLocaleString("vi-VN") }} VND
            </p>
            <p class="product-author">{{ item.TACGIA }}</p>
          </div>
        </div>
      </container>
    </div>
  </container>
</template>

<style lang="css" scoped>
@import url("~/assets/css/Home.css");
</style>
