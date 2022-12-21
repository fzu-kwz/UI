import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Guide = () => import("@/views/guide.vue");
const Avatar = () => import("@/views/avatar.vue");
const BackTop = () => import("@/views/back-top.vue");
const Button = () => import("@/views/button.vue");
const Card = () => import("@/views/card.vue");
const Checkbox = () => import("@/views/checkbox.vue");
const ColorPicker = () => import("@/views/color-picker.vue");
const Container = () => import("@/views/container.vue");
const Dialog = () => import("@/views/dialog.vue");
const Empty = () => import("@/views/empty.vue");
const FoldPanel = () => import("@/views/fold-panel.vue");
const Form = () => import("@/views/form.vue");
const Input = () => import("@/views/input.vue");
const LazyLoadImg = () => import("@/views/lazy-load-img.vue");
const Loading = () => import("@/views/loading.vue");
const Menu = () => import("@/views/menu.vue");
const Pagination = () => import("@/views/pagination.vue");
const Popup = () => import("@/views/popup.vue");
const Progress = () => import("@/views/progress.vue");
const Radio = () => import("@/views/radio.vue");
const Select = () => import("@/views/select.vue");
const Skeleton = () => import("@/views/skeleton.vue");
const SlideShow = () => import("@/views/slide-show.vue");
const Slider = () => import("@/views/slider.vue");
const Table = () => import("@/views/table.vue");
const Tip = () => import("@/views/tip.vue");
const Upload = () => import("@/views/upload.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/guide" },
  {
    path: "/guide",
    name: "guide",
    component: Guide,
    meta: { title: "Guide 引导" },
  },
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
    path: "/card",
    name: "card",
    component: Card,
    meta: { title: "Card 卡片" },
  },
  {
    path: "/checkbox",
    name: "checkbox",
    component: Checkbox,
    meta: { title: "Checkbox 多选框" },
  },
  {
    path: "/color-picker",
    name: "color-picker",
    component: ColorPicker,
    meta: { title: "ColorPicker 颜色选择器" },
  },
  {
    path: "/container",
    name: "container",
    component: Container,
    meta: { title: "Container 布局容器" },
  },
  {
    path: "/dialog",
    name: "dialog",
    component: Dialog,
    meta: { title: "Dialog 对话框" },
  },
  {
    path: "/empty",
    name: "empty",
    component: Empty,
    meta: { title: "Empty 空状态" },
  },
  {
    path: "/fold-panel",
    name: "fold-panel",
    component: FoldPanel,
    meta: { title: "FoldPanel 折叠面板" },
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
    path: "/popup",
    name: "popup",
    component: Popup,
    meta: { title: "Popup 弹窗" },
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
    meta: { title: "Select 选择器" },
  },
  {
    path: "/skeleton",
    name: "skeleton",
    component: Skeleton,
    meta: { title: "Skeleton 骨架屏" },
  },
  {
    path: "/slide-show",
    name: "slide-show",
    component: SlideShow,
    meta: { title: "SlideShow 幻灯片" },
  },
  {
    path: "/slider",
    name: "slider",
    component: Slider,
    meta: { title: "Slider 滑块" },
  },
  {
    path: "/table",
    name: "table",
    component: Table,
    meta: { title: "Table 表格" },
  },
  {
    path: "/tip",
    name: "tip",
    component: Tip,
    meta: { title: "Tip 提示" },
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
