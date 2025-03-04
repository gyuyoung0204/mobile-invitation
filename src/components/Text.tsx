import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: 'Times New Roman', serif; /* 클래식한 느낌의 폰트 */
  font-size: 1.5rem; /* 텍스트 크기 조정 */
  margin: 10px;
  color: #9575cd; /* 진한 연보라색 (#9575cd) */
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-family: 'Times New Roman', serif; /* 동일한 클래식 폰트 */
  font-size: 1.0rem; /* 텍스트 크기 조정 */
  margin: 10px;
  color: #2F2120;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: 'Times New Roman', serif; /* 폰트 변경 */
  font-size: 1.0rem; /* 크기를 키워 강조 */
  line-height: 1.2; /* 줄 간격 조정 */
  margin: 0;
  color: #9575cd; /* 진한 연보라색 */
  white-space: pre-line;
`;

export const Paragraph = styled.p`
font-family: 'Times New Roman', serif; /* 동일한 클래식 폰트 */
font-size: 1.2rem; /* 기본 글자 크기 */
line-height: 1.6; /* 줄 간격을 상대적으로 조정 */
color: #2F2120;
white-space: pre-line;
word-break: keep-all; /* 단어가 잘리지 않도록 설정 */

@media (max-width: 768px) {
  font-size: 1rem; /* 모바일에서는 조금 줄임 */
  line-height: 1.8; /* 모바일에서는 줄 간격을 더 넓힘 */
}
`;

export const Paragraph_sub = styled.p`
font-family: 'Times New Roman', serif; /* 동일한 클래식 폰트 */
font-size: 1.2rem; /* 기본 크기 */
font-weight: bold; /* 문구 굵게 설정 */
line-height: 1.6; /* 줄 간격 조정 */
color: #2F2120;
white-space: pre-line;
word-break: keep-all;

@media (max-width: 768px) {
  font-size: 1rem; /* 모바일에서는 글자 크기를 줄임 */
  line-height: 1.8; /* 모바일에서는 줄 간격을 더 넓힘 */
}
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-family: 'Times New Roman', serif; /* 동일한 폰트 */
  font-weight: 400; /* 약간 가벼운 글자 두께 */
  font-size: 0.9rem; /* 크기 조정 */
  color: #2F2120;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
