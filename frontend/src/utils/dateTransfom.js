export const transformDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const getUpdatesArray = (updates) => {
  let updatesArray = [];

  if (typeof updates === "object" && updates !== null) {
    updatesArray = Object.values(updates);

    updatesArray.forEach((update) => {
      update.data = transformDate(update.data);
    });

    updatesArray.sort((a, b) => new Date(b.data) - new Date(a.data));

    updatesArray.forEach((update) => {
      update.data = update.data.split("-").reverse().join("/");
    });
  }

  return updatesArray;
};