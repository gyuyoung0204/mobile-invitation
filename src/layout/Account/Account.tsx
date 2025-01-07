import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Account = () => {
  const { hostInfo } = data;

  // AOS 초기화
  useEffect(() => {
    AOS.init({
      duration: 1500, // 애니메이션 지속 시간
      offset: 100,    // 애니메이션 시작 위치
      easing: 'ease-in-out', // 부드러운 애니메이션
      once: true,     // 한 번만 실행
    });
    AOS.refresh(); // 동적 콘텐츠 업데이트 시 리프레시
  }, []);

  return (
    <HostInfoWrapper data-aos="fade-up" data-aos-delay="0">
      {hostInfo.map((host, index) => {
        return (
          <Accordion
            title={host.host}
            key={host.host}
            data-aos="fade-up"
            data-aos-delay={`${100 + index * 100}`} // 순차적으로 딜레이 증가
          >
            {host.accountInfo.map((account, subIndex) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                  data-aos="fade-up"
                  data-aos-delay={`${200 + subIndex * 100}`} // 순차적으로 딜레이 증가
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`;
