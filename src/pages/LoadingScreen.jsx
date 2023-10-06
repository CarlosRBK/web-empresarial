import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import logo from '../assets/logo-kd.png';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Animación del camión de entrega que se desplaza hacia la derecha
  const truckAnimation = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 1 },
    to: { transform: 'translateX(100%)', opacity: 0 },
    config: { duration: 1000, easing: config.easeInOut },
    onRest: () => setIsLoading(false),
  });

  // Simula un tiempo de carga (puedes cambiar esto según tus necesidades)
  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Cambia el tiempo de carga según tus necesidades

    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <div style={{ background: '#FAFAFA', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <animated.img
          style={{ ...truckAnimation, width: '360px', height: '120px' }}
          src={logo} // Reemplaza con la URL de una imagen de un camión de entrega
          alt="Camión de entrega"
        />
      ) : (
        <div style={{ color: '#FAFAFA', fontSize: '24px', textAlign: 'center' }}>
          ¡Tu paquete está en camino!
          {/* Aquí puedes poner el contenido de tu página principal */}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
