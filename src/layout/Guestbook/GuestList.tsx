import GuestListForm from './GuestListForm.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './GuestList.css';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간
  offset: 100,    // 애니메이션 시작 위치
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 한 번만 실행
});

const GuestList = () => {
  return (
    <div className="location-container" data-aos="fade-up" data-aos-delay="0">
      <GuestListForm data-aos="fade-up" data-aos-delay="100" />
    </div>
  );
};

export default GuestList;
