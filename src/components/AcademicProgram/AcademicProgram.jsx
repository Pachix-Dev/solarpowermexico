
import React, { useState } from 'react'
import { Button, Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { programSSM } from "../../constans_program";
import { speakersEdu } from '../../constans_speakers'
import { useTranslation } from "react-i18next";
import "../Program/Program.css";
import { DetailSpeaker } from '../Program/DetailSpeaker';


export function AcademicProgram() {
    const { i18n, t } = useTranslation();
    const [programSolar, setPrograms] = useState(programSSM.stage_1)
    const [detailSpeaker, setDetailSpeaker] = useState({})


    const [show, setContent] = useState()
    const [modalShow, setModalShow] = useState(false)

    const handleModal2 = (speaker) => {
        setDetailSpeaker(speaker)
        setModalShow(true)
    }

    const handleModal = (id) => {
        const speaker = speakersEdu.find(speaker => speaker.id === id)
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
                                        {t('program.day_1')}
                                    </strong>
                                </>
                            }
                        >
                            {programSolar?.april_17.map((program, index) => {
                                return (
                                    <Row className="align-items-start justify-content-center program-date-item text-white">
                                        <Col lg={3} xs={12} md={3} className="d-flex align-items-center">
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
                                        <Col lg={8} xs={12} md={9}>
                                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? program?.title_en : program?.title}</p>
                                            <p className='fs-5 text-uppercase fw-bolder fst-italic'>{program.company}</p>
                                            <p className='text-position fs-5'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                                            <p className='fs-5' dangerouslySetInnerHTML={{ __html: i18n.language === 'en' ? program?.infoWorkshop_en : program?.infoWorkshop }}></p>
                                            <a href="https://www.ibesalliance.org/events/energy-storage-masterclass-innovative-business-strategies-cutting-edge-technologies-and-intelligent-systems" target='_blank' className='fs-4 fw-semibold link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' >
                                                {i18n.language === 'en' ? program?.btnInfoWorkshop_en : program?.btnInfoWorkshop}
                                            </a>
                                            <p className='fs-5 fw-bold'>{program.speakers} <br /><span className='fw-normal fst-italic'>{i18n.language === 'en' ? program?.position_en : program?.position}</span></p>
                                            <strong></strong>
                                            <div className='img-responsive'>
                                                {
                                                    program.avatars[0] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[0])} src={program.avatars[0]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[1] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[1])} src={program.avatars[1]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[2] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[2])} src={program.avatars[2]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[3] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[3])} src={program.avatars[3]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[4] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[4])} src={program.avatars[4]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[5] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[5])} src={program.avatars[5]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[6] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[6])} src={program.avatars[6]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[7] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[7])} src={program.avatars[7]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[8] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[8])} src={program.avatars[8]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
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
                                        {t('program.day_2')}
                                    </strong>
                                </>
                            }
                        >
                            {programSolar?.april_18.map((program, index) => {
                                return (
                                    <Row className="align-items-start justify-content-center program-date-item text-white">
                                        <Col lg={3} xs={12} md={3} className="d-flex align-items-center">
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
                                        <Col lg={8} xs={12} md={9}>
                                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? program?.title_en : program?.title}</p>
                                            <p className='fs-5 text-uppercase fw-bolder fst-italic'>{program.company}</p>
                                            <p className='text-position'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                                            <p className='fs-5 fw-bold'>{program.speakers} <br /><span className='fw-normal fst-italic'>{i18n.language === 'en' ? program?.position_en : program?.position}</span></p>
                                            <div className='img-responsive'>
                                                {
                                                    program.avatars[0] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[0])} src={program.avatars[0]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[1] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[1])} src={program.avatars[1]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[2] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[2])} src={program.avatars[2]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
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
                                        {t('program.day_3')}
                                    </strong>
                                </>
                            }
                        >
                            {programSolar?.april_19.map((program, index) => {
                                return (
                                    <Row className="align-items-start justify-content-center program-date-item text-white">
                                        <Col lg={3} xs={12} md={3} className="d-flex align-items-center">
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
                                        <Col lg={8} xs={12} md={9}>
                                            <p className='text-start text-uppercase fs-2 fw-bold text-light'>{i18n.language === 'en' ? program?.title_en : program?.title}</p>
                                            <p className='fs-5 text-uppercase fw-bolder fst-italic'>{program.company}</p>                                            <p className='text-position'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                                            <p className='fs-5 fw-bold'>{program.speakers} <br /><span className='fw-normal fst-italic'>{i18n.language === 'en' ? program?.position_en : program?.position}</span></p>
                                            <div className='img-responsive'>
                                                {
                                                    program.avatars[0] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[0])} src={program.avatars[0]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[1] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[1])} src={program.avatars[1]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                                {
                                                    program.avatars[2] === ''
                                                        ? ''
                                                        : <img onClick={() => handleModal(program?.id[2])} src={program.avatars[2]} width={100} height={100} className='rounded-circle program-date-avatar ms-2' alt='speaker' />
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Tab>
                    </Tabs>
                </Container>
                <Container className="pt-4">
                    <h2 className="mt-5 text-light text-center" id="ponentes">
                        {" "}
                        {t("program.subt_title_1")}{" "}
                    </h2>
                    <p className="title-speakers fw-bold text-uppercase text-center text-light"> {t("program.title_s")}</p>
                    <div className="mt-5 pb-5 program-wrapper-speakers">
                        <div className="container-speaker">
                            {speakersEdu.map((speaker, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleModal2(speaker)}
                                    className="btn-speaker"
                                >
                                    <Row className="d-flex justify-content-center align-items-center">
                                        <Col
                                            lg={6}
                                            md={12}
                                            xs={12}
                                            className="container-img-speaker d-flex align-items-center justify-content-center"
                                        >
                                            <img
                                                src="/speakers/back-speakers.webp"
                                                alt=""
                                                className="p-4 img-fluid img-back-speaker z-1 position-absolute"
                                            />
                                            <img
                                                src={speaker.avatar}
                                                alt={speaker.name}
                                                className="p-4 img-speaker z-2"
                                            />
                                        </Col>
                                        <Col className="info_speakers">
                                            <p className="fs-6">
                                                <span className="fs-4 fw-bolder">{speaker.name}</span>{" "}
                                                <br />
                                                {i18n.language === "en"
                                                    ? speaker?.role_en
                                                    : speaker?.role_es}
                                            </p>
                                        </Col>
                                    </Row>
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
            <DetailSpeaker
                show={modalShow}
                onHide={() => setModalShow(false)}
                speaker={detailSpeaker}
            />
        </>
    )
}