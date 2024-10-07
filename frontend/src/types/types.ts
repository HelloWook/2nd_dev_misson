export interface Performance {
  area: string
  fcltynm: string
  genrenm: string
  mt20id: string
  openrun: string
  poster: string
  prfnm: string
  prfpdfrom: string
  prfpdto: string
  prfstate: string
}

export interface PerformanceDetail {
  mt20id: string
  prfnm: string
  prfpdfrom: string
  prfpdto: string
  fcltynm: string
  prfcast: string
  prfcrew: string
  prfruntime: string
  prfage: string
  entrpsnm: string
  pcseguidance: string
  poster: string
  sty: string
  genrenm: string
  prfstate: string
  openrun: string
  styurls: string
  dtguidance: string
  relates: {
    relatenm: string
    relateurl: string
  }
}

export interface CommentInfo {
  id?: string
  user: string
  rating: number
  comment: string
}

export interface RecommendPerformance {
  mt20id: string
  prfnm: string
  prfpdfrom: string
  prfpdto: string
  fcltynm: string
  poster: string
  genrenm: string
  prfstate: string
  openrun: string
  area: string
}

export interface BoxOffice {
  mt20id: string // 공연 ID
  prfnm: string // 공연명
  prfpd: string // 공연 기간 (YYYYMMDD 형식 등)
  prfpdfrom: string // 공연 시작일 (YYYY-MM-DD 형식)
  prfpdto: string // 공연 종료일 (YYYY-MM-DD 형식)
  fcltynm: string // 공연 시설명
  seatcnt: number // 좌석 수
  poster: string // 포스터 이미지 URL
  genrenm: string // 장르명
  prfdtcnt: number // 공연 횟수
  area: string // 지역명
  rnum: number // 고유번호 또는 정렬 번호
}

export interface PerformanceHall {
  fcltynm: string // 시설 이름
  mt10id: string // 시설 ID
  mt13cnt: number // 기타 카운트
  fcltychartr: string // 시설 특성
  sidonm: string // 시도 이름
  gugunnm: string // 구군 이름
  opende: string | null // 개방일자
  seatscale: number // 좌석 수
  telno: string | null // 전화번호
  relateurl: string | null // 관련 URL
  adres: string // 주소
  la: number // 위도
  lo: number // 경도
}

export interface Position {
  latitude: number
  longitude: number
}

export type dateType = 'day' | 'week' | 'month'
