export type ClockConfig = {
  format?: string
  size?: '720' | '1080' | '2160'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  font: 'Martian' | 'Roboto'
}

export const useClockSettings = () => {
  const query = useRoute().query

  const format: Ref<ClockConfig['format']> = ref(query.format as ClockConfig['format'] ?? 'YYYY/MM/DD(ddd) HH:mm:ss')
  const size: Ref<ClockConfig['size']> = ref(query.size as ClockConfig['size'] ?? '1080')
  const position: Ref<ClockConfig['position']> = ref(query.position as ClockConfig['position'] ?? 'bottom-right')
  const font: Ref<ClockConfig['font']> = ref(query.font as ClockConfig['font'] ?? 'Roboto')

  return {
    format,
    size,
    position,
    font,
  }
}
