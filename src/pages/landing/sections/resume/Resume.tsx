import React from 'react';
import Section from '../../../../components/section/Section';
import { Col, Row } from 'react-bootstrap';
import ResumeItem from './ResumeItem';
import workExperiences from '../../../../assets/data/work-experiences.json';
import educations from '../../../../assets/data/education.json';
import './Resume.scss';

const Resume = () => {
  return (
    <Section
      id="resume"
      header="Resume"
      title="My experiences"
      className="resume"
    >
      <Row>
        <Col lg={6}>
          <h3 className="resume-title">Summary</h3>
          <ResumeItem
            milestone="Quan Nguyen"
            time="1997 - now"
            place="Passionated software engineer. With several years of experiences in develop and building software, web application."
            works={['Berlin, Germany', 'hquan.nguyen1997@gmail.com']}
            description=""
          />
          <h3 className="resume-title">Education</h3>
          {educations &&
            educations.map((item) => (
              <ResumeItem
                milestone={item.milestone}
                time={item.time}
                place={item.place}
                works={item.works}
                description={item.description}
              />
            ))}
        </Col>
        <Col lg={6}>
          <h3 className="resume-title">Professional Experience</h3>
          {workExperiences &&
            workExperiences.map((item) => (
              <ResumeItem
                milestone={item.milestone}
                time={item.time}
                place={item.place}
                works={item.works}
                description={item.description}
              />
            ))}
        </Col>
      </Row>
    </Section>
  );
};

export default Resume;
