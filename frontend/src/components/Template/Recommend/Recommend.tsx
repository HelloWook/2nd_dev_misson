import Modal from '@/components/common/Modal/Modal'
import RecommendSection from '@/components/common/RecommedSection/RecommedSection'
import useGetPerformance from '@/hooks/useGetPerfromance'

const Recommend = () => {
  const storedGenres = localStorage.getItem('selectedGenres')
  const parsedGenres = storedGenres ? JSON.parse(storedGenres) : null

  const { Performances: firstGenrePerfomance } = useGetPerformance({
    rows: 10,
    genreParam: parsedGenres[0],
  })
  const { Performances: secondGenrePerfomance } = useGetPerformance({
    rows: 10,
    genreParam: parsedGenres[1],
  })
  const { Performances: thirdGenrePerfomance } = useGetPerformance({
    rows: 10,
    genreParam: parsedGenres[2],
  })

  return (
    <div>
      <RecommendSection
        firstGenre={parsedGenres[0]}
        secondGenre={parsedGenres[1]}
        thirdGenre={parsedGenres[2]}
        firstGenrePerfomance={firstGenrePerfomance}
        secondGenrePerfomance={secondGenrePerfomance}
        thirdGenrePerfomance={thirdGenrePerfomance}
      />
    </div>
  )
}

export default Recommend
