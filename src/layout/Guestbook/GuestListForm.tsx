import { useEffect, useState } from 'react';
import { ref, onChildAdded } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';
import styled from '@emotion/styled';

interface GuestbookMessage {
  id: string;
  sender: string;
  message: string;
  date: string;
}
const GuestListForm = () => {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [loadedKeys, setLoadedKeys] = useState<Set<string>>(new Set()); // 이미 로드된 키 추적

  useEffect(() => {
    const guestbookRef = ref(realtimeDb, 'guestbook');

    // Firebase에서 데이터 실시간으로 가져오기
    const unsubscribe = onChildAdded(guestbookRef, (snapshot) => {
      const data = snapshot.val();
      const id = snapshot.key; // 고유 키

      // 중복된 데이터 방지
      if (id && !loadedKeys.has(id)) {
        setLoadedKeys((prevKeys: Set<string>) => new Set(prevKeys).add(id));
        setMessages((prevMessages: GuestbookMessage[]) => {
          const newMessages = [
            ...prevMessages,
            { id, ...data },
          ];

          // 날짜 순으로 정렬
          return newMessages.sort((b, a) => a.createdAt - b.createdAt);
        });
      }
    });

    // 컴포넌트 언마운트 시 리스너 정리
    return () => unsubscribe();
  }, [loadedKeys]);

  return (
    <GuestbookWrapper>
      {messages.length > 0 ? (
        messages.map((msg: GuestbookMessage) => (
          <MessageItem key={msg.id}>
            <Sender>{msg.sender}</Sender>
            <MessageText>{msg.message}</MessageText>
            <DateText>{msg.date}</DateText>
          </MessageItem>
        ))
      ) : (
        <EmptyMessage>아직 작성된 방명록이 없습니다. 첫 메시지를 남겨보세요! 😊</EmptyMessage>
      )}
    </GuestbookWrapper>
  );
};

export default GuestListForm;

// 스타일 정의
const GuestbookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 입력 필드 간 간격 증가 */
  align-items: center;
  width: 100%; /* 전체 화면 너비에 맞춤 */
  max-width: 600px; /* 데스크톱에서 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  box-sizing: border-box;
`;

const MessageItem = styled.div`
  margin-bottom: 16px;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Sender = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const MessageText = styled.div`
  font-size: 1rem;
  margin-bottom: 4px;
  color: #555;
`;

const DateText = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const EmptyMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #666;
`;
