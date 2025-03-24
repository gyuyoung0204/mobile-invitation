import { useState } from 'react';
import AttendanceList from './AttendanceList';
import { Heading2 } from '@/components/Text.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Attendance.css';

AOS.init({
  duration: 1500,
  offset: 100,
  easing: 'ease-in-out',
  once: true,
});

const Attendance = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="attendance-container" data-aos="fade-up" data-aos-delay="0">
      <Heading2 data-aos="fade-up" data-aos-delay="100">참석 정보</Heading2>

      <p style={{ textAlign: 'center', marginTop: 20 }} data-aos="fade-up" data-aos-delay="200">
        참석의 부담은 가지지 말아주시고,<br />
        정성껏 준비하기 위해 여쭙는 것이니,<br />
        참석 정보를 알려주시면 감사하겠습니다.
      </p>

      <div style={{ textAlign: 'center', margin: '40px 0' }} data-aos="fade-up" data-aos-delay="300">
        <button
          style={{
            padding: '12px 24px',
            border: '1px solid #000',
            borderRadius: '8px',
            background: '#fff',
            cursor: 'pointer'
          }}
          onClick={() => setShowModal(true)}
        >
          참석 정보 전달하기
        </button>
      </div>

      {showModal && <AttendanceList onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Attendance;
