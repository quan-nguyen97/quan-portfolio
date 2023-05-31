import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

interface InfoItemProps {
  label: string;
  value: string;
  type?: 'string' | 'email';
}

const InfoItem = ({ label, value, type }: InfoItemProps) => {
  return (
    <ul>
      <li>
        <ChevronRight />
        <strong>{label}:</strong>
        {type === 'email' ? (
          <a href={`mailto:${value}`}>{value}</a>
        ) : (
          <span>{value}</span>
        )}
      </li>
    </ul>
  );
};

const PersonalInfo = () => {
  return (
    <Row>
      <Col lg={4}>
        <Image
          src="/src/assets/img/quan_cv_photo.png"
          style={{ width: '100%' }}
        />
      </Col>
      <Col lg={8} className="content">
        <h3>Software Engineer</h3>
        <p className="fst-italic">
          I'm a Software Engineer, currently based in Berlin. As all developers,
          I love code and love helping people in digitalization their business.
        </p>
        <Row>
          <Col lg={6}>
            <InfoItem label="Fullname" value="Hong Quan, Nguyen" />
            <InfoItem label="Residence" value="Berlin, Germany" />
          </Col>
          <Col lg={6}>
            <InfoItem
              label="University"
              value="University of Applied Science Berlin"
            />
            <InfoItem
              type="email"
              label="Email"
              value="hquan.nguyen1997@gmail.com"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PersonalInfo;
