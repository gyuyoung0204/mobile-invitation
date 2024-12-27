import styled from '@emotion/styled';

const Button = styled.button`
font-family: 'Times New Roman', serif; /* 클래식한 느낌의 폰트 */
  padding: 0.5em 0.8em;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 2px;
`.withComponent('a');

export default Button;
