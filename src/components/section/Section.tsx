import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Section.scss';
import SectionTitle from './SectionTitle';
import classNames from 'classnames';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  header: string;
  title: string;
  [x: string]: any;
}

const Section = ({ id, children, header, title, ...rest }: SectionProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={classNames({ show: show })} id={id}>
      <Container {...rest}>
        <SectionTitle header={header} title={title} />
        {children}
      </Container>
    </section>
  );
};

export default Section;
