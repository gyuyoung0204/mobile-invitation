import './Account.css';
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
    <div className="wrapper">
      <div className="info">
        <span className="relation">{relation}</span>
        <span className="name">{name}</span>
      </div>
      <div className="details">
        <div className="account-info">
          {bank} {account}
        </div>
        <button className="copy-button" onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </button>
      </div>
      <div className="account-links">
        {kakaopayAccount && (
          <a
            className="account-button"
            href={kakaopayAccount}
            target="_blank"
            rel="noreferrer"
          >
            <img className="kakaopay-img" src={kakaopay} alt="kakaopay" />
          </a>
        )}
        {tossAccount && (
          <a
            className="account-button"
            href={tossAccount}
            target="_blank"
            rel="noreferrer"
          >
            <img className="toss-img" src={toss} alt="toss" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AccountWrap;
