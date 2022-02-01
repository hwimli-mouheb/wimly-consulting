import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';


const Scroll=()=>{
   
   const useStyles= makeStyles((theme)=>({
    toTop: {
        zIndex: 2,
        
       
        backgroundColor: 'green',
        color: 'green',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'green',
            backgroundColor: 'white'
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
            backgroundColor: '#d4ff03',
        },
        [theme.breakpoints.up('lg')]: {
            right: '6.5%',
        },
    }
})
)
const handleClick=()=>{
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
}
const classes = useStyles();
  return (
  <div>
      <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                    <ExpandLessIcon />
                </IconButton>
  </div>);
}

export default Scroll;
