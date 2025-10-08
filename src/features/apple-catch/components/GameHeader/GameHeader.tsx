import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay';
import styles from './GameHeader.module.css';

interface GameHeaderProps {
  score: number;
  lives: number;
}

export const GameHeader = ({ score, lives }: GameHeaderProps) => {
  return (
    <div className={styles.gameHeader}>
      <ScoreDisplay label="スコア" value={score} />
      <ScoreDisplay label="ライフ" value={lives} />
    </div>
  );
};