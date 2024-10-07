import React, { useEffect, useState } from 'react'
import { Position } from '@/types/types'

const useGetPostion = () => {
  const [position, setPosition] = useState<Position>({ latitude: 33.450701, longitude: 126.570667 })
  const [error, setError] = useState<string | null>('')

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setPosition({ latitude, longitude })
        },
        (err) => {
          setError(err.message)
        },
      )
    } else {
      setError('지도를 불러올 수 없는 환경입니다.')
    }
  }, [])

  return { position }
}

export default useGetPostion
