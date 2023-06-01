import React from 'react';
import { Row, Col } from 'react-bootstrap';

type Skill = {
  name: string;
  style: 'plain' | 'plain-wordmark' | 'wordmark';
};

interface SkillsRowProps {
  skills: Array<Skill>;
}

const SkillsGroup = ({ skills }: SkillsRowProps) => {
  return (
    <Col lg={6} md={12}>
      <Row className="my-3">
        {skills.map((skill) => {
          const { name, style } = skill;
          return (
            <Col
              key={name}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              lg={4}
              md={4}
              sm={4}
            >
              <i className={`skill-badge devicon-${name}-${style} colored`}></i>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default SkillsGroup;
