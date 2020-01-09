//测试
import { effects } from 'dva/saga'
import model,{actions,selectors} from '../../../src/models/counter'
const  {effects:modelEffects} = model
describe(`Counter's effects`,()=>{
    it('`persistentInc` should be executed in accordance with the correct process', () => {
        const action = actions.persistentInc()
        const gen = modelEffects.persistentInc(action, effects)
        // 判定是否执行了 persistentInc 相关的 put 操作
        expect(gen.next()).toEqual(
            effects.put(actions.persistentInc())
        )
        // 判定是否执行了 select 操作
        expect(gen.next()).toEqual(
            effects.select(selectors.getValue)
        )
        // 后面的测试用例中仍然是类似的代码，利用描述对象对流程本身进行测试
    })
})