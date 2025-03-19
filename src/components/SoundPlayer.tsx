import React, { useState, useEffect } from "react";
import useSound from "use-sound";

const DEFAULT_AUDIO = "/push_button.mp3"; // デフォルトの音声ファイル

const SoundPlayer: React.FC = () => {
  const [audioSrc, setAudioSrc] = useState<string>(DEFAULT_AUDIO);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [play, setPlay] = useState<(() => void) | null>(null);
  const [pause, setPause] = useState<(() => void) | null>(null);
  const [stop, setStop] = useState<(() => void) | null>(null);
  const [audioFormat, setAudioFormat] = useState<string>("mp3"); // 初期フォーマットは mp3

  // useSound を初期化
  const [initializeSound, soundData] = useSound(audioSrc, {
    volume: 0.8,
    interrupt: true,
    format: ["mp3", "wav"], // mp3 と wav の両方を対応
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    onpause: () => setIsPlaying(false),
    onstop: () => setIsPlaying(false),
  });

  // useEffect で useSound の関数を更新
  useEffect(() => {
    if (soundData) {
      setPlay(() => initializeSound);
      setPause(() => soundData.pause);
      setStop(() => soundData.stop);
    }
  }, [initializeSound, soundData]);

  // ファイル選択時の処理
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setAudioSrc(fileUrl);

      // ファイルの拡張子を取得してフォーマットを設定
      const extension = file.name.split(".").pop()?.toLowerCase();
      if (extension === "wav") {
        setAudioFormat("wav");
      } else {
        setAudioFormat("mp3"); // デフォルトは mp3
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-xl font-bold">React Sound Player</h1>

      {/* 現在の音声ファイルを表示 */}
      <p className="text-sm text-gray-600">
        現在の音声: {audioSrc.includes("blob:") ? "選択したファイル" : audioSrc} ({audioFormat})
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
            if (play) {
              play();
            } else {
              console.warn("play() is not available");
            }
          }}
        >
          Play
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

      <p>{isPlaying ? "Playing..." : "Stopped"}</p>
    </div>
  );
};

export default SoundPlayer;
