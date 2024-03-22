// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                size: "small",
                InputLabelProps: { shrink: true },
                InputProps: { notched: false }
            },
            styleOverrides: {
                root: {
                    "& .MuiInputLabel-root": {
                        transform: 'none',
                        position: "static",
                        marginBottom: 5,
                        marginTop: 5
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderWidth: '1px', // Increase the border width
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '5px', // Increase the border width when focused
                        },
                    },
                }
            }
        }

    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
