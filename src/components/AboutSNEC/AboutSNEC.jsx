import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function AboutSNEC() {
  const { t } = useTranslation();
  return (
    <section className="mt-5 pt-5 pb-5 bg-secondary-text">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center">
            <p className="fw-bold fs-3">{t("AboutSNEC.title")}</p>
          </Col>
          <Col className="text-center">
            <a href="http://www.snec.org.cn/" target="_blank" rel="noreferrer">
              <img src="/snec-logo-new.webp" alt="repluslogo" height={124} />
            </a>
          </Col>
        </Row>
        <p
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: t("AboutSNEC.description") }}
        />
      </Container>
    </section>
  );
}
