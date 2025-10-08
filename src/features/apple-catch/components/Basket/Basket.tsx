import styles from './Basket.module.css';

interface BasketProps {
  position: number;
}

export const Basket = ({ position }: BasketProps) => {
  return (
    <div
      className={styles.basket}
      style={{
        left: `${position}px`,
      }}
    />
  );
};