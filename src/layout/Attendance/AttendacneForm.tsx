import { useState } from 'react';
import { push, ref, serverTimestamp } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';
import './AttendanceForm.css';

const attendanceRef = ref(realtimeDb, 'attendance');

const AttendanceForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [side, setSide] = useState<'신랑' | '신부'>('신랑');
  const [status, setStatus] = useState<'참석' | '불참'>('참석');
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(0);
  const [meal, setMeal] = useState<'식사' | '답례품' | '미확정'>('식사');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('성함을 입력해주세요.');
      return;
    }

    const attendanceData = {
      side,
      status,
      name,
      guestCount,
      meal,
      note,
      createdAt: serverTimestamp(),
      date: new Date().toLocaleString(),
    };

    void push(attendanceRef, attendanceData);

    alert('참석 정보가 전달되었습니다!');
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="attendance-form">
      <label className="attendance-label">분류</label>
      <div className="button-group">
        <button type="button" className={`toggle-button ${side === '신랑' ? 'selected' : ''}`} onClick={() => setSide('신랑')}>신랑 김동규측</button>
        <button type="button" className={`toggle-button ${side === '신부' ? 'selected' : ''}`} onClick={() => setSide('신부')}>신부 황주영측</button>
      </div>

      <label className="attendance-label">참석 여부</label>
      <div className="button-group">
        <button type="button" className={`toggle-button ${status === '참석' ? 'selected' : ''}`} onClick={() => setStatus('참석')}>참석</button>
        <button type="button" className={`toggle-button ${status === '불참' ? 'selected' : ''}`} onClick={() => setStatus('불참')}>불참</button>
      </div>

      <label className="attendance-label">성함</label>
      <input className="text-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="성함을 입력해주세요" />

      <label className="attendance-label">동행 인원 (본인 제외)</label>
      <select className="text-input" value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))}>
        {Array.from({ length: 11 }, (_, i) => (
          <option key={i} value={i}>{i === 0 ? '없음' : `${i}명`}</option>
        ))}
      </select>

      <label className="attendance-label">식사 여부</label>
      <div className="button-group">
        <button type="button" className={`toggle-button ${meal === '식사' ? 'selected' : ''}`} onClick={() => setMeal('식사')}>식사</button>
        <button type="button" className={`toggle-button ${meal === '답례품' ? 'selected' : ''}`} onClick={() => setMeal('답례품')}>답례품</button>
        <button type="button" className={`toggle-button ${meal === '미확정' ? 'selected' : ''}`} onClick={() => setMeal('미확정')}>미확정</button>
      </div>

      <label className="attendance-label">전달사항</label>
      <textarea
        className="textarea-input"
        placeholder="전달사항을 입력해주세요 (최대 25자)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={25}
      />

      <button type="submit" className="submit-button">참석 정보 전달하기</button>
    </form>
  );
};

export default AttendanceForm;
