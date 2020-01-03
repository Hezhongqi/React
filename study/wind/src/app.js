import { hot } from 'react-hot-loader'
import dva from 'dva'
import createLoading from 'dva-loading'
import createBrowserHistory from 'history/createBrowserHistory'
import { withProvider } from '@ali/wind-intl'
import { register } from '@ali/wind-rc-region'
import Router from './routes'
import instanceList from './models/instanceList'
import instanceInfo from './models/instanceInfo'
import cpuMonitor from './models/cpuMonitor'
import './styles/index.less'

const app = dva({
  history: createBrowserHistory(),
})

app.use(createLoading())
app.use(register(app))

app.model(instanceList)
app.model(instanceInfo)
app.model(cpuMonitor)

app.router(Router)

const OriginApp = withProvider()(app.start())
const App = process.env.NODE_ENV === 'development' ?
  hot(module)(OriginApp) :
  OriginApp

export default App
