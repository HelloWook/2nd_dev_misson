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
  command?: string
  openRun?: string
  genre?: string
  sale?: string
  page?: number
}) => {
  try {
    const response = await api.get('/performances', {
      params: {
        stdate: params.stdate,
        eddate: params.eddate,
        rows: params.rows,
        ...(params.openRun && { openrun: params.openRun }),
        ...(params.command && { shprfnm: params.command }),
        ...(params.genre && { shcate: params.genre }),
        ...(params.sale && { prfstate: params.sale }),
        cpage: params.page,
      },
    })
    return response.data
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다.:', error)
    throw error
  }
}

/**
 * 상세 공연 정보를 불러온다
 * @param postId  공연 id
 */
export const getDetailPerformance = async (params: { postId: string }) => {
  try {
    const response = await api.get(`/performance/${[params.postId]}`)
    return response.data
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다.:', error)
    throw error
  }
}

/**
 * 추천 공연을 불러온다.
 */
export const getRecommedPerformance = async () => {
  try {
    const response = await api.get(`/popular-by-genre`)
    return response.data
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다.:', error)
  }
}

export const getBoxOffice = async (params: { dateTtype: string; date: string }) => {
  try {
    const response = await api.get(`/boxoffice`, {
      params: {
        ststype: params.dateTtype,
        date: params.date,
      },
    })
    return response.data
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다.:', error)
  }
}
