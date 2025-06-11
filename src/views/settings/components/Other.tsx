import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { Button } from 'src/components';
import ConfirmDelete from './ConfirmDelete';
import { useDispatch } from 'react-redux';
import { dialogOpen } from 'src/redux-modules/dialog/Actions';

const Other = () => {
  const dispatch = useDispatch();
  const handleDeleteOpen = () => {
    dispatch(dialogOpen('ConfirmAccountDelete'));
  }
  return (
    <>
      <Box className="flex items-center justify-start">
        <Checkbox
          sx={{
            color: 'red',
            '&.Mui-checked': {
              color: 'red',
            },
          }}
        />
        <Typography>I hereby declare that account to be deleted!</Typography>
      </Box>
      <Box className="absolute! bottom-15 right-20">
        <Button
          label="Delete"
          type="submit"
          onClick={handleDeleteOpen}
          className='bg-[#18a0b9] px-5! text-[#ffffff] mr-5!'
        />
      </Box>
      <ConfirmDelete />
    </>
  )
}

export default Other;