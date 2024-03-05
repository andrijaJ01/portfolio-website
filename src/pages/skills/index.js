import React from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, skill } from "../../content_option";

export const Skills = () => {
  const containerHeight = `calc(100vh - 220px)`; // Calculate the height

  return (
    <HelmetProvider>
      <Container fluid className="About-header d-flex justify-content-center align-items-center p-2 m-2" style={{ height: containerHeight }}>
        <div className="overflow-hidden w-100">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Skills | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="w-100">
            <Col lg="7" className="d-flex mx-auto justify-content-center align-items-center flex-wrap text-center">
              {skill.map((data, i) => {
                return (
                  <div key={i} className='mx-auto'>
                    <h3 className="btn btn-static">{data.name}</h3>
                  </div>
                );
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};
