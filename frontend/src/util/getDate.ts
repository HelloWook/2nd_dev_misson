/**
 * api 호출에 필요한 포맷으로 변환해줍니다.
 * @param date 포맷을 지정할 날짜
 * @returns 반환된 날짜의 값
 */
const getDate = (date: Date): string => {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}${month}${day}`
}

export default getDate
