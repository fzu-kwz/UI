import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const BackTop = () => import("../views/back-top.vue");
const Button = () => import("../views/button.vue");
const Empty = () => import("../views/empty.vue");
const Form = () => import("../views/form.vue");
const Input = () => import("../views/input.vue");
const Layout = () => import("../views/layout.vue");
const LazyLoadImg = () => import("../views/lazy-load-img.vue");
const Loading = () => import("../views/loading.vue");
const Menu = () => import("../views/menu.vue");
const Pagination = () => import("../views/pagination.vue");
const Select = () => import("../views/select.vue");
const Upload = () => import("../views/upload.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/back-top" },
  {
    path: "/back-top",
    name: "back-top",
    component: BackTop,
    meta: { title: "BackTop" },
  },
  {
    path: "/button",
    name: "button",
    component: Button,
    meta: { title: "Button" },
  },
  {
    path: "/empty",
    name: "empty",
    component: Empty,
    meta: { title: "Empty" },
  },
  {
    path: "/form",
    name: "form",
    component: Form,
    meta: { title: "Form" },
  },
  {
    path: "/input",
    name: "input",
    component: Input,
    meta: { title: "Input" },
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    meta: { title: "Layout" },
  },
  {
    path: "/lazy-load-img",
    name: "lazy-load-img",
    component: LazyLoadImg,
    meta: { title: "LazyLoadImg" },
  },
  {
    path: "/loading",
    name: "loading",
    component: Loading,
    meta: { title: "Loading" },
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
    meta: { title: "Menu" },
  },
  {
    path: "/pagination",
    name: "pagination",
    component: Pagination,
    meta: { title: "Pagination" },
  },
  {
    path: "/select",
    name: "select",
    component: Select,
    meta: { title: "Select" },
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
    meta: { title: "Upload" },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// HTML文档标题
router.afterEach((to, from, failure) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = "Demo";
  }
});

export default router;