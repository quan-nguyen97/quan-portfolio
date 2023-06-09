import React from 'react';
import Section from '../../components/section/Section';
import { Col, Row } from 'react-bootstrap';
import InfoBox from './InfoBox';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import './Contact.scss';

const Contact = () => {
  return (
    <Section
      id="contact"
      header="Contact"
      title="Contact me"
      className="contact"
    >
      <Row className="mt-2">
        <Col>
          <InfoBox
            iconName="Envelope"
            title="Email me"
            content={
              <p>
                <a href="mailto:hquan.nguyen1997@gmail.com">
                  hquan.nguyen1997@gmail.com
                </a>
              </p>
            }
          />
        </Col>
        <Col>
          <InfoBox
            iconName="Share"
            title="Social Profiles"
            content={
              <div className="social-links">
                <a href="https://github.com/quan-nguyen97" target="_blank">
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/hong-quan-nguyen-a5333017b/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            }
          />
        </Col>
      </Row>
    </Section>
  );
};

export default Contact;
