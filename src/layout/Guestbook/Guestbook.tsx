import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Guestbook.css';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간
  offset: 100,    // 애니메이션 시작 위치
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 한 번만 실행
});

const Guestbook = () => {
  return (
    <div className="location-container" data-aos="fade-up" data-aos-delay="0">
      <Heading2 data-aos="fade-up" data-aos-delay="100">
        신랑 신부에게 메시지를 남겨주세요.
      </Heading2>
      <CommentForm data-aos="fade-up" data-aos-delay="300" />
    </div>
  );
};

export default Guestbook;
