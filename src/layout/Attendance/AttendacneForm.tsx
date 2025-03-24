import { useState } from 'react';
import styled from '@emotion/styled';
import { push, ref, serverTimestamp } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';


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
    <FormWrapper onSubmit={handleSubmit} className="guestList-container">
      <Label>분류</Label>
      <ButtonGroup>
        <ToggleButton type="button" selected={side === '신랑'} onClick={() => setSide('신랑')}>신랑 김동규측</ToggleButton>
        <ToggleButton type="button" selected={side === '신부'} onClick={() => setSide('신부')}>신부 황주영측</ToggleButton>
      </ButtonGroup>

      <Label>참석 여부</Label>
      <ButtonGroup>
        <ToggleButton type="button" selected={status === '참석'} onClick={() => setStatus('참석')}>참석</ToggleButton>
        <ToggleButton type="button" selected={status === '불참'} onClick={() => setStatus('불참')}>불참</ToggleButton>
      </ButtonGroup>

      <Label>성함</Label>
      <NameInput value={name} onChange={(e) => setName(e.target.value)} placeholder="성함을 입력해주세요" />

      <Label>동행 인원 (본인 제외)</Label>
      <Select value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))}>
        {Array.from({ length: 11 }, (_, i) => (
          <option key={i} value={i}>{i === 0 ? '없음' : `${i}명`}</option>
        ))}
      </Select>

      <Label>식사 여부</Label>
      <ButtonGroup>
        <ToggleButton type="button" selected={meal === '식사'} onClick={() => setMeal('식사')}>식사</ToggleButton>
        <ToggleButton type="button" selected={meal === '답례품'} onClick={() => setMeal('답례품')}>답례품</ToggleButton>
        <ToggleButton type="button" selected={meal === '미확정'} onClick={() => setMeal('미확정')}>미확정</ToggleButton>
      </ButtonGroup>

      <Label>전달사항</Label>
      <MessageInput
        placeholder="전달사항을 입력해주세요 (최대 25자)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={25}
      />

      <SubmitButton type="submit">참석 정보 전달하기</SubmitButton>
    </FormWrapper>
  );
};

export default AttendanceForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Label = styled.label`
  width: 100%;
  font-weight: bold;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  resize: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const ToggleButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? '#000' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid lightgray;
  background-color: white;
  color: inherit;
  cursor: pointer;
`;
