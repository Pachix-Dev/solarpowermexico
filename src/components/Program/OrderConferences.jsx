import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { conferencesSSM } from "../../constans_program";
import { useTranslation } from 'react-i18next';
import { DetailSpeaker } from './DetailSpeaker'
import { speakers } from '../../constans_speakers'
import "./Program.css";


function OrderConferences() {
    const { i18n, t } = useTranslation();
    const [modalShow, setModalShow] = useState(false)
    const [conferencesSolar, setPrograms] = useState(conferencesSSM)
    const [detailSpeaker, setDetailSpeaker] = useState({})

    const handleModal = (id) => {
        const speaker = speakers.find(speaker => speaker.id === id)
        setDetailSpeaker(speaker)
        setModalShow(true)
    }

    return (
        <Container className='mt-5'>
            <Tabs
                defaultActiveKey="home"
                id="justify-tab-example"
                className="mb-3 border-bottom border-3 fs-4 fw-bolder"
                justify
            >
                <Tab eventKey="home" title={t('program.day_1')}>
                    {conferencesSolar?.day_1.map((conference, index) => {
                        return (
                            <Row className='border-bottom border-1 text-white py-3'>
                                <Col xs={12} md={4} lg={3}>
                                    <p className='text-start text-uppercase fs-2 fw-bold'>
                                        {conference.timetable}<br />
                                        <span className='text-start text-lowercase fs-5 fw-medium fst-italic text-light'>{conference.duration}</span><br />
                                        <span className='text-start text-uppercase fs-4 fw-medium fst-italic text-light'>{i18n.language === 'en' ? conference?.type_en : conference?.type}</span></p>
                                </Col>
                                <Col xs={12} md={8} lg={9} className='fs-5'>
                                    <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? conference?.title_en : conference?.title}</p>
                                    {/* <p>{i18n.language === 'en' ? conference?.subject : conference?.subject_en}</p> */}
                                    <div>
                                        <Row className='text-left'>
                                            <Col xs={12} md={12} lg={12}>
                                                <p className='fw-bold'>{conference.peakers}<br />
                                                    <span className='fw-normal fst-italic'>{i18n.language === 'en' ? conference.position_en : conference.position}</span></p>
                                            </Col>
                                            <Col xs={12} md={12} lg={12}>
                                                <div className='d-inline-flex img-responsive'>
                                                    {
                                                        conference.avatars[0] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[0])} src={conference.avatars[0]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                    {
                                                        conference.avatars[1] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[1])} src={conference.avatars[1]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                    {
                                                        conference.avatars[2] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[2])} src={conference.avatars[2]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}
                </Tab>
                <Tab eventKey="profile" title={t('program.day_2')}>
                    {conferencesSolar?.day_2.map((conference, index) => {
                        return (
                            <Row className='border-bottom border-1 text-white py-3'>
                                <Col xs={12} md={4} lg={3}>
                                    <p className='text-start text-uppercase fs-2 fw-bold'>
                                        {conference.timetable}<br />
                                        <span className='text-start text-lowercase fs-5 fw-medium fst-italic text-light'>{conference.duration}</span><br />
                                        <span className='text-start text-uppercase fs-4 fw-medium fst-italic text-light'>{i18n.language === 'en' ? conference?.type_en : conference?.type}</span></p>
                                </Col>
                                <Col xs={12} md={8} lg={9} className='fs-5'>
                                    <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? conference?.title_en : conference?.title}</p>
                                    {/* <p>{i18n.language === 'en' ? conference?.subject : conference?.subject_en}</p> */}
                                    <div>
                                        <Row className='text-left'>
                                            <Col xs={12} md={12} lg={12}>
                                                <p className='fw-bold'>{conference.peakers}<br />
                                                    <span className='fw-normal fst-italic'>{i18n.language === 'en' ? conference.position_en : conference.position}</span></p>
                                            </Col>
                                            <Col xs={12} md={12} lg={12}>
                                                <div className='d-inline-flex img-responsive'>
                                                    {
                                                        conference.avatars[0] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[0])} src={conference.avatars[0]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                    {
                                                        conference.avatars[1] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[1])} src={conference.avatars[1]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                    {
                                                        conference.avatars[2] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[2])} src={conference.avatars[2]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}
                </Tab>
                <Tab eventKey="longer-tab" title={t('program.day_3')}>
                    {conferencesSolar?.day_3.map((conference, index) => {
                        return (
                            <Row className='border-bottom border-1 text-white py-3'>
                                <Col xs={12} md={4} lg={3}>
                                    <p className='text-start text-uppercase fs-2 fw-bold'>
                                        {conference.timetable}<br />
                                        <span className='text-start text-lowercase fs-5 fw-medium fst-italic text-light'>{conference.duration}</span><br />
                                        <span className='text-start text-uppercase fs-4 fw-medium fst-italic text-light'>{i18n.language === 'en' ? conference?.type_en : conference?.type}</span></p>
                                </Col>
                                <Col xs={12} md={8} lg={9} className='fs-5'>
                                    <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? conference?.title_en : conference?.title}</p>
                                    {/* <p>{i18n.language === 'en' ? conference?.subject : conference?.subject_en}</p> */}
                                    <div>
                                        <Row className='text-left'>
                                            <Col xs={12} md={12} lg={12}>
                                                <p className='fw-bold'>{conference.peakers}<br />
                                                    <span className='fw-normal fst-italic'>{i18n.language === 'en' ? conference.position_en : conference.position}</span></p>
                                            </Col>
                                            <Col xs={12} md={12} lg={12}>
                                                <div className='d-inline-flex img-responsive'>
                                                    {
                                                        conference.avatars[0] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[0])} src={conference.avatars[0]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                    {
                                                        conference.avatars[1] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[1])} src={conference.avatars[1]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                    {
                                                        conference.avatars[2] === ''
                                                            ? ''
                                                            : <img onClick={() => handleModal(conference?.id[2])} src={conference.avatars[2]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}
                </Tab>
            </Tabs>
            <DetailSpeaker show={modalShow} onHide={() => setModalShow(false)} speaker={detailSpeaker} />
        </Container>
    );
}

export default OrderConferences;