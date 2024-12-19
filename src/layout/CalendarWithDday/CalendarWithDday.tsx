import  { useEffect, useState } from 'react';
import './CalendarWithDday.css';

const CalendarWithDday = () => {
  const weddingDate = new Date('2025-04-12'); // 결혼 날짜
  const today = new Date();
  const [daysLeft, setDaysLeft] = useState(0);

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

    // 빈 칸 생성
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // 날짜 생성
    for (let day = 1; day <= daysInMonth; day++) {
      const isWeddingDay = day === weddingDate.getDate();
      calendarDays.push(
        <div
          key={day}
          className={`calendar-day ${isWeddingDay ? 'highlight' : ''}`}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="month-title">
          {weddingDate.toLocaleString('ko-KR', { month: 'long', year: 'numeric' })}
        </div>
        <div className="calendar-grid">{generateCalendar()}</div>
      </div>
      <div className="dday-message">
        💍 D-Day: {daysLeft > 0 ? `D-${daysLeft}` : daysLeft === 0 ? '오늘' : `D+${-daysLeft}`}
      </div>
    </div>
  );
};

     //    김동규 ♥ 황주영 의 결혼식 {daysLeft > 0 ? `${daysLeft}일 전` : daysLeft === 0 ? '오늘' : `${-daysLeft}일 지남`}
export default CalendarWithDday;
