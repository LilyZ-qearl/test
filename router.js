//对router的学习 + 理解

/*
  使用router.push 这个方法 会在history栈里面添加一个新的记录，当用户点击浏览器返回按钮时，会返回到上一页上一个url；
 */
router.push('home');//home 是路由的名字
router.push({ path: '/home' });//  '/home'是路由
router.push({ name: 'user', params: { userId: 122 } });

//带参数 变成/home?type=2
router.push({ path: '/home', query: { type: 2 } });

/*
使用 router.replace 不会向history里面添加新的记录，会替换掉当前的history记录
router.replace(location) === window.history.replaceState;
 */

router.replace({ path: 'home' });

/*
router.go(n)====window.history.go
*/
router.go(1);
router.go(-1);
