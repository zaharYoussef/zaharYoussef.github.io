import React from 'react';
import styles from '@/styles/ExperienceEntry.module.css'; // Import your styling

const ExperienceEntry = ({ position, company, startDate, endDate, location, description, skills }) => {
  return (
    <div className={styles.experienceEntry}>
      <div className={styles.bubble}></div>
      <div className={styles.content}>
        <h3>{position}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.date}>{startDate} - {endDate || 'Present'}</p>
        <p className={styles.location}>{location}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          <strong>Skills:</strong> {skills.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
