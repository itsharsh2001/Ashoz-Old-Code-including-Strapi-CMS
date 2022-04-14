import classes from "./RightSidebar.module.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { connect } from "react-redux"
import { setInfo } from "../../../redux/actions/main"

function RightSidebar(props) {

  const { shopIndex, setInfo } = props

  const nextShopHandler = () =>{
    if(shopIndex>=props.countShops-1){
      return
    }
    const newShopIndex = shopIndex + 1
    setInfo(newShopIndex)
  }

  return (
    <div className={classes.sidebar}>
      <div>
        <span style={{backgroundColor:`#${props.rectangleBgColor}`, color:`#${props.rectangleColor}`}}>OFFERS</span>
      </div>
      <div className={classes.sections}>
        <section style={{color: `#${props.offerColor}`}} className={classes.offer}>
          OFFERS
        </section>
        <div>OFFERS</div>
        <button style={{backgroundColor:`#${props.offerButtonBgColor}`,color: `#${props.offerButtonColor}`}} type="submit">Load More</button>
      </div>
      <div className={classes.sections}>
        <section style={{color: `#${props.specialProductColor}`}}>
          SPECIAL PRODUCTS
        </section>
        <div>PRODUCTS</div>
        <button style={{backgroundColor:`#${props.specialProductButtonBgColor}`,color: `#${props.specialProductButtonColor}`}} type="submit">Load More</button>
      </div>
      <div className={classes.sections}>
        <section style={{color: `#${props.arrivedTodayColor}`}}>
          ARRIVED TODAY
        </section>
        <div>NEW STOCK</div>
        <button style={{backgroundColor:`#${props.arrivedTodayButtonBgColor}`,color: `#${props.arrivedTodayButtonColor}`}} type="submit">Load More</button>
      </div>
      <section  style={{backgroundColor:`#${props.arrowBgColor}`}}  onClick={nextShopHandler} className={classes.arrow}>
        <ArrowForwardIcon style={{ fontSize: "30px", fill: `#${props.arrowIconColor}` }} />
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar)

