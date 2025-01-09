import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="#b39ddb" />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
font-family: 'Times New Roman', serif; /* 클래식한 느낌의 폰트 */
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    margin-bottom: 15px; /* 모바일에서 마진 축소 */
  }
`;


const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #9575cd;
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: #ffffff ;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }

  @media (max-width: 600px) {
    padding: 10px 20px; /* 패딩 확대 */
    & > p {
      font-size: 18px; /* 모바일에서 텍스트 크기 증가 */
    }
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff ;

  @media (max-width: 600px) {
    font-size: 16px; /* 모바일에서 글자 크기 증가 */
    padding: 15px 25px; /* 패딩 확대 */
  }
`;
