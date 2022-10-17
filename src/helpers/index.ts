export const convertTime = (
  time12h: string,
  format: '24hr' | 'am/pm' = '24hr'
) => {
  if (format === 'am/pm') {
    const [hour, minutes] = time12h.split(':');
    const hour12 = parseInt(hour) % 12 || 12;
    const ampm = parseInt(hour) <= 12 ? 'AM' : 'PM';
    return `${hour12}:${minutes} ${ampm}`;
  }
  const [time, modifier] = time12h.split(' ');
  const splittedTime = time.split(':');

  let hours = splittedTime[0];
  const minutes = splittedTime[1];

  if (hours === '12' && modifier === 'PM') {
    hours = '00';
  }

  if (modifier === 'PM' || modifier === 'pm') {
    hours = (parseInt(hours, 10) + 12).toString();
  }
  if (hours.length === 1) {
    hours = '0' + hours;
  }

  return `${hours}:${minutes}`;
};
