import { useEffect, useRef } from 'react';
import './FlowerFalling.css';

interface Defaults {
  speed: number;
  maxSize: number;
  minSize: number;
  newOn: number;
}

const defaults: Defaults = {
  speed: 3,
  maxSize: 15,
  minSize: 10,
  newOn: 400,
};

const FlowerFalling = () => {
  const cherryBlossomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $wrap = cherryBlossomRef.current!;
    let wrapH = $wrap.offsetHeight;
    let wrapW = $wrap.offsetWidth;

    const generateRandomColor = () => {
      return Math.random() > 0.5 ? 'yellow' : 'pink';
    };

    const getRandomRotate = (): string => {
      const rotateX = 360;
      const rotateY = Math.random() * 60 - 30;
      const rotateZ = Math.random() * 120 - 30;
      const translateX = Math.random() * 10 - 5;
      const translateY = Math.random() * 10 - 10;
      const translateZ = Math.random() * 15;
      return `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)`;
    };

    const randomSwayAnims = Array.from({ length: 10 }, getRandomRotate);

    const applySwayAnim = (element: HTMLElement) => {
      const randomSway = randomSwayAnims[Math.floor(Math.random() * randomSwayAnims.length)];
      element.style.transform = randomSway;
      setTimeout(() => {
        applySwayAnim(element);
      }, 1000);
    };

    const petalGen = () => {
      const petal = document.createElement('span');
      petal.classList.add('petal',generateRandomColor() );
      const size = Math.floor(Math.random() * (defaults.maxSize - defaults.minSize + 1)) + defaults.minSize;
      const startPosLeft = Math.random() * wrapW;
      const fallTime = (wrapH * 0.1 + Math.random() * 5) / defaults.speed;
      const horizontalOffset = Math.random() * 2 - 1;

      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${startPosLeft}px`;
      petal.style.position = 'absolute';
      petal.style.animation = `fall ${fallTime}s linear`;
      petal.style.setProperty('--random-delay', `${Math.random() * 5}`);


      petal.addEventListener('animationend', () => {
        petal.remove();
      });

      $wrap.appendChild(petal);

      const updatePos = () => {
        const currentLeft = parseFloat(petal.style.left || '0');
        petal.style.left = `${currentLeft + horizontalOffset}px`;
        requestAnimationFrame(updatePos);
      };

      updatePos();
      applySwayAnim(petal);
    };

    const handleResize = () => {
      wrapH = $wrap.offsetHeight;
      wrapW = $wrap.offsetWidth;
    };

    window.addEventListener('resize', handleResize);

    const petalLoop = () => {
      setTimeout(() => {
        requestAnimationFrame(petalLoop);
        petalGen();
      }, defaults.newOn);
    };

    petalLoop();


    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={cherryBlossomRef} className="cherry_blossom"></div>;
};

export default FlowerFalling;
