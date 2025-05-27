import React, { useEffect, useState } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  // Calcula ângulos para ponteiros
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = seconds * 6; // 360/60 = 6 graus por segundo
  const minuteAngle = minutes * 6 + seconds * 0.1; // 6 graus por minuto + ajuste fino
  const hourAngle = hours * 30 + minutes * 0.5; // 30 graus por hora + ajuste

  return (
    <div style={{ 
      position: 'relative', 
      width: '200px', 
      height: '200px', 
      borderRadius: '50%', 
      border: '5px solid black',
      margin: '20px auto',
      backgroundColor: '#fff'
    }}>
      {/* Ponteiro das horas */}
      <div style={{
        position: 'absolute',
        width: '6px',
        height: '50px',
        backgroundColor: 'black',
        top: '50px',
        left: '97px',
        transformOrigin: 'bottom center',
        transform: `rotate(${hourAngle}deg)`
      }} />

      {/* Ponteiro dos minutos */}
      <div style={{
        position: 'absolute',
        width: '4px',
        height: '70px',
        backgroundColor: 'gray',
        top: '30px',
        left: '98px',
        transformOrigin: 'bottom center',
        transform: `rotate(${minuteAngle}deg)`
      }} />

      {/* Ponteiro dos segundos */}
      <div style={{
        position: 'absolute',
        width: '2px',
        height: '90px',
        backgroundColor: 'red',
        top: '10px',
        left: '99px',
        transformOrigin: 'bottom center',
        transform: `rotate(${secondAngle}deg)`
      }} />

      {/* Centro do relógio */}
      <div style={{
        position: 'absolute',
        width: '12px',
        height: '12px',
        backgroundColor: 'black',
        borderRadius: '50%',
        top: '94px',
        left: '94px',
        zIndex: 10
      }} />
    </div>
  );
};

export default AnalogClock;
