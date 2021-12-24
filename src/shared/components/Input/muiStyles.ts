export const MuiInputStyles = {
  root: {
    "&.MuiOutlinedInput-root": {
      width: "150px",

      "& .MuiOutlinedInput-input": {
        backgroundColor: "grey",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
      },
    },
  },

  error: {
    "&.MuiOutlinedInput-root .MuiOutlinedInput-input": {
      backgroundColor: "red",
    },
  },
};
