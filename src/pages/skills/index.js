import React from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, skill } from "../../content_option";
import { MDBTabs, MDBTabsItem } from 'mdb-react-ui-kit';

export const Skills = () => {
  return (
    <HelmetProvider>
      <div className="overflow-hidden" style={{ height: "100vh" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skills | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Container className="About-header d-flex justify-content-center align-items-center mx-auto p-2 m-2 h-100">
          <Row className="sec_sp">
            <Col lg="7" className="d-flex justify-content-center align-items-center h-100 mx-auto flex-wrap text-center">
              {skill.map((data, i) => {
                return (
                  <div key={i} className=' mx-auto'>
                    <h3 className="progress-title btn btn-static">{data.name}</h3>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </HelmetProvider>
  );
};
