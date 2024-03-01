import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

export function ModalBanner() {
  const [modalShow, setModalShow] = useState(true)
  return (
    <Modal
      show={modalShow}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onHide={() => setModalShow(false)}
    >
      <Modal.Body className='m-0 p-0'>
        <Link to='/conference-program'>
          <img src="/banner_keynotes.webp" alt="" width='850' />
        </Link>
      </Modal.Body>
    </Modal>
  )
}
