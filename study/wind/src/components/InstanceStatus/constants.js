import mapStatusToIndicator from '../../utils/mapStatusToIndicator'

export const Status = {
  INITIALIZING: 0,
  RUNNING: 1,
  WARNING: 2,
  STOPPED: 3,
  DISABLED: 4,
}

export const StatusDisplayName = {
  [Status.INITIALIZING]: '初始化',
  [Status.RUNNING]: '运行中',
  [Status.WARNING]: '有风险',
  [Status.STOPPED]: '已停止',
  [Status.DISABLED]: '不可用',
}

export const StatusIndicatorType = {
  [Status.INITIALIZING]: 'loading',
  [Status.RUNNING]: 'normal',
  [Status.WARNING]: 'warning',
  [Status.STOPPED]: 'error',
  [Status.DISABLED]: 'disabled',
}

export const StatusIndicatorMap = mapStatusToIndicator(
  Status, StatusIndicatorType, StatusDisplayName
)
