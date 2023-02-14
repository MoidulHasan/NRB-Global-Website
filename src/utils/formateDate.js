export const formateDate = (date) => {
  const nDate = new Date(date);

  if (nDate.getMonth() < 10) {
    return (
      nDate.getDate() +
      '/' +
      0 +
      (nDate.getMonth() + 1) +
      '/' +
      nDate.getFullYear()
    );
  } else {
    return (
      nDate.getDate() + '/' + (nDate.getMonth() + 1) + '/' + nDate.getFullYear()
    );
  }
};
