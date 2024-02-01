const getFormatterMonthYear = (locale: string | undefined, date: Date) => {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(date);
};

export { getFormatterMonthYear };
