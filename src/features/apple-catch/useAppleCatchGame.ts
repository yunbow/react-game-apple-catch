import { useState, useEffect, useCallback, useRef } from 'react';
import { Apple, GameState } from './types';
import { GAME_CONFIG } from '../../Config';

export const useAppleCatchGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    lives: GAME_CONFIG.initialLives,
    basketPosition: (GAME_CONFIG.gameWidth - GAME_CONFIG.basketWidth) / 2,
    apples: [],
    gameRunning: false,
    bonusAppleTimer: 0,
  });

  const gameLoopRef = useRef<number>();

  const createApple = useCallback((isBonus: boolean = false): Apple => {
    return {
      id: Date.now().toString() + Math.random(),
      x: Math.random() * (GAME_CONFIG.gameWidth - GAME_CONFIG.appleSize),
      y: 0,
      isBonus,
    };
  }, []);

  const moveBasket = useCallback((direction: number) => {
    setGameState(prev => {
      const newPosition = prev.basketPosition + direction;
      const clampedPosition = Math.max(0, Math.min(GAME_CONFIG.gameWidth - GAME_CONFIG.basketWidth, newPosition));
      return {
        ...prev,
        basketPosition: clampedPosition,
      };
    });
  }, []);

  const checkCollision = useCallback((apple: Apple, basketPosition: number): boolean => {
    const appleLeft = apple.x;
    const appleRight = apple.x + GAME_CONFIG.appleSize;
    const basketLeft = basketPosition;
    const basketRight = basketPosition + GAME_CONFIG.basketWidth;
    const basketTop = GAME_CONFIG.gameHeight - GAME_CONFIG.basketHeight - 20;

    return (
      apple.y >= basketTop - GAME_CONFIG.appleSize &&
      apple.y <= basketTop + 20 &&
      appleRight >= basketLeft &&
      appleLeft <= basketRight
    );
  }, []);

  const updateApples = useCallback(() => {
    setGameState(prev => {
      const updatedApples: Apple[] = [];
      let newScore = prev.score;
      let newLives = prev.lives;

      for (const apple of prev.apples) {
        const newY = apple.y + GAME_CONFIG.appleSpeed;

        if (checkCollision({ ...apple, y: newY }, prev.basketPosition)) {
          newScore += apple.isBonus ? GAME_CONFIG.bonusApplePoints : GAME_CONFIG.normalApplePoints;
        } else if (newY > GAME_CONFIG.gameHeight) {
          if (!apple.isBonus) {
            newLives--;
          }
        } else {
          updatedApples.push({ ...apple, y: newY });
        }
      }

      if (Math.random() < GAME_CONFIG.appleSpawnRate) {
        updatedApples.push(createApple(false));
      }

      const newBonusTimer = prev.bonusAppleTimer + 1;
      if (newBonusTimer > GAME_CONFIG.bonusAppleInterval && Math.random() < GAME_CONFIG.bonusAppleSpawnRate) {
        updatedApples.push(createApple(true));
        return {
          ...prev,
          score: newScore,
          lives: newLives,
          apples: updatedApples,
          bonusAppleTimer: 0,
        };
      }

      return {
        ...prev,
        score: newScore,
        lives: newLives,
        apples: updatedApples,
        bonusAppleTimer: newBonusTimer,
      };
    });
  }, [checkCollision, createApple]);


  const startGame = useCallback(() => {
    setGameState({
      score: 0,
      lives: GAME_CONFIG.initialLives,
      basketPosition: (GAME_CONFIG.gameWidth - GAME_CONFIG.basketWidth) / 2,
      apples: [],
      gameRunning: true,
      bonusAppleTimer: 0,
    });
  }, []);

  const stopGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gameRunning: false,
    }));
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
  }, []);

  useEffect(() => {
    if (gameState.gameRunning && gameState.lives > 0) {
      const loop = () => {
        updateApples();
        gameLoopRef.current = requestAnimationFrame(loop);
      };
      gameLoopRef.current = requestAnimationFrame(loop);
    } else if (gameState.lives <= 0) {
      stopGame();
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState.gameRunning, gameState.lives, updateApples, stopGame]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameState.gameRunning) return;

      if (e.key === 'ArrowLeft') {
        moveBasket(-GAME_CONFIG.basketSpeed);
      } else if (e.key === 'ArrowRight') {
        moveBasket(GAME_CONFIG.basketSpeed);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!gameState.gameRunning) return;

      const touch = e.touches[0];
      const rect = (e.target as Element).getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const centerX = GAME_CONFIG.gameWidth / 2;

      if (touchX < centerX) {
        moveBasket(-GAME_CONFIG.basketSpeed);
      } else {
        moveBasket(GAME_CONFIG.basketSpeed);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [gameState.gameRunning, moveBasket]);

  return {
    gameState,
    startGame,
    stopGame,
    moveBasket,
  };
};