import { createRouter, createWebHistory } from "vue-router";

import indexHome from "~/layouts/indexHome.vue";
import indexAccount from "~/layouts/indexAccount.vue";
import indexAdmin from "~/layouts/indexAdmin.vue";

import Home from "~/pages/Home/Home.vue";
import Books from "~/pages/Home/Books.vue";
import Detail from "~/pages/Home/Detail.vue";
import About from "~/pages/Home/About.vue";

import logIn from "~/pages/Account/logIn.vue";
import logUp from "~/pages/Account/logUp.vue";

import userAdmin from "~/pages/Admins/userAdmin.vue";
import bookAdmin from "~/pages/Admins/bookAdmin.vue";
import NXBAdmin from "~/pages/Admins/NXBAdmin.vue";
import staffAdmin from "~/pages/Admins/staffAdmin.vue";
import phieuMuonAdmin from "~/pages/Admins/phieuMuonAdmin.vue";

import updateStaff from "~/pages/Admins/form/updateStaff.vue";
import updateNXB from "~/pages/Admins/form/updateNXB.vue";
import updateBook from "~/pages/Admins/form/updateBook.vue";

import addBook from "~/pages/Admins/form/addBook.vue";
import addNXB from "~/pages/Admins/form/addNXB.vue";
import addStaff from "~/pages/Admins/form/addStaff.vue";

const routes = [
  {
    path: "",
    component: indexHome,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "books",
        name: "books",
        component: Books,
      },
      {
        path: "detail",
        name: "detail",
        component: Detail,
      },
      {
        path: "about",
        name: "about",
        component: About,
      },
    ],
  },

  {
    path: "",
    component: indexAccount,
    children: [
      {
        path: "logIn",
        name: "logIn",
        component: logIn,
      },
      {
        path: "logUp",
        name: "logUp",
        component: logUp,
      },
    ],
  },

  {
    path: "",
    component: indexAdmin,
    children: [
      {
        path: "useradmin",
        name: "useradmin",
        component: userAdmin,
      },
      {
        path: "bookadmin",
        name: "bookadmin",
        component: bookAdmin,
      },
      {
        path: "nxbadmin",
        name: "nxbadmin",
        component: NXBAdmin,
      },
      {
        path: "staffadmin",
        name: "staffadmin",
        component: staffAdmin,
      },
      {
        path: "phieumuonadmin",
        name: "phieumuonadmin",
        component: phieuMuonAdmin,
      },

      {
        path: "updatestaff",
        name: "updatestaff",
        component: updateStaff,
      },
      {
        path: "updatenxb",
        name: "updatenxb",
        component: updateNXB,
      },
      {
        path: "updatebook",
        name: "updatebook",
        component: updateBook,
      },

      {
        path: "addbook",
        name: "addbook",
        component: addBook,
      },
      {
        path: "addnxb",
        name: "addnxb",
        component: addNXB,
      },
      {
        path: "addstaff",
        name: "addstaff",
        component: addStaff,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
