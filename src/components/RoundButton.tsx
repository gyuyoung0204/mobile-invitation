import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  background-color: #9575cd;
`.withComponent('a');

export default RoundButton;
