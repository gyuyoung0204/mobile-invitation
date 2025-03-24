import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';
import './AttendanceViewer.css';

const AttendanceViewer = ({ onClose }: { onClose: () => void }) => {
  const [attendees, setAttendees] = useState<any[]>([]);

  useEffect(() => {
    const attendanceRef = ref(realtimeDb, 'attendance');

    const unsubscribe = onValue(attendanceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.values(data);
        setAttendees(list);
      } else {
        setAttendees([]);
      }
    });

    document.body.style.overflow = 'hidden';
    return () => {
      unsubscribe();
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modalElement = (
    <div className="attendance_overlay">
      <div className="attendance_modal">
        <div className="attendance_header">
          <h2 className="attendance_title">참석자 목록</h2>
          <button className="attendance_close" onClick={onClose}>×</button>
        </div>
        <ul className="attendance_list">
          {attendees.map((person: any, index) => (
            <li key={index} className="attendance_item">
              <strong>{person.name}</strong> ({person.side}) - {person.status} - {person.meal}
              {person.guestCount > 0 && ` +${person.guestCount}명`}
            </li>
          ))}
          {attendees.length === 0 && <p>아직 참석 정보가 없습니다.</p>}
        </ul>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalElement, document.body);
};

export default AttendanceViewer;
