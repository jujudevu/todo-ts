export const MuiInputStyles = {
    root: {
        "&.MuiOutlinedInput-root": {
            marginBottom: "10px",

            "& .MuiOutlinedInput-input": {
                backgroundColor: "#ffe8fe",

                "&:-webkit-autofill": {
                    WebkitBoxShadow: '0 0 0 100px #ffe8fe inset',
                    WebkitTextFillColor: '#20222a',
                }
            },

            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ba68c8",
            },
        },
    },
    error: {
        "&.MuiOutlinedInput-root .MuiOutlinedInput-input": {
            backgroundColor: "rgba(255,114,51,0.64)",
            borderRadius: "5px",
        },
    },
    button: {
        "&.MuiButton-root": {
            backgroundColor: "#ffeb0054",
            maxWidth: "150px",
            width: "100%",
            margin: "0 auto",

            "&:hover": {
                backgroundColor: "gold",
            }
        }
    }
};
