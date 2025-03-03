import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursor || !cursorRing) return;

    // Atualiza a posição do cursor
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Atualiza a posição do cursor
      setCursorPosition({ x: clientX, y: clientY });

      // Atraso para o anel do cursor
      setRingPosition({ x: clientX, y: clientY });
    };

    const onMouseDown = () => {
      cursor.classList.add('scale-75');
      cursorRing.classList.add('scale-150');
    };

    const onMouseUp = () => {
      cursor.classList.remove('scale-75');
      cursorRing.classList.remove('scale-150');
    };

    const onMouseEnterLink = () => {
      cursor.classList.add('scale-150');
      cursorRing.classList.add('scale-0');
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove('scale-150');
      cursorRing.classList.remove('scale-0');
    };

    // Adiciona os event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Seleciona os links e botões
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Remove os event listeners ao desmontar
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);

      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRingRef}
        className="fixed w-12 h-12 rounded-full border-2 border-purple-500 pointer-events-none z-50 transition-transform duration-300 ease-out mix-blend-difference"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          left: `${ringPosition.x - 24}px`, // Ajuste de posição com base no estado
          top: `${ringPosition.y - 24}px`,
        }}
      />
      <motion.div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-150 ease-out mix-blend-difference"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          left: `${cursorPosition.x - 8}px`, // Ajuste de posição com base no estado
          top: `${cursorPosition.y - 8}px`,
        }}
      />
    </>
  );
};

export default Cursor;
