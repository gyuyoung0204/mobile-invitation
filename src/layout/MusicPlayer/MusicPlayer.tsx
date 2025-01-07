import { useRef } from 'react';
import './MusicPlayer.css';
import Song from "@/assets/song.mp3"; // 정확한 경로를 사용

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <div className="music-player">
      {/* 정확한 파일 경로 사용 */}
      <audio ref={audioRef} loop>
        <source src={Song} type="audio/mpeg" />
        오디오 재생을 지원하지 않는 브라우저입니다.
      </audio>
      {/* 버튼으로 음악 재생/일시정지 */}
      <button className="music-toggle" onClick={playMusic}>
        🎵
      </button>
    </div>
  );
};

export default MusicPlayer;
