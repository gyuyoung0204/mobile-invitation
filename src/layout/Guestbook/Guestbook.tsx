
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';
import './Guestbook.css';
const Guestbook = () => {
  return (
    <div className="location-container">
      <Heading2>
      신랑 신부에게 메시지를 남겨주세요.
      </Heading2>
      <CommentForm />
    
    </div>

  );
};

export default Guestbook;

