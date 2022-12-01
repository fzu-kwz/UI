import { App, Component } from "vue";
import Container from "./container/index.vue";
import Header from "./header/index.vue";
import Footer from "./footer/index.vue";
import Aside from "./aside/index.vue";
import Main from "./main/index.vue";
import KInput from "./input/index.vue";
import KButton from "./button/index.vue";
import KSelect from "./select/index.vue";
import LazyLoadImg from "./lazy-load-img/index.vue";
import BackTop from "./back-top/index.vue";
import Pagination from "./pagination/index.vue";
import Upload from "./upload/index.vue";
import Empty from "./empty/index.vue";
import Loading from "./loading/index.vue";
import KForm from "./form/index.vue";
import FormItem from "./form/form-item/index.vue";
import Menu from "./menu/index.vue";
import MenuItem from "./menu/menu-item/index.vue";
import SubMenu from "./menu/sub-menu/index.vue";
import Progress from "./progress/index.vue";
import Radio from "./radio/index.vue";
import ColorPicker from "./color-picker/index.vue";

// 按需引入
export {
  Container,
  Header,
  Footer,
  Aside,
  Main,
  KInput,
  KButton,
  KSelect,
  LazyLoadImg,
  BackTop,
  Pagination,
  Upload,
  Empty,
  Loading,
  KForm,
  FormItem,
  Menu,
  MenuItem,
  SubMenu,
  Progress,
  Radio,
  ColorPicker,
};

const component = [
  Container,
  Header,
  Footer,
  Aside,
  Main,
  KInput,
  KButton,
  KSelect,
  LazyLoadImg,
  BackTop,
  Pagination,
  Upload,
  Empty,
  Loading,
  KForm,
  FormItem,
  Menu,
  MenuItem,
  SubMenu,
  Progress,
  Radio,
  ColorPicker,
];

const KUI = {
  install(App: App) {
    component.forEach((item: Component) => {
      App.component(item.name as string, item);
    });
  },
};

export default KUI;
