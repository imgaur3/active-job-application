import React from 'react';
import WrapperDialog from '../../.././../../components/Dialog';
import { useDispatch } from 'react-redux';
import { dialogClose } from '../../../../../redux-modules/dialog/Actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCompany } from './validations';

const AddCompany = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(dialogClose(''));
  };

  const { handleSubmit, getValues } =
    useForm({
      mode: 'onChange',
      resolver: yupResolver(validateCompany),
    });

  const onSubmit = () => {
    const formData = { ...getValues() };
    // eslint-disable-next-line no-undef
    console.log('Form Data:', formData);
  };
  return (
    <WrapperDialog
      id='applicationDialog'
      maxWidth='sm'
      title="Add Company"
      handleClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>

      </form>
    </WrapperDialog>
  )
}
export default AddCompany;