import classes from './TopNavbar.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TopNavbar(props) {
    return (
        <div style={{backgroundColor:`#${props.bgColor}`}} className={classes.topnavbar}>
            <span style={{backgroundColor:`#${props.gstBgColor}`, color: `#${props.gstColor}`}}>
                <CheckCircleIcon style={{color: `#${props.gstIconColor}`}}/>
                GST {props.gstText}
            </span>
        </div>
    )
}
