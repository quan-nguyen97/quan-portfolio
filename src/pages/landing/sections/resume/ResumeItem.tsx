import React from 'react';

interface ResumeItemProps {
  milestone: string;
  time: string;
  place: string;
  description?: string;
  works?: Array<string>;
}

const ResumeItem = ({
  milestone,
  time,
  place,
  description,
  works,
}: ResumeItemProps) => {
  return (
    <div className="resume-item">
      <h4>{milestone}</h4>
      <h5>{time}</h5>
      <p>
        <em>{place}</em>
      </p>
      {description && <p>{description}</p>}
      {works && (
        <ul>
          {works.map((work) => (
            <li>{work}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeItem;
