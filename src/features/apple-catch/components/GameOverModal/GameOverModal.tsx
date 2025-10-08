import { Button } from '../../../../components/Button/Button';
import styles from './GameOverModal.module.css';

interface GameOverModalProps {
  isVisible: boolean;
  finalScore: number;
  onRestart: () => void;
}

export const GameOverModal = ({ isVisible, finalScore, onRestart }: GameOverModalProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.gameOver}>
      <h2>ゲームオーバー</h2>
      <p>最終スコア: {finalScore}</p>
      <Button onClick={onRestart}>もう一度プレイ</Button>
    </div>
  );
};