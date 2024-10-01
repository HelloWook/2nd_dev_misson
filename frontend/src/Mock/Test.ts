export const TestUrl: string = 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426'

interface Post {
  postTitle: string
  postSummary: string
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

export const TestPerformanceArray: Post[] = [
  { postTitle: ' 반갑습니다.', postSummary: '즐겁다.' },
  { postTitle: ' 반갑습니다.', postSummary: '즐겁다.' },
  { postTitle: ' 반갑습니다.', postSummary: '즐겁다.' },
  { postTitle: ' 반갑습니다.', postSummary: '즐겁다.' },
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
