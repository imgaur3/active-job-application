import * as React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Countries } from 'src/common/utils/constants';

interface Country {
    code: string;
    label: string;
    phone: string;
}

interface CountrySelectProps {
    name: string;
    control: Control<FieldValues>;
    countries: Country[];
    label?: string;
    defaultValue?: Country | null;
    disabled?: boolean;
    getOptionLabel?: any; //eslint-disable-line
    isOptionEqualToValue?: any; //eslint-disable-line


}

const AutocompleteField: React.FC<CountrySelectProps> = ({
    name,
    control,
    label = 'Choose a country',
    defaultValue = null,
    disabled = false,
    getOptionLabel,
    isOptionEqualToValue,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <Autocomplete
                    options={Countries}
                    autoHighlight
                    getOptionLabel={getOptionLabel}
                    // isOptionEqualToValue={(option, value) => option.code === value?.code}
                    isOptionEqualToValue={isOptionEqualToValue}
                    value={field.value}
                    onChange={(_, value) => field.onChange(value)}
                    disabled={disabled}
                    renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                            <Box
                                key={key}
                                component="li"
                                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                {...optionProps}
                            >
                                <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    alt=""
                                />
                                {option.label} ({option.code}) +{option.phone}
                            </Box>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                            }}
                        />
                    )}
                />
            )}
        />
    );
};

export default AutocompleteField;
