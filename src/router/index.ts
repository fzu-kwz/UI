import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Guide = () => import("@/views/guide.vue");
const Alert = () => import("@/views/alert.vue");
const Avatar = () => import("@/views/avatar.vue");
const BackTop = () => import("@/views/back-top.vue");
const Breadcrumb = () => import("@/views/breadcrumb.vue");
const Button = () => import("@/views/button.vue");
const Card = () => import("@/views/card.vue");
const Checkbox = () => import("@/views/checkbox.vue");
const ColorPicker = () => import("@/views/color-picker.vue");
const Container = () => import("@/views/container.vue");
const Counter = () => import("@/views/counter.vue");
const Dialog = () => import("@/views/dialog.vue");
const Drawer = () => import("@/views/drawer.vue");
const Empty = () => import("@/views/empty.vue");
const FoldPanel = () => import("@/views/fold-panel.vue");
const Form = () => import("@/views/form.vue");
const ImageCutter = () => import("@/views/image-cutter.vue");
const Image = () => import("@/views/image.vue");
const Input = () => import("@/views/input.vue");
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
const Switch = () => import("@/views/switch.vue");
const Table = () => import("@/views/table.vue");
const Tag = () => import("@/views/tag.vue");
const Message = () => import("@/views/message.vue");
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
    path: "/alert",
    name: "alert",
    component: Alert,
    meta: { title: "Alert 警告" },
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
    path: "/breadcrumb",
    name: "breadcrumb",
    component: Breadcrumb,
    meta: { title: "Breadcrumb 面包屑" },
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
    path: "/counter",
    name: "counter",
    component: Counter,
    meta: { title: "Counter 计数器" },
  },
  {
    path: "/dialog",
    name: "dialog",
    component: Dialog,
    meta: { title: "Dialog 对话框" },
  },
  {
    path: "/drawer",
    name: "drawer",
    component: Drawer,
    meta: { title: "Drawer 抽屉" },
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
    path: "/image-cutter",
    name: "image-cutter",
    component: ImageCutter,
    meta: { title: "ImageCutter 图片裁剪" },
  },
  {
    path: "/image",
    name: "image",
    component: Image,
    meta: { title: "Image 图片" },
  },
  {
    path: "/input",
    name: "input",
    component: Input,
    meta: { title: "Input 输入框" },
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
    path: "/message",
    name: "message",
    component: Message,
    meta: { title: "Message 提示" },
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
    path: "/switch",
    name: "switch",
    component: Switch,
    meta: { title: "Switch 开关" },
  },
  {
    path: "/table",
    name: "table",
    component: Table,
    meta: { title: "Table 表格" },
  },
  {
    path: "/tag",
    name: "tag",
    component: Tag,
    meta: { title: "Tag 标签" },
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

router.beforeEach((_to, _from, next) => {
  document.querySelector("main")?.scrollTo(0, 0);
  next();
});

// HTML文档标题
router.afterEach((to, _from, _failure) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = "Demo";
  }
});

export default router;
