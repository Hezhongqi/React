import createService from '../../utils/createService'

export const getInstance = createService('DescribeInstance')

export const getInstanceExtra = createService('DescribeInstanceExtra')

export const deleteInstances = createService('DeleteInstance')

export const createInstance = createService('CreateInstance')
