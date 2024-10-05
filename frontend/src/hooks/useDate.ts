import React, { useState } from 'react'

const useDate = () => {
  const [date, setDate] = useState<string>('')

  function changedate(date: string) {
    setDate(date)
  }

  return { date, changedate }
}

export default useDate
