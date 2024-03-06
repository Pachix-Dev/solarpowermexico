
import React, { useState } from 'react'
import { Button, Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { programSSM } from "../../constans_program";
import { speakers } from '../../constans_speakers'
import { useTranslation } from "react-i18next";
import "../Program/Program.css";
import { DetailSpeaker } from '../Program/DetailSpeaker';
import OrderConferences from '../Program/OrderConferences';


export function AcademicProgram() {
    const { i18n, t } = useTranslation();
    const [programSolar, setPrograms] = useState(programSSM.stage_1)
    const [show, setContent] = useState()

    const [modalShow, setModalShow] = useState(false)
    const [detailSpeaker, setDetailSpeaker] = useState({})

    const handleModal2 = (speaker) => {
        setDetailSpeaker(speaker)
        setModalShow(true)
    }

    return (
        <>
            <div className='program-solar py-5'>
                <h1 className='title-speakers fw-bold text-uppercase text-center text-light mb-5 pb-5'>{t("program.title_2")}</h1>
                <Container className=''>
                    <Nav variant='tabs' defaultActiveKey='#day1'>
                        <Nav.Item>
                            <Nav.Link href='#day1' onClick={() => setPrograms(programSSM.stage_1)}>
                                <h4 className='text-light'>Enlightenment Area</h4>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#day2' onClick={() => setPrograms(programSSM.stage_2)}>
                                <h4 className='text-light'>Educational Area </h4>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#day3' onClick={() => setPrograms(programSSM.stage_3)}>
                                <h4 className='text-light'>Installer Zone</h4>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tabs
                        defaultActiveKey='day1'
                        id='fill-tab-example'
                        className='mb-3 pt-5'
                    >
                        <Tab
                            eventKey='day1'
                            title={
                                <>
                                    <strong>{t('program.day')} 1<br />
                                        {t('program.day_1')}, 17 {t('program.month')}
                                    </strong>
                                </>
                            }
                        >
                            {programSolar?.april_17.map((program, index) => {
                                return (
                                    <Row className="align-items-start justify-content-center program-date-item text-white">
                                        <Col lg={2} xs={12} md={3} className="d-flex align-items-center">
                                            <p className='d-flex'>
                                                <svg width={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <spam className="fs-5 ms-1">
                                                    <strong>{program.hour}</strong><br />
                                                    {program.duration}
                                                </spam>

                                            </p>
                                        </Col>
                                        <Col lg={9} xs={12} md={9}>
                                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? program?.title_en : program?.title}</p>
                                            <p className='fs-5'>{program.name}</p>
                                            <p className='fs-5 fw-bold'>{program.speakers} <br /><span className='fw-normal fst-italic'>{i18n.language === 'en' ? program?.position_en : program?.position}</span></p>
                                            <p className='text-position'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                                            <div className='img-responsive'>
                                                {
                                                    program.avatar === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Tab>
                        <Tab
                            eventKey='day2'
                            title={
                                <>
                                    <strong>{t('program.day')} 2<br />
                                        {t('program.day_2')}, 18 {t('program.month')}
                                    </strong>
                                </>
                            }
                        >
                            {programSolar?.april_18.map((program, index) => {
                                return (
                                    <Row className="align-items-center program-date-item text-white">
                                        <Col lg={2} xs={12} md={3} className="d-flex align-items-center">
                                            <p>
                                                <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {program.duration} <strong>{program.hour}</strong>
                                            </p>
                                        </Col>
                                        <Col lg={9} xs={12} md={9}>
                                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? program?.title_en : program?.title}</p>
                                            <p className='fs-5'>{program.name}</p>
                                            <p className='fs-5 fw-bold'>{program.speakers} <br /><span className='fw-normal fst-italic'>{i18n.language === 'en' ? program?.position_en : program?.position}</span></p>
                                            <p className='text-position'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                                            <div className='img-responsive'>
                                                {
                                                    program.avatar === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Tab>
                        <Tab
                            eventKey='day3'
                            title={
                                <>
                                    <strong>{t('program.day')} 3<br />
                                        {t('program.day_3')}, 19 {t('program.month')}
                                    </strong>
                                </>
                            }
                        >
                            {programSolar?.april_19.map((program, index) => {
                                return (
                                    <Row className="align-items-center program-date-item text-white">
                                        <Col lg={2} xs={12} md={3} className="d-flex align-items-center">
                                            <p>
                                                <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {program.duration} <strong>{program.hour}</strong>
                                            </p>
                                        </Col>
                                        <Col lg={9} xs={12} md={9}>
                                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? program?.title_en : program?.title}</p>
                                            <p className='fs-5'>{program.name}</p>
                                            <p className='fs-5 fw-bold'>{program.speakers} <br /><span className='fw-normal fst-italic'>{i18n.language === 'en' ? program?.position_en : program?.position}</span></p>
                                            <p className='text-position'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                                            <div className='img-responsive'>
                                                {
                                                    program.avatar === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </>
    )
}