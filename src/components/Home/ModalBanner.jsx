import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import './Home.css'
import { Button } from 'bootstrap'
import { Container } from 'react-bootstrap'

export function ModalBanner() {
  const [modalShow, setModalShow] = useState(true)
  const handleClose = () => setShow(false);

  return (
    <div className=''>
        <Modal
          show={modalShow}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          onHide={() => setModalShow(false)}
          className='container-banner'
        >
          <Modal.Body className='m-0 p-0'>
            <Link to='/conference-program'>
              <img src="/banner_keynotes.webp" alt="conferencias solar storage" width='100%' onClick={() => setModalShow(false)} />
            </Link>
          </Modal.Body>
        </Modal>
    </div>
  )
}
