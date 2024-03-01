import React, { useState } from 'react'
import { Button, Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { programSSM } from "../../constans_program";
import { speakers } from '../../constans_speakers'
import { useTranslation } from "react-i18next";
import "./Program.css";
import { DetailSpeaker } from './DetailSpeaker';

export function Program() {
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
      <div className="program-solar">
        <Container className="py-5">
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="show"
                id="justify-tab-example"
                className="fs-3 item-program fw-bolder"
                justify
              >
                <Tab
                  eventKey="show"
                  title={t("program.title_1")}
                  className="item-hijo"
                >
                  {/* AQUÍ VA INFOMRACIÓN DE LOS PONENTES */}
                  <Row>
                    <Col className='text-center text-white py-5' sm={12} md={12} xl={12}>
                      <div className='p-2'>
                        <p className='fs-1 fw-bold' style={{color:'#450151'}}> {t("program.promotion.title")} </p>
                        <p className='fs-3 fw-semibold' dangerouslySetInnerHTML={{ __html: t("program.promotion.preventa") }}></p>
                        <p className='fs-3 fw-semibold' dangerouslySetInnerHTML={{ __html: t("program.promotion.includes") }}></p>
                      </div>
                    </Col>
                    <Col className='text-center d-flex justify-content-center' sm={12} md={12} xl={12}>
                      <div className='btn-buy'>
                        <a href="https://solarstorage.ahmreg.com/getContent.php" className='d-flex justify-content-center align-items-center fw-bold text-decoration-none text-white' target='_blank'>
                          <svg className='mx-2' width="54px" height="54px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="M1.82047 1C1.36734 1 1 1.35728 1 1.79801V2.39948C1 2.84021 1.36734 3.19749 1.82047 3.19749H3.72716C4.03867 3.19749 4.3233 3.36906 4.46192 3.64038L5.4947 5.93251C5.53326 6.00798 5.56364 6.09443 5.62081 6.15194L10.057 16.4429C10.0129 16.4634 9.97056 16.4883 9.93075 16.5176C8.70163 17.4226 7.87009 18.5878 7.87001 19.7604C7.86996 20.4429 8.16289 21.0807 8.75002 21.5212C9.30752 21.9394 10.0364 22.1118 10.8189 22.1118H10.8446C10.336 22.6308 10.0238 23.3336 10.0238 24.1072C10.0238 25.7049 11.3554 27 12.998 27C14.6406 27 15.9722 25.7049 15.9722 24.1072C15.9722 23.3336 15.66 22.6308 15.1513 22.1118H19.0494C18.5408 22.6308 18.2285 23.3336 18.2285 24.1072C18.2285 25.7049 19.5601 27 21.2027 27C22.8454 27 24.177 25.7049 24.177 24.1072C24.177 23.3336 23.8647 22.6308 23.3561 22.1118H23.9718C24.425 22.1118 24.7923 21.7545 24.7923 21.3138V20.9148C24.7923 20.474 24.425 20.1167 23.9718 20.1167H10.8189C10.3192 20.1167 10.0864 20.0041 10.0028 19.9414C9.94878 19.9009 9.92119 19.8618 9.9212 19.7606C9.92122 19.4917 10.1711 18.8708 11.069 18.1827C11.1084 18.1524 11.1453 18.1194 11.1792 18.084C11.2692 18.1089 11.3635 18.1221 11.4601 18.1221H23.9235C24.4248 18.1221 24.8527 17.7696 24.9351 17.2885L26.9858 5.31837C27.09 4.71036 26.6079 4.1569 25.9742 4.1569H7.35431C7.1981 4.1569 7.05618 4.06597 6.9909 3.92405L5.84968 1.44289C5.71106 1.17157 5.42642 1 5.11492 1H1.82047ZM8.47667 6.15194C8.18952 6.15194 7.99591 6.44552 8.10899 6.70946L12.04 15.8846C12.103 16.0317 12.2476 16.1271 12.4076 16.1271H22.7173C22.9122 16.1271 23.0787 15.9867 23.1116 15.7946L24.6834 6.61948C24.7253 6.37513 24.5371 6.15194 24.2892 6.15194H8.47667ZM11.8698 24.1072C11.8698 23.5012 12.3749 23.0099 12.998 23.0099C13.621 23.0099 14.1261 23.5012 14.1261 24.1072C14.1261 24.7132 13.621 25.2045 12.998 25.2045C12.3749 25.2045 11.8698 24.7132 11.8698 24.1072ZM21.2027 23.0099C20.5797 23.0099 20.0746 23.5012 20.0746 24.1072C20.0746 24.7132 20.5797 25.2045 21.2027 25.2045C21.8258 25.2045 22.3309 24.7132 22.3309 24.1072C22.3309 23.5012 21.8258 23.0099 21.2027 23.0099Z" fill="#ffffff" fill-rule="evenodd"></path></g></svg>{t("program.button1")}
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Container className='pt-4'>
                    <h2 className='mt-5 text-light text-center' id='ponentes'> {t("program.subt_title_1")} </h2>
                    <p className='title-speakers fw-bold text-uppercase text-center text-light'>KEYNOTE SPEAKERS</p>
                    <div className='mt-5 pb-5 program-wrapper-speakers'>
                      <div className='container-speaker'>
                        {speakers.map((speaker, index) => (
                          <button key={index} onClick={() => handleModal2(speaker)} className='btn-speaker'>
                            <Row className='d-flex justify-content-center align-items-center '>
                              <Col lg={6} md={12} xs={12} className='container-img-speaker'>
                                <img src="/speakers/back-speakers.webp" alt="" className='p-4 img-back-speaker z-2 position-absolute me-5'/>
                                <img src={speaker.avatar} alt={speaker.name} className='p-4 img-speaker z-3' />
                              </Col>
                              <Col className='info_speakers'>
                                <p className="fs-6"><span className='fs-4 fw-bolder'>{speaker.name}</span> <br />
                                  {i18n.language === "en" ? speaker?.role_en : speaker?.role_es}</p>
                              </Col>
                            </Row>
                          </button>
                        ))}
                      </div>
                    </div>
                    <DetailSpeaker
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      speaker={detailSpeaker}
                    />
                  </Container>
                </Tab>
                <Tab
                  eventKey="longer-tab"
                  title={t("program.title_2")}
                  className="item-hijo text-white"
                >
                  <Container className='mt-5'>
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
                            <Row className="align-items-center program-date-item">
                              <Col lg={2} xs={12} md={3} className="d-flex align-items-center">
                                <p>
                                  <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {program.duration} <strong>{program.hour}</strong>
                                </p>
                              </Col>
                              <Col lg={9} xs={12} md={9}>
                                <h3>{i18n.language === 'en' ? program?.title_en : program?.title}</h3>
                                <p className=''>{program.name}</p>
                                <p>{program.speakers}</p>
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
                            <Row className="align-items-center program-date-item">
                              <Col lg={2} xs={12} md={3} className="d-flex align-items-center">
                                <p>
                                  <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {program.duration} <strong>{program.hour}</strong>
                                </p>
                              </Col>
                              <Col lg={9} xs={12} md={9}>
                                <h3>{i18n.language === 'en' ? program?.title_en : program?.title}</h3>
                                <p className=''>{program.name}</p>
                                <p>{program.speakers}</p>
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
                            <Row className="align-items-center program-date-item">
                              <Col lg={2} xs={12} md={3} className="d-flex align-items-center">
                                <p>
                                  <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {program.duration} <strong>{program.hour}</strong>
                                </p>
                              </Col>
                              <Col lg={9} xs={12} md={9}>
                                <h3>{i18n.language === 'en' ? program?.title_en : program?.title}</h3>
                                <p className=''>{program.name}</p>
                                <p>{program.speakers}</p>
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
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
