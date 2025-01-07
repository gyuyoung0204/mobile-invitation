import { useRef, useState } from 'react';
import './MusicPlayer.css';
import Song from "@/assets/song.mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src={Song} type="audio/mpeg" />
        오디오 재생을 지원하지 않는 브라우저입니다.
      </audio>
      <button className="music-toggle" onClick={togglePlay}>
        {isPlaying ? '⏸️' : '🎵'}
      </button>
    </div>
  );
};

export default MusicPlayer;
