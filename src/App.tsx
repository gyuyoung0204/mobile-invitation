import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import styled from '@emotion/styled'; // 추가된 스타일링을 위해 임포트
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import FlowerFalling from '@/layout/FlowerFalling/FlowerFalling.tsx';
// import MusicPlayer from '@/layout/MusicPlayer/MusicPlayer.tsx';
import CalendarWithDday from '@/layout/CalendarWithDday/CalendarWithDday.tsx';


function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const checkScrollPosition = () => {
      if (galleryRef.current) {
        const { offsetTop } = galleryRef.current;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= offsetTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <FlowerFalling /> 
     
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <CustomHeading1>모시는 글</CustomHeading1>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <CustomHeading1>안내</CustomHeading1>
          <CalendarWithDday />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <CustomHeading1>Gallery</CustomHeading1>
          <GalleryWrap />
        </Wrapper>       
        <Wrapper>
          <CustomHeading1>마음 전하실 곳</CustomHeading1>
          <Account />
        </Wrapper>
        <Wrapper>
          <CustomHeading1>오시는 길</CustomHeading1>
          <Location />
        </Wrapper>
        <Wrapper>
          <CustomHeading1>신랑 신부에게</CustomHeading1>
          <Guestbook /> 
            </Wrapper>
          <Wrapper>
         <CustomHeading2>Copyright 2024. GYUDONG. all rights reserved.</CustomHeading2>
        </Wrapper>
        
        <FloatingBar isVisible={isVisible} />
      
      </Container>
      
    </NavermapsProvider>
  );
}

export default App;

const CustomHeading1 = styled(Heading1)`
  font-family: 'Times New Roman', serif; /* 클래식 폰트로 변경 */
`;
const CustomHeading2 = styled(Heading1)`
font-family: 'Times New Roman', serif; /* 동일한 클래식 폰트 */
font-size: 1.0rem; /* 텍스트 크기 조정 */
margin: 10px;
color: #2F2120;
white-space: pre-line;
`;

