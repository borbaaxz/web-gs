import React from 'react';

function Section({ title, link }) {
  return (
    <div>
      <h2>{title}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Go to {title}
      </a>
    </div>
  );
}

export default Section;
