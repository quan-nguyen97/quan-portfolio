import React from 'react';
import Section from '../../../../components/section/Section';
import './About.scss';
import Skills from './Skills';
import PersonalInfo from './PersonalInfo';
// import Interest from './Interest';

const About = () => {
  return (
    <Section
      id="about"
      header="About me"
      title="Who am I?"
      className="about-me"
    >
      <PersonalInfo />
      <Skills />
      {/* TBD: <Interest /> */}
    </Section>
  );
};

export default About;
