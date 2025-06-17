// components/ControlledSwitch.tsx
import * as React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

interface ControlledSwitchProps {
    name: string;
    control: Control<FieldValues>;
    label?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    checked: boolean;
    onChange?: any; //eslint-disable-line
}

const SwitchButton: React.FC<ControlledSwitchProps> = ({
    name,
    control,
    label,
    defaultValue = false,
    disabled = false,
}) => {
    return (
        <Controller
            name="status"
            control={control as unknown as Control<FieldValues>}
            defaultValue={false}
            render={({ field }) => (
                <>
                    <Switch
                        sx={{
                            '& .MuiSwitch-switchBase': {
                                color: '#11a5bd',
                            },
                        }}
                        {...field}
                        checked={!!field.value}
                        onChange={e => {
                            field.onChange(e.target.checked);
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: 'Albert Sans',
                            color: field.value ? 'green' : 'red',
                            fontWeight: 400,
                        }}
                    >
                        {field.value ? 'Active' : 'In-Active'}
                    </Typography>
                </>
            )}
        />)
}


export default SwitchButton;
