import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Address = () => {
  const { locationInfo } = data;

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
    <WayWrapper data-aos="fade-up" data-aos-delay="0">
      {locationInfo?.map((item: ILocationInfo, index) => {
        const { title, desc } = item;
        return (
          <Way key={title} data-aos="fade-up" data-aos-delay={`${100 + index * 100}`}>
            <PointTitle>{title}</PointTitle>
            <Caption>{desc}</Caption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
