/*
 * @Date: 2022-12-12 14:42:02
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-29 18:48:40
 * @FilePath: /ztoSupplyPlat/src/plugins/vant.ts
 */
/** 
 *  @author TalkTao
 * @description  按需引入Vant
*/ 
import { Row, Col, Button, Tabbar, TabbarItem, Sticky, NavBar, Icon, Search, Tag, RadioGroup, Radio,
	ConfigProvider, CheckboxGroup, Checkbox,
	DropdownMenu, DropdownItem, Image, Lazyload, Tabs, Tab, Toast, Field, Cell, CellGroup, Form, List  } from 'vant'
const pluginsVant = [
	ConfigProvider,
	RadioGroup,
	Radio,
	Row,
	Col,
	CheckboxGroup,
	Checkbox,
	Button, 
	Tabbar,
	TabbarItem,
	Sticky,
	NavBar,
	Icon,
	Search,
	DropdownMenu,
	DropdownItem,
	Image,
	Lazyload,
	Tabs,
	Tab,
	Tag,
	Toast,
	Field,
	Cell,
	CellGroup,
	Form,
	List 
]
export const vantPlugins = {
  	install: function(vm) {
    	pluginsVant.forEach((item:any) => {
      	vm.component(item.name, item);
    	});
  	}
};