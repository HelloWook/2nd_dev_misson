import defaultApi from '@/api/apis/default'

const api = defaultApi()

/**
 * 공연과 관련된 정보를 불러옵니다.
 *
 * @param stdate  공연 시작 날짜
 * @param eddate  공연 종료 날짜
 * @param openrun 오픈 런 유무를 불러옵니다
 */
export const getPerformance = async (params: {
  stdate: string
  eddate: string
  rows: number
  openRun?: string
  genre?: string
}) => {
  try {
    const response = await api.get('/performances', {
      params: {
        stdate: params.stdate,
        eddate: params.eddate,
        rows: params.rows,
        ...(params.openRun && { openrun: params.openRun }),
        ...(params.genre && { shcate: params.genre }),
        cpage: 1,
      },
    })
    return response.data
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다.:', error)
    throw error
  }
}
