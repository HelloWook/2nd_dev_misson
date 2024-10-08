import { useEffect, useState } from 'react'
import { PerformanceHall } from '@/types/types'

declare global {
  interface Window {
    kakao: any
  }
}

interface MapProps {
  performanceHalls: PerformanceHall[]
}

const Map = ({ performanceHalls }: MapProps) => {
  const [map, setMap] = useState<any>(null)

  useEffect(() => {
    const initializeMap = (latitude: number, longitude: number) => {
      const container = document.getElementById('map')
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 10,
        }

        const mapInstance = new window.kakao.maps.Map(container, options)
        setMap(mapInstance)
      }
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        initializeMap(latitude, longitude)
      },
      () => {
        initializeMap(37.5665, 126.978)
        alert('위치 정보를 가져오는데 실패했습니다.')
      },
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      },
    )
  }, [])

  useEffect(() => {
    if (map && performanceHalls.length > 0) {
      performanceHalls.forEach((hall) => {
        const markerPosition = new window.kakao.maps.LatLng(hall.la, hall.lo)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${hall.fcltynm}</div>`,
        })

        window.kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.open(map, marker)
        })
      })
    }
  }, [map, performanceHalls])

  return (
    <div>
      <div id="map" style={{ width: '1100px', height: '500px', margin: 'auto' }}></div>
    </div>
  )
}

export default Map
