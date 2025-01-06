import { useState } from 'react';
import styled from '@emotion/styled';
 import { push, ref, serverTimestamp } from 'firebase/database';
 import { realtimeDb } from '../../firebase.ts';


 const guestbookRef = ref(realtimeDb, 'guestbook');

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!name || !message) {
      alert('이름과 메시지를 채워주세요. 🥹');
    } else {
      e.preventDefault();
        // TODO: 이름, 메시지, 생성시간, 작성날짜 저장.
       const guestbookMessage = {
         sender: name,
         message: message,
         createdAt: serverTimestamp(),
         date: new Date().toLocaleString(),
       };
       void push(guestbookRef, guestbookMessage);
      
       alert('메시지를 보냈습니다. 💌');
      setName('');
      setMessage('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="이름"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit">등록</SubmitButton>
    </FormWrapper>
  );
};

export default CommentForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 입력 필드 간 간격 증가 */
  align-items: center;
  width: 100%; /* 전체 화면 너비에 맞춤 */
  max-width: 600px; /* 데스크톱에서 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  box-sizing: border-box;
`;

const NameInput = styled.input`
  width: 100%; /* 입력 필드 너비를 가득 채움 */
  padding: 10px; /* 패딩 추가 */
  font-size: 1rem; /* 폰트 크기 설정 */
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* 모바일에서 폰트 크기 증가 */
    padding: 12px; /* 모바일에서 패딩 증가 */
  }
`;

const MessageInput = styled.textarea`
  width: 100%; /* 텍스트 영역 너비를 가득 채움 */
  height: 120px; /* 기본 높이 설정 */
  padding: 10px; /* 패딩 추가 */
  font-size: 1rem; /* 폰트 크기 설정 */
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  resize: none;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* 모바일에서 폰트 크기 증가 */
    height: 150px; /* 모바일에서 높이 증가 */
    padding: 12px; /* 모바일에서 패딩 증가 */
  }
`;

const SubmitButton = styled.button`
  width: 100%; /* 버튼 너비를 가득 채움 */
  padding: 12px; /* 패딩 추가 */
  font-size: 1rem; /* 기본 폰트 크기 */
  border-radius: 4px;
  border: 1px solid lightgray;
  background-color: white;
  color: inherit;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* 모바일에서 폰트 크기 증가 */
    padding: 14px; /* 모바일에서 패딩 증가 */
  }
`;
