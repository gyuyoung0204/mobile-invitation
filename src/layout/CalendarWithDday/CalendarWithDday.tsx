import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './CalendarWithDday.css';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간
  offset: 100,    // 애니메이션 시작 위치
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 애니메이션 한 번만 실행
});

const CalendarWithDday = () => {
  const weddingDate = new Date('2025-04-12'); // 결혼 날짜
  const today = new Date();
  const [daysLeft, setDaysLeft] = useState(0);

  // 강조할 특정 날짜 (예: 빨간날)
  const holidays = ['2025-04-06', '2025-04-13', '2025-04-20', '2025-04-27']; // yyyy-MM-dd 형식

  useEffect(() => {
    const timeDiff = weddingDate.getTime() - today.getTime();
    const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 남은 일수 계산
    setDaysLeft(remainingDays);
  }, [weddingDate]);

  const generateCalendar = () => {
    const year = weddingDate.getFullYear();
    const month = weddingDate.getMonth(); // 월 (0부터 시작)
    const firstDay = new Date(year, month, 1).getDay(); // 해당 월의 첫 번째 요일
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 월의 총 일수

    const calendarDays = [];

    // 요일 헤더 생성
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    weekDays.forEach((day, index) => {
      calendarDays.push(
        <div
          key={`weekday-${index}`}
          className="calendar-day header"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {day}
        </div>
      );
    });

    // 빈 칸 생성
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(
        <div
          key={`empty-${i}`}
          className="calendar-day empty"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
      );
    }

    // 날짜 생성
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isWeddingDay = day === weddingDate.getDate();
      const isHoliday = holidays.includes(dateString);

      calendarDays.push(
        <div
          key={day}
          className={`calendar-day ${isWeddingDay ? 'highlight' : ''} ${isHoliday ? 'holiday' : ''}`}
          data-aos="fade-up"
          data-aos-delay={`${200 + day * 10}`} // 날짜마다 지연 시간 증가
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="calendar-container" data-aos="fade-up" data-aos-delay="0">
      <div className="calendar">
        <div
          className="month-title"
          data-aos="fade-down"
          data-aos-delay="0"
        >
          {weddingDate.toLocaleString('ko-KR', { month: 'long', year: 'numeric' })}
        </div>
        <div className="calendar-grid">{generateCalendar()}</div>
      </div>
      <div
        className="dday-message"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        동규와 주영이의 결혼식{' '}
        <span style={{ color: '#9575cd', fontWeight: 'bold' }}>
          {daysLeft > 0 ? `${daysLeft}` : daysLeft === 0 ? '오늘' : `D+${-daysLeft}`}
        </span>{' '}
        일 전💍
      </div>
    </div>
  );
};

export default CalendarWithDday;
