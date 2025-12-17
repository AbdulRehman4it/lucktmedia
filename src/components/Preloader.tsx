import React from "react";
import logoVideo from "../assets/Logoluckymedia.webm"; // Apna video yaha import karo

interface PreloaderProps {
  show: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        // transition: "opacity 1s ease, visibility 1s ease",
      }}
    >
      <video
        src={logoVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "150px",
          height: "150px",
          marginBottom: "16px",
          animation: "pulse 1.5s infinite",
        }}
      />

      <p style={{ color: "white", fontSize: "16px" }}>Loading LuckyMedia</p>

      {/* Inline keyframes animation */}
      <style>
        {`
          // @keyframes pulse {
          //   0% { transform: scale(1); opacity: 1; }
          //   50% { transform: scale(1.1); opacity: 0.7; }
          //   100% { transform: scale(1); opacity: 1; }
          // }
        `}
      </style>
    </div>
  );
};

export default Preloader;
