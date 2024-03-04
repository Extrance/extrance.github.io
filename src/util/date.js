import dayjs from "dayjs";

export const toSimpleDateTime = (stringDate) => {
  return stringDate && dayjs(stringDate).isValid()
    ? dayjs(stringDate).format('DD/MM/YYYY - HH:mm:ss')
    : '';
};

export const nowSimpleDateTime = () => {
  return dayjs(dayjs()).format('DD/MM/YYYY - HH:mm:ss');
};

export const nowDateTime = () => {
  return dayjs(dayjs());
};

export const toSimpleDate = (stringDate) => {
  return stringDate && dayjs(stringDate).isValid() ? dayjs(stringDate).format('DD/MM/YYYY') : '';
};

export const dateWithoutTime = (date) => {
  var newDate = new Date(date.getTime());
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const dateMinusDays = (date, numDay) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - numDay);
};

export const dateFormatted = (date) => {
  return new Date(date.format('YYYY/MM/DD'));
};

export const stringToDate = (s) => {
  return new Date(s);
};
