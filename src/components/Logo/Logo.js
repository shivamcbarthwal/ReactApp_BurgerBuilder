import React from 'react';
import classes from './Logo.module.css';
import Logo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Logo} alt="MyBurger" />
    </div>
);

export default logo;