
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';
import './Guestbook.css';
const Guestbook = () => {
  return (
    <div className="location-container">
      <Heading2>
        메시지를 남겨주세요.
        <br />
        결혼식 하루 뒤, 신랑 신부에게 전달됩니다.
      </Heading2>
      <CommentForm />
    </div>
  );
};

export default Guestbook;

