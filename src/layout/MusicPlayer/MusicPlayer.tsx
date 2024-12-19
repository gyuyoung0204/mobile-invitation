import { useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    const audio = audioRef.current!;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src="/path-to-your-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="music-toggle" onClick={playMusic}>
        🎵
      </button>
    </div>
  );
};

export default MusicPlayer;
