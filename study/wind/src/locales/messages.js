/* eslint-disable quote-props, semi, comma-dangle */

// 如果生产环境需要接入OneConsole, 请勿修改或删除对于下面公共变量的引用
// - ALIYUN_WIND_MESSAGE
// - ALIYUN_CONSOLE_MESSAGE
// 如果需要在dev环境模拟生产环境的输出,
// 首先确保美杜莎(http://mcms-portal.alibaba-inc.com/)的项目仓库已被创建,
// 如VPC的美杜莎项目:
// - group: aliyun
// - name: vpcnext-console-aliyun-com
// 请在.windrc中找到intl配置字段并增加如下的配置:
// "intl": {
//   "locale": "zh-CN",
//   "products": [
//     {
//       "group": "aliyun",
//       "name": "vpcnext-console-aliyun-com",
//       "identifier": "ALIYUN_CONSOLE_MESSAGE"
//     },
//     {
//       "group": "aliyun",
//       "name": "wind",
//       "identifier": "ALIYUN_WIND_MESSAGE"
//     }
//   ]
// }
// 使用如上配置后, 重新启动dev开发调试服务器(def dev),
// 将会在上述的公共变量中输出对应仓库的字典配置
export default {
  //
  // 下面的这些文案只是示例, 你可以在实际项目中删除掉
  //
  'ui.menu.instance.title': '实例列表',
  'ui.menu.instance.detail.title': '实例详情',
  'ui.menu.monitor.title': '监控日志',
  'ui.table.column.operator.title': '操作',
  'ui.table.column.operator.detail': '详情',
  'ui.table.column.operator.edit': '编辑',
  'ui.table.column.operator.manage': '管理',
  'ui.table.column.operator.pause': '暂停',
  'ui.table.column.operator.release': '释放',
  'instance.prop.create_time.label': '创建时间',
  'instance.prop.status.label': '状态',
  'instance.info.base.title': '基本信息',
  'instance.prop.id.label': '实例ID',
  'instance.prop.name.label': '实例名称',
  'instance.prop.address.label': 'IP地址',
  'instance.action.edit.title': '编辑实例',
  'instance.action.create.title': '创建新实例',
  'instance.form.edit.name.error.required': '实例名称不允许为空',
  'instance.action.release.title': '释放实例',
  'instance.action.release.confirm': '确认要释放 {id} 吗',
  'ui.button.ok': '确定',
  'ui.button.cancel': '取消',
  'monitor.cpu.title': 'CPU负载',
  ...(window.ALIYUN_WIND_MESSAGE || {}),
  ...(window.ALIYUN_CONSOLE_I18N_MESSAGE || {})
};
