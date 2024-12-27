import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';
import toss from '@/assets/icons/toss.png?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}

const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </CopyButton>
      </Details>
      <AccountLinks>
        {kakaopayAccount && (
          <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
            <KakaopayImg src={kakaopay} alt="kakaopay" />
          </AccountButton>
        )}
        {tossAccount && (
          <AccountButton href={tossAccount} target="_blank" rel="noreferrer">
            <TossImg src={toss} alt="toss" />
          </AccountButton>
        )}
      </AccountLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'SUITE-Regular';
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  width: 100%; /* 너비를 화면 가득 채우기 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 15px; /* 모바일에서 패딩 추가 */
  }
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
  width: 100%; /* 너비 조정 */

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서 세로 정렬 */
    align-items: flex-start;
  }
`;

const Relation = styled.span`
  color: #44484d;
`;

const Name = styled.span`
  font-size: 1rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* 너비를 화면 가득 채우기 */

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서 세로 정렬 */
    align-items: flex-start;
  }
`;

const AccountInfo = styled.div``;

const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;

const AccountLinks = styled.div`
  display: flex;
  width: 100%; /* 링크 섹션 가득 채우기 */
  gap: 5px; /* 버튼 간격 증가 */

  @media (max-width: 768px) {
    flex-wrap: wrap; /* 모바일에서 버튼이 여러 줄로 배치될 수 있도록 설정 */
    justify-content: center; /* 가운데 정렬 */
  }
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 0.8em;
  width: 100%; /* 버튼 가득 채우기 */
  max-width: 150px; /* 버튼 최대 너비 제한 */
  font-size: 0.8rem; /* 폰트 크기 조금 증가 */
  cursor: pointer;
  gap: 5px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: white;
`.withComponent('a');

const KakaopayImg = styled.img`
  width: 50px;

  @media (max-width: 768px) {
    width: 40px; /* 모바일에서 이미지 크기 축소 */
  }
`;

const TossImg = styled.img`
  width: 70px;

  @media (max-width: 768px) {
    width: 60px; /* 모바일에서 이미지 크기 축소 */
  }
`;

export default AccountWrap;
