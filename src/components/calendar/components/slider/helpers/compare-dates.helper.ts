const compareDates = (date1: Date, date2: Date) => {
  const firstDateYear = date1.getFullYear();
  const firstDateMonth = date1.getMonth();
  const firstDateDay = date1.getDate();

  const secondDateYear = date2.getFullYear();
  const secondDateMonth = date2.getMonth();
  const secondDateDay = date2.getDate();

  return (
    firstDateYear === secondDateYear &&
    firstDateMonth === secondDateMonth &&
    firstDateDay === secondDateDay
  );
};

export { compareDates };
