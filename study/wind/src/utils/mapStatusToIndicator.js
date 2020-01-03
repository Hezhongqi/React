import { forOwn } from 'lodash'

const mapStatusToIndicator = (statusMap, typeMap, labelMap) => {
  const result = {}
  forOwn(statusMap, (value) => {
    result[value] = {
      type: typeMap[value],
      label: labelMap[value],
    }
  })

  return result
}

export default mapStatusToIndicator
