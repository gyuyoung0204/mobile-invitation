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
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordSubmit = () => {
    if (passwordInput === '0412') {
      setShowViewerModal(true);
      setShowPasswordModal(false);
      setPasswordInput('');
      setPasswordError('');
    } else {
      setPasswordError('비밀번호가 틀렸습니다.');
    }
  };

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
          flexDirection: 'row',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <RoundButton onClick={() => setShowFormModal(true)}>참석 정보 전달하기</RoundButton>
        <RoundButton onClick={() => setShowPasswordModal(true)}>참석자 목록 보기</RoundButton>
      </div>

      {showFormModal && <AttendanceList onClose={() => setShowFormModal(false)} />}
      {showViewerModal && <AttendanceViewer onClose={() => setShowViewerModal(false)} />}

      {showPasswordModal && (
        <div className="password-modal">
          <div
            className="password-modal-content"
            style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '16px',
              width: '90%',
              maxWidth: '500px',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>비밀번호 입력</h3>
            <input
  type="password"
  value={passwordInput}
  onChange={(e) => setPasswordInput(e.target.value)}
  placeholder="비밀번호를 입력하세요"
  style={{
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box', // ✅ 중요
  }}
/>
            {passwordError && (
              <p style={{ color: 'red', marginTop: '10px' }}>{passwordError}</p>
            )}
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  minWidth: '80px',
                  cursor: 'pointer',
                }}
                onClick={handlePasswordSubmit}
              >
                확인
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  minWidth: '80px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordInput('');
                  setPasswordError('');
                }}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
