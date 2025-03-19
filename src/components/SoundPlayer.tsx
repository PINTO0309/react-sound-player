import React, { useState } from "react";
import useSound from "use-sound";

const DEFAULT_AUDIO = import.meta.env.BASE_URL + "push_button.mp3";

const SoundPlayer: React.FC = () => {
  const [audioSrc, setAudioSrc] = useState<string>(DEFAULT_AUDIO);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // useSound フックを初期化
  const [play, { pause, stop }] = useSound(audioSrc, {
    volume: 0.8,
    format: ["mp3", "wav"],
    onplay: () => {
      setIsPlaying(true);
      setIsPaused(false);
    },
    onpause: () => setIsPaused(true),
    onstop: () => {
      setIsPlaying(false);
      setIsPaused(false);
    },
  });

  // ファイル選択時の処理
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setAudioSrc(fileUrl);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-xl font-bold">React Sound Player</h1>

      {/* 現在の音声ファイルを表示 */}
      <p className="text-sm text-gray-600">
        現在の音声: {audioSrc.includes("blob:") ? "選択したファイル" : audioSrc}
      </p>

      {/* ファイル選択 */}
      <input
        type="file"
        accept="audio/mp3, audio/wav"
        onChange={handleFileChange}
        className="mb-2 p-2 border rounded"
      />

      {/* 再生・停止・一時停止ボタン */}
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => {
            play(); // `play()` で一時停止後の再開も含める
          }}
        >
          {isPaused ? "Resume" : "Play"}
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
          onClick={() => {
            if (pause) pause();
          }}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => {
            if (stop) stop();
          }}
        >
          Stop
        </button>
      </div>

      <p>{isPlaying ? (isPaused ? "Paused..." : "Playing...") : "Stopped"}</p>
    </div>
  );
};

export default SoundPlayer;
