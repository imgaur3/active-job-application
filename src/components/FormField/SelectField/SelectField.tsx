import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { FieldLabel } from '../FormFieldLabel';
import { Control, Controller, FieldValues } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

type MultiSelectChipProps = {
    name: string;
    label: string;
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    width?: number | string;
    required?: boolean;
    control: Control<FieldValues>;
    defaultValue?: string[];
};

function getStyles(name: string, selected: readonly string[], theme: Theme) {
    return {
        fontWeight: selected.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

const MultiSelectChip: React.FC<MultiSelectChipProps> = ({
    name,
    label,
    options,
    selected,
    required = false,
    onChange,
    control,
    defaultValue,
}) => {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<typeof selected>) => {
        const {
            target: { value },
        } = event;
        onChange(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Box>
            {label && <FieldLabel text={label} required={required} />}
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue || ''}
                render={({ field }) => (
                    <Box sx={{
                        '& .MuiOutlinedInput-input': {
                            padding: 1.1,
                        }
                    }}>
                        <Select
                            {...field}
                            multiple
                            className='w-full!'
                            value={field.value || []}
                            onChange={e => field.onChange(e.target.value)}
                            sx={{
                                '&  .MuiOutlinedInput-input': {
                                    padding: '10px',
                                    borderColor: '#000000'
                                }
                            }}
                            input={<OutlinedInput label={label} />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {options.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selected, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                )}
            />
        </Box>
    );
};

export default MultiSelectChip;
