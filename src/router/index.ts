import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Avatar = () => import("@/views/avatar.vue");
const BackTop = () => import("@/views/back-top.vue");
const Button = () => import("@/views/button.vue");
const ColorPicker = () => import("@/views/color-picker.vue");
const Empty = () => import("@/views/empty.vue");
const Form = () => import("@/views/form.vue");
const Input = () => import("@/views/input.vue");
const Container = () => import("@/views/container.vue");
const LazyLoadImg = () => import("@/views/lazy-load-img.vue");
const Loading = () => import("@/views/loading.vue");
const Menu = () => import("@/views/menu.vue");
const Pagination = () => import("@/views/pagination.vue");
const Progress = () => import("@/views/progress.vue");
const Radio = () => import("@/views/radio.vue");
const Select = () => import("@/views/select.vue");
const Skeleton = () => import("@/views/skeleton.vue");
const Upload = () => import("@/views/upload.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/avatar" },
  {
    path: "/avatar",
    name: "avatar",
    component: Avatar,
    meta: { title: "Avatar 头像" },
  },
  {
    path: "/back-top",
    name: "back-top",
    component: BackTop,
    meta: { title: "BackTop 回到顶部" },
  },
  {
    path: "/button",
    name: "button",
    component: Button,
    meta: { title: "Button 按钮" },
  },
  {
    path: "/color-picker",
    name: "color-picker",
    component: ColorPicker,
    meta: { title: "ColorPicker 颜色选择器" },
  },
  {
    path: "/empty",
    name: "empty",
    component: Empty,
    meta: { title: "Empty 空状态" },
  },
  {
    path: "/form",
    name: "form",
    component: Form,
    meta: { title: "Form 表单" },
  },
  {
    path: "/input",
    name: "input",
    component: Input,
    meta: { title: "Input 输入框" },
  },
  {
    path: "/container",
    name: "container",
    component: Container,
    meta: { title: "Container 布局容器" },
  },
  {
    path: "/lazy-load-img",
    name: "lazy-load-img",
    component: LazyLoadImg,
    meta: { title: "LazyLoadImg 懒加载图片" },
  },
  {
    path: "/loading",
    name: "loading",
    component: Loading,
    meta: { title: "Loading 加载中" },
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
    meta: { title: "Menu 菜单栏" },
  },
  {
    path: "/pagination",
    name: "pagination",
    component: Pagination,
    meta: { title: "Pagination 分页" },
  },
  {
    path: "/progress",
    name: "progress",
    component: Progress,
    meta: { title: "Progress 进度条" },
  },
  {
    path: "/radio",
    name: "radio",
    component: Radio,
    meta: { title: "Radio 单选框" },
  },
  {
    path: "/select",
    name: "select",
    component: Select,
    meta: { title: "Select 下拉框" },
  },
  {
    path: "/skeleton",
    name: "skeleton",
    component: Skeleton,
    meta: { title: "Skeleton 骨架屏" },
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
    meta: { title: "Upload 上传" },
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
