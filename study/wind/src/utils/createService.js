import { createService } from '@ali/wind-service'

// one-console 的产品名称,
// 在初始化的时候我们使用了统一的 `wind-demo` 作为产品名称以便我们的示例可以正常运行.
// 在实际项目开发中, 请将该变量替换成你自己项目的 one-console 产品名称

// const oneConsoleProductName = '<%= productName %>'
const oneConsoleProductName = 'wind-demo'

export default action => createService(oneConsoleProductName, action)
