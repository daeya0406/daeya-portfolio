import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatDate = (value: string | number | Date, format = 'YYYY-MM-DD') =>
  dayjs(value).format(format);

export const fromNow = (value: string | number | Date) => dayjs(value).fromNow();
