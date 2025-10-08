import { Apple } from '../Apple/Apple';
import { Basket } from '../Basket/Basket';
import { Button } from '../../../../components/Button/Button';
import { GameHeader } from '../GameHeader/GameHeader';
import { GameOverModal } from '../GameOverModal/GameOverModal';
import { Instructions } from '../Instructions/Instructions';
import { useAppleCatchGame } from '../../useAppleCatchGame';
import styles from './AppleCatchGame.module.css';

export const AppleCatchGame = () => {
  const { gameState, startGame } = useAppleCatchGame();

  return (
    <div className={styles.gameContainer}>
      <GameHeader score={gameState.score} lives={gameState.lives} />

      {!gameState.gameRunning && gameState.lives > 0 && (
        <div className={styles.startButtonContainer}>
          <Button onClick={startGame}>
            ゲーム開始
          </Button>
        </div>
      )}

      <Basket position={gameState.basketPosition} />

      {gameState.apples.map(apple => (
        <Apple key={apple.id} apple={apple} />
      ))}

      <GameOverModal
        isVisible={!gameState.gameRunning && gameState.lives <= 0}
        finalScore={gameState.score}
        onRestart={startGame}
      />

      <Instructions />
    </div>
  );
};