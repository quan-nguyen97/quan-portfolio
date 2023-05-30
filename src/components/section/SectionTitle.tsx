import React from 'react';
import './SectionTitle.scss';

interface SectionTitleProps {
  header: string;
  title?: string;
}

const SectionTitle = ({ header, title }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <h2>{header}</h2>
      {title && <p>{title}</p>}
    </div>
  );
};

export default SectionTitle;
