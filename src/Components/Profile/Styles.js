import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    inputRoot: {
        width: '20%',
        background: '#9e9e9e',
        borderRadius: '4px',
        marginRight: '10px', 
        '& label.MuiFormLabel-root': {color: '#fafafa', fontSize: 12},
        '& label.Mui-focused': {color: '#fafafa'},
        '& .MuiFilledInput-underline:after': {borderColor: '#e53935'},
        '& .MuiInputBase-input': {color: '#fafafa'}
    },
    
    buttonRoot: {
        background: '#f44336', 
        '&:hover': {background: '#e53935'},
        color: '#fafafa',
        fontSize: 10
    }
});

export const inputProps = {
    label: 'Add a name to save', 
    variant: 'filled',
    size: 'small',
};

export const buttonProps = 'Save';