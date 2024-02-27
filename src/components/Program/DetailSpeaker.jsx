import { useTranslation } from "react-i18next";
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

export function DetailSpeaker (props) {
  const { i18n, t } = useTranslation();
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <Row> 
          <Col md={6} className='my-auto'>
            <div className='position-relative'>
              <img src={props?.speaker?.avatar} className='w-100' alt={props?.speaker.name} />
              <div className='info_speakers text-center'>
                <h2>{props?.speaker?.name}</h2>
                <p className='m-0'>{props?.speaker.rol}</p>
                <small>{i18n.language === "en" ? props?.speaker?.role_en : props?.speaker?.role_es}</small>
              </div>
            </div>
          </Col>
          <Col md={6} className='my-auto'>
            <h5 className='fw-bold text-danger'>{t("program.sub_title")} </h5>
            <p>{i18n.language === "en" ? props?.speaker?.conference_en : props?.speaker?.conference_es}</p>
            <p className="text-position">{i18n.language === "en" ? props?.speaker?.resume_en : props?.speaker?.resume_es}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}
