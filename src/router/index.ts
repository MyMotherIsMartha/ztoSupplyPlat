/*
 * @Date: 2022-12-12 14:42:02
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-30 15:30:27
 * @FilePath: /ztoSupplyPlat/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 通过Vite的import.meta.glob()方法实现自动化导入路由
const mainRouterModules = import.meta.glob('../layout/*.vue')
const viewRouterModules = import.meta.glob('../views/**/*.vue')

// 子路由
const childRoutes = Object.keys(viewRouterModules).map((path)=>{	
	const childName = path.match(/\.\.\/views\/(.*)\.vue$/)[1].split('/')[1];
	console.log('childName', childName)
	return {
		path: `/${childName.toLowerCase()}`,
		name: childName,
		component: viewRouterModules[path]
	} 
})

// 根路由
const rootRoutes = Object.keys(mainRouterModules).map((path) => {
    const name = path.match(/\.\.\/layout\/(.*)\.vue$/)[1].toLowerCase();
    const routePath = `/${name}`;
    if (routePath === '/index') {
		return {
			path: '/',
			name,
			redirect: '/login',
			component: mainRouterModules[path],
			children: childRoutes
		};
    } else {
			return {
				path: `/${name.toLowerCase()}`,
				name,
				component: mainRouterModules[path]
			};
		}
})

const routes: Array<RouteRecordRaw> = rootRoutes

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router







