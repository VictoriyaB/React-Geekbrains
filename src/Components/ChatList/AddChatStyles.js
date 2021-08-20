import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    inputRoot: {
        width: '120px',
        background: '#9e9e9e',
        borderRadius: '4px',
        marginRight: '5px', 
        '& label.MuiFormLabel-root': {color: '#fafafa', fontSize: 12},
        '& label.Mui-focused': {color: '#fafafa'},
        '& .MuiFilledInput-underline:after': {borderColor: '#fafafa'},
        '& .MuiInputBase-input': {color: '#fafafa'},
        '& .MuiFilledInput-inputMarginDense': {paddingTop: '20px'}
    },
    
    buttonRoot: {
        background: '#f44336', 
        '&:hover': {background: '#e53935'},
        color: '#fafafa',
        fontSize: 10,
    }
});

export const inputProps = {
    label: 'Add a chat name', 
    variant: 'filled',
    size: 'small',
};

export const buttonProps = 'Save';