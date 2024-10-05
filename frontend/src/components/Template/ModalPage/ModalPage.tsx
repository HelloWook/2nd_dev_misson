import Modal from '@/components/common/Modal/Modal'
import useModal from '@/hooks/useModal'
import React from 'react'

const ModalPage = () => {
  const { isModalOpen, closeModal } = useModal()
  return <div>{isModalOpen && <Modal closeModal={closeModal} />}</div>
}

export default ModalPage
