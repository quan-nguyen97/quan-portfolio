import React from 'react';
import * as icons from 'react-bootstrap-icons';

interface InfoBoxProps {
  iconName: keyof typeof icons;
  title: string;
  content: React.ReactNode;
}

const InfoBox = ({ iconName, title, content }: InfoBoxProps) => {
  const BootstrapIcon = icons[iconName];
  return (
    <div className="info-box">
      <div className="info-icon">
        <BootstrapIcon size={24} />
      </div>
      <h3>{title}</h3>
      {content}
    </div>
  );
};

export default InfoBox;
