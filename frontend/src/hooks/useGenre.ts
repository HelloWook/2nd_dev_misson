import { useState } from 'react'

// 장르 상태를 관리하는 훅
const useGenre = (genreParam: string) => {
  const [genre, setGenre] = useState<string>(genreParam)

  function changeGenre(genreCode: string) {
    setGenre(genreCode)
  }

  return { genre, changeGenre }
}

export default useGenre
