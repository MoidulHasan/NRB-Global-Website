export const formateDate = (date) => {
  const nDate = new Date(date);

  return (
    nDate.getDate() + '/' + nDate.getMonth() + 1 + '/' + nDate.getFullYear()
  );
};
