import classes from './MidNavbar.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import {useState} from 'react';

export default function MidNavbar(props) {

    return (
        <div className={classes.midnavbar}>
            <section className={classes.image}></section>
            <span className={classes.text}>
                <h3 style={{color: `#${props.headingColor}`}}>{props.headingText}</h3>
                <span>
                    <p style={{ color: `#${props.nameColor}`}}>{props.name}</p>
                    <span>
                        <ul>
                            <li className={classes.textP1}><LocationOnIcon style={{fontSize: '18px', fill:`#${props.locationIconColor}`}} /><p style={{color: `#${props.locationColor}`}} className={classes.textl1}>{props.locationText}</p></li>
                            
                            <li className={classes.textP2}><CheckCircleIcon style={{fontSize: '16px', fill:`#${props.gstIconColor}`}} /><p style={{color: `${props.gstColor}`}} className={classes.textl2}>GST. {props.gstText}</p></li>
                           
                                 <li className={classes.textP3}>
                                 <CheckCircleIcon style={{fontSize: '16px', fill:`#${props.trustsealIconColor}`}} /><p 
                                 style={{color: `${props.trustsealColor}`}} className={classes.textl3}>TRUSTSEAL VERIFIED</p></li>
                                
                        </ul>
                    </span>
                </span>
            </span>
            <span style={{backgroundColor: `#${props.phoneBgColor}`,
            color: `#${props.phoneColor}`
        }} className={classes.call}>
                <CallIcon style={{fontSize: '42px', fill:`#${props.phoneIconColor}`}} />
                <div>
                    <p>CALL +91-{props.phone}</p>
                    <p style={{color:`#${props.responseRateColor}`}}> {props.responseRateText} % Response Rate</p>
                </div>
            </span>
        </div>
    )
}
