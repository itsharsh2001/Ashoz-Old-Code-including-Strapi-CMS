import classes from "./LeftSidebar.module.css";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { connect } from "react-redux"
import { setInfo } from "../../../redux/actions/main"

function LeftSidebar(props) {

  const { shopIndex, setInfo } = props

  const prevShopHandler = () =>{
    if(shopIndex==0){
      return
    }
    const newShopIndex = shopIndex - 1
    setInfo(newShopIndex)
    
  }
  

  return (
    <div className={classes.sidebar}>
      <div>
        <span style={{backgroundColor:`#${props.rectangleBgColor}`, color:`#${props.rectangleColor}`}}>About US</span>
      </div>
      <section>
        <p style={{color: `#${props.yearQuestionColor}`}}>Year of Establishment?</p>
        <p style={{color: `#${props.yearAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.yearAnswerIconColor}`, marginRight: "7px" }} />
          {props.yearAnswerText}
        </p>

        <p style={{color: `#${props.legalQuestionColor}`}}>Legal status of firm individual?</p>
        <p style={{color: `#${props.legalAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.legalAnswerIconColor}`, marginRight: "7px" }} />
          {props.legalAnswerText}
        </p>

        <p style={{color: `#${props.natureQuestionColor}`}}>Nature of Business?</p>
        <p style={{color: `#${props.natureAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.natureAnswerIconColor}`, marginRight: "7px" }} />
          {props.natureAnswerText}
        </p>

        <p style={{color: `#${props.employeeQuestionColor}`}}>No. of Employees?</p>
        <p style={{color: `#${props.employeeAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.employeeAnswerIconColor}`, marginRight: "7px" }} />
          {props.employeeAnswerText} people
        </p>

        <p style={{color: `#${props.turnoverQuestionColor}`}}>Annual Turnover?</p>
        <p style={{color: `#${props.turnoverAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.turnoverAnswerIconColor}` , marginRight: "7px" }} />
          Rs. {props.turnoverAnswerText}
        </p>

        <p style={{color: `#${props.iceQuestionColor}`}}>IEC Member?</p>
        <p style={{color: `#${props.iceAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.iceAnswerIconColor}`, marginRight: "7px" }} />
          SINCE {props.iceAnswerText}
        </p>

        <p style={{color: `#${props.gstQuestionColor}`}}>GST?</p>
        <p style={{color: `#${props.gstAnswerColor}`}} className={classes.bluetext}>
          <SendIcon style={{ fontSize: "20px", fill: `#${props.gstAnswerIconColor}`, marginRight: "7px" }} />
          {props.gstAnswerText}
        </p>
        
      </section>
      <section style={{backgroundColor:`#${props.arrowBgColor}`}} onClick={prevShopHandler} className={classes.arrow}>
        <ArrowBackIcon style={{fontSize: "30px",fill: `#${props.arrowIconColor}`, marginRight: "7px"}}/>
      </section>
    </div>
  );
}

const mapStateToProps = state => {

  return { shopIndex: state.main.shopIndex }
 }
 
 const mapDispatchToProps = {
   setInfo
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar)
