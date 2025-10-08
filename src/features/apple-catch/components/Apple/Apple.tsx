import { Apple as AppleType } from '../../types';
import styles from './Apple.module.css';

interface AppleProps {
  apple: AppleType;
}

export const Apple = ({ apple }: AppleProps) => {
  return (
    <div
      className={`${styles.apple} ${apple.isBonus ? styles.bonusApple : ''}`}
      style={{
        left: `${apple.x}px`,
        top: `${apple.y}px`,
      }}
    />
  );
};