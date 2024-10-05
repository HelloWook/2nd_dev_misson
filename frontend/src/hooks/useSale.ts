import React, { useState } from 'react'

const useSale = () => {
  const [sale, setSale] = useState<string>('')

  function changeSale(isSlale: string) {
    setSale(isSlale)
  }

  return { sale, changeSale }
}

export default useSale
