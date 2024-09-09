export const useDefaultValue = () => {
  const defaultFormat = [
    'YYYY/MM/DD(ddd) HH:mm:ss',
    'YYYY/MM/DD HH:mm:ss',
    'MM/DD HH:mm'
  ]
  const defaultSize: Exclude<ClockConfig['size'], undefined>[] = [
    '720',
    '1080',
    '2160'
  ]
  const defaultPosition: Exclude<ClockConfig['position'], undefined>[] = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]
  return {
    defaultFormat,
    defaultSize,
    defaultPosition
  }
}