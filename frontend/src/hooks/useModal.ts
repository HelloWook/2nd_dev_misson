import React, { useState } from 'react'

const useModal = () => {
  const isSaved = localStorage.getItem('selectedGenres') !== null ? false : true
  const [isModalOpen, setIsModalOpen] = useState(isSaved)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return { isModalOpen, closeModal }
}

export default useModal
