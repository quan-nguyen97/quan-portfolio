import React from 'react';
import SkillsRow from './SkillsRow';
import SectionTitle from '../../../../components/section/SectionTitle';
import { Row } from 'react-bootstrap';

const Skills = () => {
  return (
    <Row className="skills">
      <SectionTitle header="Main skills"></SectionTitle>
      <SkillsRow
        skills={[
          { name: 'javascript', style: 'plain' },
          { name: 'typescript', style: 'plain' },
          { name: 'html5', style: 'plain' },
          { name: 'sass', style: 'plain' },
          { name: 'bootstrap', style: 'plain-wordmark' },
          { name: 'react', style: 'plain-wordmark' },
        ]}
      />
      <SkillsRow
        skills={[
          { name: 'npm-original', style: 'wordmark' },
          { name: 'java', style: 'plain-wordmark' },
          { name: 'spring', style: 'plain-wordmark' },
          { name: 'kubernetes', style: 'plain-wordmark' },
          { name: 'docker', style: 'plain-wordmark' },
          { name: 'mongodb', style: 'plain-wordmark' },
        ]}
      />
      <SkillsRow
        skills={[
          { name: 'mysql', style: 'plain-wordmark' },
          { name: 'postgresql', style: 'plain-wordmark' },
          { name: 'git', style: 'plain-wordmark' },
          { name: 'nodejs', style: 'plain-wordmark' },
          { name: 'webpack', style: 'plain-wordmark' },
          { name: 'jenkins', style: 'plain' },
        ]}
      />
    </Row>
  );
};

export default Skills;
