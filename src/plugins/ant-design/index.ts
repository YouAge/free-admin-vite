/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： ant-design 按需导入
 */


import type { App } from 'vue';

import {
  // need
  version,
  message,
  notification,
  Affix, Anchor,
  AutoComplete,
  Alert, Avatar,
  BackTop, Badge,
  Breadcrumb, Button,
  Calendar, Card,
  Collapse, Carousel, Cascader,
  Checkbox, Col, DatePicker, Divider,
  Dropdown, Form, Icon, Input, InputNumber,
  Layout, List, LocaleProvider, Menu, Mentions, Modal,
  Pagination, Popconfirm, Popover, Progress, Radio, Rate,
  Row, Select, Slider, Spin, Statistic, Steps, Switch, Table,
  Transfer, Tree, TreeSelect, Tabs, Tag, TimePicker, Timeline,
  Tooltip, Upload, Drawer, Skeleton, Comment, ConfigProvider,
  Empty, Result, Descriptions, PageHeader, Space, Image, Typography

} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const plugins = [
  version,
  message,
  notification,
  Affix, Anchor,
  AutoComplete,
  Alert, Avatar,
  BackTop, Badge,
  Breadcrumb, Button,
  Calendar, Card,
  Collapse, Carousel, Cascader,
  Checkbox, Col, DatePicker, Divider,
  Dropdown, Form, Icon, Input, InputNumber,
  Layout, List, LocaleProvider, Menu, Mentions, Modal,
  Pagination, Popconfirm, Popover, Progress, Radio, Rate,
  Row, Select, Slider, Spin, Statistic, Steps, Switch, Table,
  Transfer, Tree, TreeSelect, Tabs, Tag, TimePicker, Timeline,
  Tooltip, Upload, Drawer, Skeleton, Comment, ConfigProvider,
  Empty, Result, Descriptions, PageHeader, Space, Image, Typography
]

export function setupAntd(app: App<Element>) {
  // need
  // Here are the components required before registering and logging in
  // app.use(Form).use(Input).use(Row).use(Col).use(Spin);

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}