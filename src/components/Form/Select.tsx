import { Autocomplete, SelectProps } from "@mui/material";
import { Controller } from "react-hook-form";

export const Select: React.FC<SelectProps> = ({control, name}) => {
    return (
        <Controller
            name={name}
            control={control}
        />
        <Autocomplete/>
    )
};
