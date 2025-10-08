import styles from './ScoreDisplay.module.css';

interface ScoreDisplayProps {
  label: string;
  value: number;
}

export const ScoreDisplay = ({ label, value }: ScoreDisplayProps) => {
  return (
    <div className={styles.scoreDisplay}>
      {label}: <span className={styles.value}>{value}</span>
    </div>
  );
};