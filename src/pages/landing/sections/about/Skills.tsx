import React from 'react';
import SkillsGroup from './SkillsGroup';
import SectionTitle from '../../../../components/section/SectionTitle';
import { Col, Row } from 'react-bootstrap';

const Skills = () => {
  return (
    <Row className="skills">
      <SectionTitle header="Main skills"></SectionTitle>
      <SkillsGroup
        skills={[
          { name: 'javascript', style: 'plain' },
          { name: 'typescript', style: 'plain' },
          { name: 'html5', style: 'plain' },
        ]}
      />
      <SkillsGroup
        skills={[
          { name: 'sass', style: 'plain' },
          { name: 'bootstrap', style: 'plain-wordmark' },
          { name: 'react', style: 'plain-wordmark' },
        ]}
      />
      <SkillsGroup
        skills={[
          { name: 'npm-original', style: 'wordmark' },
          { name: 'java', style: 'plain-wordmark' },
          { name: 'spring', style: 'plain-wordmark' },
        ]}
      />
      <SkillsGroup
        skills={[
          { name: 'kubernetes', style: 'plain-wordmark' },
          { name: 'webpack', style: 'plain-wordmark' },
          { name: 'jenkins', style: 'plain' },
        ]}
      />
      <SkillsGroup
        skills={[
          { name: 'mysql', style: 'plain-wordmark' },
          { name: 'postgresql', style: 'plain-wordmark' },
          { name: 'git', style: 'plain-wordmark' },
        ]}
      />
      <SkillsGroup
        skills={[
          { name: 'nodejs', style: 'plain-wordmark' },
          { name: 'docker', style: 'plain-wordmark' },
          { name: 'mongodb', style: 'plain-wordmark' },
        ]}
      />
    </Row>
  );
};

export default Skills;
