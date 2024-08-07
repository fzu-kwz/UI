import { App, Component } from "vue";
import Alert from "./alert/index.vue";
import Aside from "./aside/index.vue";
import Avatar from "./avatar/index.vue";
import BackTop from "./back-top/index.vue";
import Breadcrumb from "./breadcrumb/index.vue";
import Button from "./button/index.vue";
import Card from "./card/index.vue";
import Chechbox from "./checkbox/index.vue";
import ColorPicker from "./color-picker/index.vue";
import Container from "./container/index.vue";
import Counter from "./counter/index.vue";
import Dialog from "./dialog/index.vue";
import Drawer from "./drawer/index.vue";
import Empty from "./empty/index.vue";
import FoldPanel from "./fold-panel/index.vue";
import FoldPanelItem from "./fold-panel/fold-panel-item/index.vue";
import Footer from "./footer/index.vue";
import Form from "./form/index.vue";
import FormItem from "./form/form-item/index.vue";
import Header from "./header/index.vue";
import Image from "./image/index.vue";
import Input from "./input/index.vue";
import Loading from "./loading/index.vue";
import Main from "./main/index.vue";
import Menu from "./menu/index.vue";
import MenuItem from "./menu/menu-item/index.vue";
import SubMenu from "./menu/sub-menu/index.vue";
import Pagination from "./pagination/index.vue";
import Popup from "./popup/index.vue";
import Progress from "./progress/index.vue";
import Radio from "./radio/index.vue";
import Select from "./select/index.vue";
import Skeleton from "./skeleton/index.vue";
import SlideShow from "./slide-show/index.vue";
import Slider from "./slider/index.vue";
import Switch from "./switch/index.vue";
import Table from "./table/index.vue";
import Tag from "./tag/index.vue";
import Message from "./message/index";
import Upload from "./upload/index.vue";

// 按需引入
export {
  Alert,
  Aside,
  Avatar,
  BackTop,
  Breadcrumb,
  Button,
  Card,
  Chechbox,
  ColorPicker,
  Container,
  Counter,
  Dialog,
  Drawer,
  Empty,
  FoldPanel,
  FoldPanelItem,
  Footer,
  Form,
  FormItem,
  Header,
  Image,
  Input,
  Loading,
  Main,
  Menu,
  MenuItem,
  SubMenu,
  Pagination,
  Popup,
  Progress,
  Radio,
  Select,
  Skeleton,
  SlideShow,
  Slider,
  Switch,
  Table,
  Tag,
  Message,
  Upload,
};

const component = [
  Alert,
  Aside,
  Avatar,
  BackTop,
  Breadcrumb,
  Button,
  Card,
  Chechbox,
  ColorPicker,
  Container,
  Counter,
  Dialog,
  Drawer,
  Empty,
  FoldPanel,
  FoldPanelItem,
  Footer,
  Form,
  FormItem,
  Header,
  Image,
  Input,
  Loading,
  Main,
  Menu,
  MenuItem,
  SubMenu,
  Pagination,
  Popup,
  Progress,
  Radio,
  Select,
  Skeleton,
  SlideShow,
  Slider,
  Switch,
  Table,
  Tag,
  Upload,
];

const BurgerUI = {
  install(App: App) {
    component.forEach((item: Component) => {
      App.component(item.name as string, item);
    });
  },
};

export default BurgerUI;
