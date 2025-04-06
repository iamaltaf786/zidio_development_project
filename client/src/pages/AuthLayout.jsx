// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/desktop-logo.png";

const AuthLayout = () => {
  // const ballColors = [
  //   "bg-red-500",
  //   "bg-blue-500",
  //   "bg-green-500",
  //   "bg-yellow-500",
  // ];

  // const [positions, setPositions] = useState(
  //   Array(4)
  //     .fill()
  //     .map(() => ({
  //       x: Math.random() * 590,
  //       y: Math.random() * 390,
  //       dx: (Math.random() - 0.5) * 4,
  //       dy: (Math.random() - 0.5) * 4,
  //     }))
  // );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPositions((prevPositions) =>
  //       prevPositions.map((pos) => {
  //         let newX = pos.x + pos.dx;
  //         let newY = pos.y + pos.dy;

  //         // Bounce off walls
  //         if (newX <= 0 || newX >= 590) pos.dx *= -1;
  //         if (newY <= 0 || newY >= 390) pos.dy *= -1;

  //         return { ...pos, x: newX, y: newY };
  //       })
  //     );
  //   }, 30); // Smooth animation update

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex h-screen">
      {/* Left Side Code*/}
      <div className="w-1/2 h-full flex justify-center items-center">
        {/* bg desines for better UI :) */}
        <div className="-left-75 -top-75  absolute rounded-full w-150 h-150 bg-[#3333a6]">
          <div className="left-35 relative rounded-full w-100 h-100 bg-blue-500"></div>
          <div className="left-80 top-5 relative rounded-full w-25 h-25 bg-blue-300">
            <div className="left-10 -top-4 relative rounded-full w-10 h-10 bg-blue-200"></div>
          </div>
          <div className="-right-140 bottom-65 relative rounded-full w-30 h-30 bg-white"></div>
        </div>

        <div className="relative flex justify-center items-center w-[600px] h-[400px] overflow-hidden">
          {/* Moving Balls */}
          {/* {positions.map((pos, index) => (
            <div
              key={index}
              className={`absolute w-[10px] h-[10px] rounded-full ${ballColors[index]}`}
              style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
            />
          ))} */}

          {/* Logo */}
          <a className="absolute w-[400px]" href="https://zidio.in/">
            <img src={logo} alt="logo" className="w-full animation-shape" />
          </a>
        </div>
      </div>

      {/* Right Side Code */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
