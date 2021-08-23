import { DateTime } from 'luxon';
import { FC, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import styles from './Calendar.module.css';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from 'config/calendar';

const Calendar: FC = () => {
  const now = new Date();
  const [selectedDay, setSelectedDay] = useState(now);

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  const dt = DateTime.fromJSDate(selectedDay);
  const formatted = dt.toLocaleString(DateTime.DATE_MED);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <span className={styles.headingTitle}>Fecha de cálculo</span>
        <span className={styles.headingData}>{formatted}</span>
      </div>
      <DayPicker
        locale="es"
        months={MONTHS}
        firstDayOfWeek={1}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        onDayClick={handleDayClick}
        selectedDays={selectedDay}
        disabledDays={{ before: now }}
      />
    </div>
  );
};

export default Calendar;
