import { Box } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Control, Controller, FieldValues } from "react-hook-form";

interface FormInputProps extends Omit<TextFieldProps, "name"> {
    name: string;
    label?: string;
    control: Control<FieldValues>;
    placeholder?: string;
    defaultValue?: string;
    onKeyDown?: () => void;
    onInputChange?: () => void;
}

const DateField = ({
    name,
    required = false,
    label,
    control,
}: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Box display="flex" alignItems="center" mb={2}>
                    <TextField
                        variant="outlined"
                        sx={{ width: "100%"}}
                        type="date"
                        label={label}
                        required={required}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        InputLabelProps={{
                            shrink: true,
                            sx: {
                                width: "100%",
                                marginTop: -1,
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                color: "primary.main",
                                "& .Mui-focused": {
                                    color: "primary.main",
                                },
                            },
                        }}
                    />
                </Box>
            )}
        />
    );
};

export default DateField;
