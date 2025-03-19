import React from "react";
import SoundPlayer from "./components/SoundPlayer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SoundPlayer />
    </div>
  );
};

export default App;
