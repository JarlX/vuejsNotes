import Home from "./components/Home.vue";
import Header from "./components/Header";

const User = (resolve) => {
  require.ensure(["./components/user/User.vue"], () => {
    resolve(require("./components/user/User.vue"));
  });
};

const UserStart = (resolve) => {
  require.ensure(["./components/user/UserStart.vue"], () => {
    resolve(require("./components/user/UserStart.vue"));
  });
};

const UserDetail = (resolve) => {
  require.ensure(["./components/user/UserDetail.vue"], () => {
    resolve(require("./components/user/UserDetail.vue"));
  });
};

const UserEdit = (resolve) => {
  require.ensure(["./components/user/UserEdit.vue"], () => {
    resolve(require("./components/user/UserEdit.vue"));
  });
};

export const routes = [
  {
    path: "/",
    name: "anasayfa",
    components: {
      default: Home,
      "header-top": Header,
    },
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header,
    },

    name: "kullanici",
    children: [
      { path: "", component: UserStart }, //user
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("Route Kontrol");
          next();
        },
      }, //user/12
      { path: ":id/edit", component: UserEdit, name: "UserEdit" }, //user/12/edit
    ],
  }, //user/salihcancakar ->>> salihcancakar id olacaktır
  {
    path: "/redirect",
    redirect: "/user",
  },
  {
    path: "*",
    redirect: "/",
  },
];
