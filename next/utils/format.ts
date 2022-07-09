import dayjs from 'dayjs'

/**
 * Dateオブジェクトを標準フォーマットに変換
 * @module Utils/Dayjs
 */
export const convertDateFormat = (date: Date) => {
  return dayjs(date).format('YYYY年M月D日')
}

/**
 * Dateオブジェクトを入力フォーマットに変換
 * @module Utils/Dayjs
 */
export const convertDateInputFormat = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD')
}
