import React from 'react';

interface ScoreBadgeProps {
  score: number;
}

export default function ScoreBadge({ score }: ScoreBadgeProps) {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        container: 'bg-green-100 border border-green-200',
        text: 'text-green-600',
        label: 'Strong'
      };
    } else if (score > 49) {
      return {
        container: 'bg-yellow-100 border border-yellow-200',
        text: 'text-yellow-600',
        label: 'Good Start'
      };
    } else {
      return {
        container: 'bg-red-100 border border-red-200',
        text: 'text-red-600',
        label: 'Needs Work'
      };
    }
  };

  const styles = getBadgeStyles();

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styles.container}`}>
      <p className={styles.text}>{styles.label}</p>
    </div>
  );
}
