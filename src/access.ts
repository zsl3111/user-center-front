/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * 用于控制权限，定义属性  canAdmin 在路由的时候可以用于页面是否显示
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.userRole === 1,
  };
}
