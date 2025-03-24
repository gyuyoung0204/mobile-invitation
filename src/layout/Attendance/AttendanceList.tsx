import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AttendanceForm from './AttendacneForm';
import './Attendance.css';

const AttendanceList = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modalElement = (
    <div className="attendance_overlay">
      <div className="attendance_modal">
        <div className="attendance_header">
          <h2 className="attendance_title">참석 정보 입력</h2>
          <button className="attendance_close" onClick={onClose}>×</button>
        </div>
        <AttendanceForm onSubmit={onClose} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalElement, document.body); // ✅ 여기가 핵심!
};

export default AttendanceList;
