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
