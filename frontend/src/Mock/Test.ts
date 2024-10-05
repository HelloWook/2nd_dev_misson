import { BoxOffice } from '@/types/types'
import { RecommendPerformance } from './../types/types'
export const TestUrl: string = 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426'
interface EventInfoProps {
  title: string
  date: string
  src: string
  rate: string
  viewTime: string
  actor: string
  price: string
  performanceTime: string
  ticketLink: {
    relatenm: string
    relateurl: string
  }
}

interface Performance {
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

interface postInfo {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
}

interface recommend {
  title: string
  posts: postInfo[]
}

interface Rank {
  RankTitle: string
  RankSummary: string
  RankDate: string
  src: string
}

interface RankProps {
  Ranks: Rank[]
}

export const TestPerformanceArray: Performance[] = [
  {
    area: '경상남도',
    fcltynm: '남명아트홀',
    genrenm: '서양음악(클래식)',
    mt20id: 'PF249478',
    openrun: 'N',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249478_240923_104635.jpeg',
    prfnm: '애니메이션 오페라 콘서트 [김해]',
    prfpdfrom: '2024.09.21',
    prfpdto: '2024.12.21',
    prfstate: '공연중',
  },
  {
    area: '경상남도',
    fcltynm: '남명아트홀',
    genrenm: '서양음악(클래식)',
    mt20id: 'PF249478',
    openrun: 'N',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249478_240923_104635.jpeg',
    prfnm: '애니메이션 오페라 콘서트 [김해]',
    prfpdfrom: '2024.09.21',
    prfpdto: '2024.12.21',
    prfstate: '공연중',
  },
  {
    area: '경상남도',
    fcltynm: '남명아트홀',
    genrenm: '서양음악(클래식)',
    mt20id: 'PF249478',
    openrun: 'N',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249478_240923_104635.jpeg',
    prfnm: '애니메이션 오페라 콘서트 [김해]',
    prfpdfrom: '2024.09.21',
    prfpdto: '2024.12.21',
    prfstate: '공연중',
  },
  {
    area: '경상남도',
    fcltynm: '남명아트홀',
    genrenm: '서양음악(클래식)',
    mt20id: 'PF249478',
    openrun: 'N',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249478_240923_104635.jpeg',
    prfnm: '애니메이션 오페라 콘서트 [김해]',
    prfpdfrom: '2024.09.21',
    prfpdto: '2024.12.21',
    prfstate: '공연중',
  },
]

export const testRecommends: recommend[] = [
  {
    title: '추천 공연 1',
    posts: [
      { SearchPostTitle: '공연 1', SearchPostLocation: '서울', SearchPostDate: '2024-10-01' },
      { SearchPostTitle: '공연 2', SearchPostLocation: '부산', SearchPostDate: '2024-11-05' },
      { SearchPostTitle: '공연 3', SearchPostLocation: '대전', SearchPostDate: '2024-12-10' },
      { SearchPostTitle: '공연 3', SearchPostLocation: '대전', SearchPostDate: '2024-12-10' },
      { SearchPostTitle: '공연 3', SearchPostLocation: '대전', SearchPostDate: '2024-12-10' },
    ],
  },
  {
    title: '추천 공연 2',
    posts: [
      { SearchPostTitle: '공연 4', SearchPostLocation: '인천', SearchPostDate: '2024-12-12' },
      { SearchPostTitle: '공연 5', SearchPostLocation: '대구', SearchPostDate: '2024-11-25' },
      { SearchPostTitle: '공연 6', SearchPostLocation: '광주', SearchPostDate: '2024-11-30' },
    ],
  },
  {
    title: '추천 공연 3',
    posts: [
      { SearchPostTitle: '공연 7', SearchPostLocation: '제주', SearchPostDate: '2024-12-01' },
      { SearchPostTitle: '공연 8', SearchPostLocation: '수원', SearchPostDate: '2024-12-20' },
      { SearchPostTitle: '공연 9', SearchPostLocation: '강릉', SearchPostDate: '2024-12-30' },
    ],
  },
]

export const tesImgUrlArray: string[] = [TestUrl, TestUrl, TestUrl, TestUrl]

export const testRank: Rank[] = [
  {
    RankTitle: '뮤지컬 공연',
    RankSummary: '2024년 최고의 뮤지컬 공연입니다.',
    RankDate: '2024-10-01',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '콘서트',
    RankSummary: '최고의 가수들이 출연하는 콘서트!',
    RankDate: '2024-10-05',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '스포츠 경기',
    RankSummary: '뜨거운 열기 속에서 진행되는 스포츠 경기입니다.',
    RankDate: '2024-10-10',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '전시/행사',
    RankSummary: '예술 작품과 다양한 행사를 만나보세요.',
    RankDate: '2024-10-15',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '클래식 공연',
    RankSummary: '아름다운 클래식 음악 공연입니다.',
    RankDate: '2024-10-20',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '아동/가족 연극',
    RankSummary: '가족과 함께 즐길 수 있는 연극입니다.',
    RankDate: '2024-10-25',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '독립 영화제',
    RankSummary: '독립 영화들을 감상할 수 있는 특별한 영화제입니다.',
    RankDate: '2024-11-01',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '디지털 아트 전시',
    RankSummary: '최신 디지털 아트를 만나보세요.',
    RankDate: '2024-11-05',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '팝업 스토어',
    RankSummary: '유명 브랜드의 팝업 스토어가 열립니다.',
    RankDate: '2024-11-10',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '연극 페스티벌',
    RankSummary: '다양한 연극을 한 곳에서 볼 수 있는 페스티벌.',
    RankDate: '2024-11-15',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '현대 미술 전시',
    RankSummary: '세계적인 현대 미술 작품들이 전시됩니다.',
    RankDate: '2024-11-20',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
  {
    RankTitle: '국제 오페라 공연',
    RankSummary: '세계적인 성악가들의 오페라 공연입니다.',
    RankDate: '2024-11-25',
    src: 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426',
  },
]

export const testEventInfo: EventInfoProps = {
  title: '애니메이션 오페라 콘서트 [김해]',
  date: '2024.09.21 ~ 2024.12.21 남명아트홀',
  src: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249478_240923_104635.jpeg',
  rate: '전체 관람가',
  viewTime: '1시간',
  actor: '윤보영, 박예은, 김성',
  price: '전석 20,000원',
  performanceTime: '토요일(17:00)',
  ticketLink: {
    relatenm: '즐겁다',
    relateurl: 'https://booking.naver.com/booking/12/bizes/497531',
  },
}

export const testRecommendPerformanceData: RecommendPerformance[] = [
  {
    mt20id: 'PF249876',
    prfnm: '베일의 바다',
    prfpdfrom: '2024-09-27',
    prfpdto: '2024-10-18',
    fcltynm: '얼굴박물관 [경기 광주]',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249876_240926_112820.png',
    genrenm: '연극',
    prfstate: '공연중',
    openrun: 'N',
    area: '경기도',
  },
  {
    mt20id: 'PF248824',
    prfnm: '당신은 지금 바비레따에 살고 있군요 Ver.2',
    prfpdfrom: '2024-09-24',
    prfpdto: '2024-10-15',
    fcltynm: '남산골한옥마을',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF248824_240910_165230.jpg',
    genrenm: '무용',
    prfstate: '공연중',
    openrun: 'N',
    area: '서울특별시',
  },
  {
    mt20id: 'PF249478',
    prfnm: '애니메이션 오페라 콘서트 [김해]',
    prfpdfrom: '2024-09-21',
    prfpdto: '2024-12-21',
    fcltynm: '남명아트홀',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249478_240923_104635.jpeg',
    genrenm: '서양음악(클래식)',
    prfstate: '공연중',
    openrun: 'N',
    area: '경상남도',
  },
  {
    mt20id: 'PF246647',
    prfnm: '경기국악원, 향기장수 이야기 [용인]',
    prfpdfrom: '2024-09-04',
    prfpdto: '2024-11-06',
    fcltynm: '경기아트센터 경기국악원',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF246647_240809_092628.gif',
    genrenm: '한국음악(국악)',
    prfstate: '공연중',
    openrun: 'N',
    area: '경기도',
  },
  {
    mt20id: 'PF249602',
    prfnm: 'SeAson 박정아의 작업실: 우리의 여름',
    prfpdfrom: '2024-09-30',
    prfpdto: '2024-09-30',
    fcltynm: '소극장 선물 1관',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249602_240923_185935.png',
    genrenm: '대중음악',
    prfstate: '공연완료',
    openrun: 'N',
    area: '서울특별시',
  },
  {
    mt20id: 'PF250164',
    prfnm: '문학주간 2024',
    prfpdfrom: '2024-09-27',
    prfpdto: '2024-10-01',
    fcltynm: '아르코예술극장',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF250164_240930_145119.jpg',
    genrenm: '복합',
    prfstate: '공연완료',
    openrun: 'N',
    area: '서울특별시',
  },
  {
    mt20id: 'PF249581',
    prfnm: '할로윈매직쇼: 흑마술사의 비밀 [부산]',
    prfpdfrom: '2024-09-29',
    prfpdto: '2024-10-27',
    fcltynm: '초록마술극장',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249581_240923_164351.jpg',
    genrenm: '서커스/마술',
    prfstate: '공연중',
    openrun: 'N',
    area: '부산광역시',
  },
  {
    mt20id: 'PF249686',
    prfnm: '엄지공주 [대전]',
    prfpdfrom: '2024-09-26',
    prfpdto: '2024-10-27',
    fcltynm: '조이마루아트홀 (복합문화공간 플랜에이)',
    poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF249686_240924_151738.png',
    genrenm: '뮤지컬',
    prfstate: '공연중',
    openrun: 'N',
    area: '대전광역시',
  },
]

export const boxOfficeData: BoxOffice[] = [
  {
    mt20id: 'PF123456',
    prfnm: 'The Phantom of the Opera',
    prfpd: '20230101 - 20231231',
    prfpdfrom: '2023-01-01',
    prfpdto: '2023-12-31',
    fcltynm: 'Seoul Arts Center',
    seatcnt: 1500,
    poster: 'https://example.com/poster1.jpg',
    genrenm: 'Musical',
    prfdtcnt: 100,
    area: 'Seoul',
    rnum: 1,
  },
  {
    mt20id: 'PF654321',
    prfnm: 'Hamlet',
    prfpd: '20230501 - 20230815',
    prfpdfrom: '2023-05-01',
    prfpdto: '2023-08-15',
    fcltynm: 'Busan Opera House',
    seatcnt: 800,
    poster: 'https://example.com/poster2.jpg',
    genrenm: 'Play',
    prfdtcnt: 45,
    area: 'Busan',
    rnum: 2,
  },
  {
    mt20id: 'PF987654',
    prfnm: 'Swan Lake',
    prfpd: '20230910 - 20231130',
    prfpdfrom: '2023-09-10',
    prfpdto: '2023-11-30',
    fcltynm: 'Daegu Concert Hall',
    seatcnt: 1200,
    poster: 'https://example.com/poster3.jpg',
    genrenm: 'Ballet',
    prfdtcnt: 60,
    area: 'Daegu',
    rnum: 3,
  },
]
