import cn from 'classnames';
import { DateTime } from 'luxon';
import { FC, useState } from 'react';
import { Calendar as AntdCalendar } from 'antd';
import { DownOutlined } from '@ant-design/icons';

/**
 * (ノ=Д=)ノ┻━┻
 */
import 'antd/lib/select/style/index.css';
import 'antd/lib/radio/style/index.css';
import 'antd/lib/date-picker/style/index.css';
import 'antd/lib/calendar/style/index.css';

import styles from './Calendar.module.css';

interface Props {
  onSelect: (date: Date) => void;
}

const Calendar: FC<Props> = ({ onSelect }) => {
  const now = new Date();
  const [isOpen, toggleOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(now);

  const handleDayClick = (date: moment.Moment) => {
    const day = date.toDate();
    onSelect(day);
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
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarTrigger}>
          <span
            role="checkbox"
            aria-checked={isOpen}
            className={styles.calendarTrigger}
            onClick={() => {
              toggleOpen(!isOpen);
            }}
          >
            <span className={cn(styles.caret, { [styles.caretUp]: isOpen })}>
              <DownOutlined />
            </span>
            Calcular con otra fecha
          </span>
        </div>
        <div className={cn({ [styles.calendarExpanded]: isOpen }, styles.calendarTransition)}>
          <AntdCalendar fullscreen={false} onSelect={handleDayClick} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
