import './App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, TextField, Select, InputBase, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    width: '50%'
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
  },
  headerText: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
			textAlign: 'center',
    },
    fontSize: 30,
    fontFamily: 'Open Sans, Bold',
    color: '#001C21',
    fontWeight: 'bold',
    margin: 3,
    letterSpacing: 0.3
  },
  birthdayText: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Open Sans, Bold',
    color: '#001C21',
    margin: 3,
    fontWeight: 'bold',
    letterSpacing: 0.3
  },
  labelText: {
    textAlign: 'left',
    fontSize: 12,
    fontFamily: 'Open Sans, Regular',
    color: '#8E8E8E',
    margin: 10,
    marginTop: 8,
    letterSpacing: 0.6
  },
  termsText: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    fontSize: 8,
    fontFamily: 'Open Sans, Regular',
    color: '#8E8E8E',
    margin: 10,
    marginTop: 8,
    letterSpacing: 0.6,
    width: 300
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    height: 39,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
    fontSize: 14,
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  signupButton: {
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,  
      width: '100%'
    },
    backgroundColor: '#006A7C',
    borderRadius: 10,
    color: 'white',
    height: 54,
    padding: '0 30px',
    textTransform: 'none',
    fontSize: 20,
    fontFamily: 'Open Sans, Regular'
  },
  stepCompRadLeft: {
    [theme.breakpoints.down('sm')]: {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      width: '25%'
    },
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#4AE3A8',
    width: 96,
    height: 14,
    margin: 2,
  },
  stepCompMid: {
    backgroundColor: '#B1B1B1',
    width: 96,
    height: 14,
    margin: 2,
    [theme.breakpoints.down('sm')]: {
      width: '25%'
    },
  },
  stepCompRadRight: {
    [theme.breakpoints.down('sm')]: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      width: '25%'
    },
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#B1B1B1',
    width: 96,
    height: 14,
    margin: 2,
  },
  stepsContainer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
}));

const CssTextField = withStyles({
  root: {
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    margin: 10,
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      height: 39,
      fontSize: 14,
      '& fieldset': {
        borderColor: '#CCCCCC',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const GenderInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width: 120,
    '& .MuiSelect-icon': {
      right: 12
    }
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    margin: 10,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 10,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const DayInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width: 80,
    '& .MuiSelect-icon': {
      right: 12
    }
  },
  input: {
    backgroundColor: '#FAFAFA',
    margin: 10,
    marginLeft: 2,
    marginRight: 2,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 10,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const MonthInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width: 80,
    '& .MuiSelect-icon': {
      right: 12
    }
  },
  input: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#FAFAFA',
    margin: 10,
    marginRight: 2,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 10,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const YearInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width: 80,
    '& .MuiSelect-icon': {
      right: 12
    }
  },
  input: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#FAFAFA',
    margin: 10,
    marginLeft: 2,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 10,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Typography className={classes.headerText}>
          Create an account
        </Typography>

        <Typography className={classes.labelText}>
          What is your name? This is just for us and will not be public.
        </Typography>
        <CssTextField placeholder="Display Name" variant="outlined" />

        <Typography className={classes.labelText}>
          Pick a username and we'll let you know if it is available.
        </Typography>
        <CssTextField placeholder="Username" variant="outlined" />

        <Typography className={classes.labelText}>
          What is your gender?
        </Typography>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          defaultValue="Male"
          input={<GenderInput />}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>

        <Typography className={classes.labelText}>
          How can we contact you? We'll send you a code to verify your email address.
        </Typography>
        <CssTextField placeholder="Email Address" type="email" variant="outlined" />

        <Typography className={classes.labelText}>
          Now pick a strong password you will remember.
        </Typography>
        <CssTextField placeholder="Password" variant="outlined" />
        <CssTextField placeholder="Confirm Password" variant="outlined" />

        <Typography className={classes.birthdayText}>
          Birthday
        </Typography>
        <Typography className={classes.labelText}>
          Must be at least 13 years old to sign up for Black Planet. Younger users are not permitted.
        </Typography>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          defaultValue="Jan"
          input={<MonthInput />}
        >
          <MenuItem value="Jan">Jan</MenuItem>
          <MenuItem value="Feb">Feb</MenuItem>
          <MenuItem value="Mar">Mar</MenuItem>
          <MenuItem value="Apr">Apr</MenuItem>
          <MenuItem value="May">May</MenuItem>
          <MenuItem value="Jun">Jun</MenuItem>
          <MenuItem value="Feb">Feb</MenuItem>
        </Select>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          defaultValue="01"
          input={<DayInput />}
        >
          <MenuItem value="01">01</MenuItem>
          <MenuItem value="02">02</MenuItem>
          <MenuItem value="03">03</MenuItem>
          <MenuItem value="04">04</MenuItem>
          <MenuItem value="05">05</MenuItem>
          <MenuItem value="06">06</MenuItem>
          <MenuItem value="07">07</MenuItem>
          <MenuItem value="08">08</MenuItem>
          <MenuItem value="09">09</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          
        </Select>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          defaultValue="1990"
          input={<YearInput />}
        >
          <MenuItem value="1990">1990</MenuItem>
          <MenuItem value="1991">1991</MenuItem>
          <MenuItem value="1992">1992</MenuItem>
          <MenuItem value="1993">1993</MenuItem>
          <MenuItem value="1994">1994</MenuItem>
          <MenuItem value="1995">1995</MenuItem>
          <MenuItem value="1996">1996</MenuItem>
          <MenuItem value="1997">1997</MenuItem>
        </Select>

        <div className={classes.signupContainer}>
          <Typography className={classes.termsText}>
            By clicking Sign up, you agree to out <strong>Terms, Data Policy and Cookies Policy</strong>.
          </Typography>

          <Button variant="contained" className={classes.signupButton}>
            Sign up
          </Button>
        </div>
        <div className={classes.stepsContainer}>
          <div className={classes.stepCompRadLeft}></div>
          <div className={classes.stepCompMid}></div>
          <div className={classes.stepCompMid}></div>
          <div className={classes.stepCompRadRight}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
