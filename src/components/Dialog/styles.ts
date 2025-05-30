import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material';
export default makeStyles((theme: Theme) => ({
  dialogPaper: {
    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
      borderRadius: 20,
    },
    borderRadius: 20,
    background: theme.palette.primary.contrastText,
    boxShadow: '0px 18px 32px rgba(208, 210, 218, 0.15)',
    margin: 15,
    '& .MuiDialogContent-root': {
      padding: '2px 8px 0px 8px',
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: theme.shadows[18],
        minHeight: 24,
      },
    },
  },
  dialogPaperFullScreen: {
    borderRadius: 10,
    background: theme.palette.primary.contrastText,
    margin: '20px',
    height: 'calc(100% - 65px)',
    boxShadow: '0px 18px 32px rgba(208, 210, 218, 0.15)',
    '& .MuiDialogContent-root': {
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        backgroundColor: theme.palette.primary.light,
        width: '0.5em',
        height: '0.5em',
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: theme.shadows[18],
        minHeight: 24,
      },
    },
  },
  headerDailog: {
    position: 'relative',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    flexDirection: 'column',
  },
  titleText: {
    textAlign: 'start',
    fontSize: 20,
    padding: '10px 10px 10px 6px',
    color: theme.palette.primary.main,
    '@media (max-width: 550px)': {
      padding: '15px 30px 5px 10px',
    },
    '@media (max-width: 475px)': {
      wordBreak: 'break-word',
    },
    '@media (max-width: 320px)': {
      fontSize: 17,
    },
  },
  subheadingText: {
    textAlign: 'start',
    fontSize: 18,
    padding: '10px 10px 10px 6px',
    fontWeight: 400,
    '@media (max-width: 550px)': {
      padding: '15px 30px 5px 10px',
    },
    '@media (max-width: 475px)': {
      fontSize: 16,
    },
  },
  closeIcon: {
    position: 'absolute',
    cursor: 'pointer',
    top: 12,
    right: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  confirmationBox: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  dialogContainer: {
    padding: '20px 20px 20px 20px',
    '@media (max-width: 300px)': {
      padding: '10px',
    },
  },
}));
