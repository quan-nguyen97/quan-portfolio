import React from 'react';
import { Row, Col } from 'react-bootstrap';

type Skill = {
  name: string;
  style: 'plain' | 'plain-wordmark' | 'wordmark';
};

interface SkillsRowProps {
  skills: Array<Skill>;
}

const SkillsRow = ({ skills }: SkillsRowProps) => {
  return (
    <Row className="my-3">
      {skills.map((skill) => {
        const { name, style } = skill;
        return (
          <Col>
            <i className={`skill-badge devicon-${name}-${style} colored`}></i>
          </Col>
        );
      })}
    </Row>
  );
};

export default SkillsRow;
