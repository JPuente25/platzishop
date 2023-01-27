export const getDateFormatted = () => {
   const date = new Date();
   const day = fill(date.getDate());
   const month = fill(date.getMonth() + 1);
   const year = date.getFullYear();

   const formattedDate = `${day}.${month}.${year}`;
   return formattedDate;
};

const fill = (value: number) => (
   (value.toString().length < 2)
      ?  `0${value}`
      : value.toString()
);

//GET A STRING FOR ACTUAL DATE: dd.mm.yyyy