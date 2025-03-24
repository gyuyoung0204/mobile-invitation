import { useState } from 'react';
import AttendanceList from './AttendanceList';
import AttendanceViewer from './AttendanceViewer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Attendance.css';
import RoundButton from '@/components/RoundButton.tsx';

AOS.init({
  duration: 1500,
  offset: 100,
  easing: 'ease-in-out',
  once: true,
});

const Attendance = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showViewerModal, setShowViewerModal] = useState(false);

  return (
    <div className="attendance-container" data-aos="fade-up" data-aos-delay="0">
      <p style={{ textAlign: 'center', marginTop: 20 }} data-aos="fade-up" data-aos-delay="200">
        참석의 부담은 가지지 말아주시고,<br />
        정성껏 준비하기 위해 여쭙는 것이니,<br />
        참석 정보를 알려주시면 감사하겠습니다.
      </p>

      <div
  style={{
    textAlign: 'center',
    margin: '40px 0',
    display: 'flex',
    flexDirection: 'row', // 👈 가로 정렬
    gap: '10px',
    justifyContent: 'center', // 버튼들을 가운데 정렬
    flexWrap: 'wrap' // 모바일에서 두 줄로 떨어지도록
  }}
  data-aos="fade-up"
  data-aos-delay="300"
>
  <RoundButton onClick={() => setShowFormModal(true)}>
    참석 정보 전달하기
  </RoundButton>
  <RoundButton onClick={() => setShowViewerModal(true)}>
    참석자 목록 보기
  </RoundButton>
</div>

      {showFormModal && <AttendanceList onClose={() => setShowFormModal(false)} />}
      {showViewerModal && <AttendanceViewer onClose={() => setShowViewerModal(false)} />}
    </div>
  );
};

export default Attendance;
