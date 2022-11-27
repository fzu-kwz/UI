import { App, Component } from "vue";
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

// 按需引入
export {
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
};

const component = [
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
];

const KUI = {
  install(App: App) {
    component.forEach((item: Component) => {
      App.component(item.name as string, item);
    });
  },
};

export default KUI;
