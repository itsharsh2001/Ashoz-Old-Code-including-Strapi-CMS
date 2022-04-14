import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./modern-bath-hut.module.css";
import TopNavbar from "../../components/hardware/modern_bath_hut/TopNavbar";
import MidNavbar from "../../components/hardware/modern_bath_hut/MidNavbar";
import BottomNavbar from "../../components/hardware/modern_bath_hut/BottomNavbar";
import LeftSidebar from "../../components/hardware/modern_bath_hut/LeftSidebar";
import RightSidebar from "../../components/hardware/modern_bath_hut/RightSidebar";
import ThreeDVideo from "../../components/hardware/modern_bath_hut/ThreeDVideo";
import { connect } from "react-redux";
import { setInfo } from "../../redux/actions/main";
import axios from 'axios'
import t from 'typy';

function modern_bath_hut(props) {
  const router = useRouter();
  const { shopIndex, setInfo } = props;
  const [shop, setShop] = useState({});
  const [totalShops, setTotalShops] = useState()

  const query = router.query.shop;
  console.log(query);

  useEffect(async ()=>{
    const {data} = await axios({
      method:'GET',
      url:`http://localhost:1337/shop-data?index=${shopIndex}`
    })
    setShop(data[0]);
  },[shopIndex])

  
  useEffect(async ()=>{
    const data = await axios({
      method:'GET',
      url:`http://localhost:1337/shop-data/count`
    })
    setTotalShops(data.data);
  },[])

  console.log(shopIndex)

  const category = t(shop, 'shop_category.shopCategory').safeObject

  if (!router.query.shop) {
    return <p>loading...</p>;
  }
 
  return (
    <div>
      {/* {router.query.shop == category ? ( */}
        <div className={classes.background}>
          <TopNavbar
          bgColor={t(shop, 'navbar.navbar.topNav.bgcolor').safeObject}
          gstColor={t(shop, 'navbar.navbar.topNav.gst.color').safeObject}
          gstText={t(shop, 'navbar.navbar.topNav.gst.text').safeObject}
          gstBgColor={t(shop, 'navbar.navbar.topNav.gst.bgColor').safeObject}
          gstIconColor={t(shop, 'navbar.navbar.topNav.gst.iconColor').safeObject}
          />

          <MidNavbar
          // image={shop.personImage}
          headingColor={t(shop, 'navbar.navbar.middleNav.heading.color').safeObject}
          headingText={t(shop, 'navbar.navbar.middleNav.heading.text').safeObject}
          name={t(shop, 'navbar.navbar.middleNav.name.text').safeObject}
          nameColor={t(shop, 'navbar.navbar.middleNav.name.color').safeObject}
          locationText={t(shop, 'navbar.navbar.middleNav.location.text').safeObject}
          locationColor={t(shop, 'navbar.navbar.middleNav.location.color').safeObject}
          locationIconColor={t(shop, 'navbar.navbar.middleNav.location.iconColor').safeObject}

          gstText={t(shop, 'navbar.navbar.middleNav.gst.text').safeObject}
          gstColor={t(shop, 'navbar.navbar.middleNav.gst.color').safeObject}
          gstIconColor={t(shop, 'navbar.navbar.middleNav.gst.iconColor').safeObject}

          trustsealChecked={t(shop, 'navbar.navbar.middleNav.trustseal.text').safeObject}
          trustsealColor={t(shop, 'navbar.navbar.middleNav.trustseal.color').safeObject}
          trustsealIconColor={t(shop, 'navbar.navbar.middleNav.trustseal.iconColor').safeObject}

          phone={t(shop, 'navbar.navbar.middleNav.phone.text').safeObject}
          phoneColor={t(shop, 'navbar.navbar.middleNav.phone.color').safeObject}
          phoneBgColor={t(shop, 'navbar.navbar.middleNav.phone.bgColor').safeObject}
          phoneIconColor={t(shop, 'navbar.navbar.middleNav.phone.iconColor').safeObject}

          responseRateText = {t(shop, 'navbar.navbar.middleNav.phone.responseRate.text').safeObject}
          responseRateColor = {t(shop, 'navbar.navbar.middleNav.phone.responseRate.color').safeObject}
          />

          <BottomNavbar
          bgColor={t(shop, 'navbar.navbar.bottomNav.bgColor').safeObject}
          />

          <div className={classes.mainbody}>
            <LeftSidebar
            rectangleBgColor={t(shop, 'aboutUs.aboutUs.rectangle.bgColor').safeObject}
            rectangleColor={t(shop, 'aboutUs.aboutUs.rectangle.color').safeObject}
            yearQuestionColor={t(shop, 'aboutUs.aboutUs.year.question.color').safeObject}
            yearAnswerText={t(shop, 'aboutUs.aboutUs.year.answer.text').safeObject}
            yearAnswerColor={t(shop, 'aboutUs.aboutUs.year.answer.color').safeObject}
            yearAnswerIconColor={t(shop, 'aboutUs.aboutUs.year.answer.iconColor').safeObject}

            legalQuestionColor={t(shop, 'aboutUs.aboutUs.legalStatus.question.color').safeObject}
            legalAnswerText={t(shop, 'aboutUs.aboutUs.legalStatus.answer.text').safeObject}
            legalAnswerColor={t(shop, 'aboutUs.aboutUs.legalStatus.answer.color').safeObject}
            legalAnswerIconColor={t(shop, 'aboutUs.aboutUs.legalStatus.answer.iconColor').safeObject}

            natureQuestionColor={t(shop, 'aboutUs.aboutUs.natureOfBusiness.question.color').safeObject}
            natureAnswerText={t(shop, 'aboutUs.aboutUs.natureOfBusiness.answer.text').safeObject}
            natureAnswerColor={t(shop, 'aboutUs.aboutUs.legalStatus.answer.color').safeObject}
            natureAnswerIconColor={t(shop, 'aboutUs.aboutUs.natureOfBusiness.answer.iconColor').safeObject}

            employeeQuestionColor={t(shop, 'aboutUs.aboutUs.noOfEmployees.question.color').safeObject}
            employeeAnswerText={t(shop, 'aboutUs.aboutUs.noOfEmployees.answer.text').safeObject}
            employeeAnswerColor={t(shop, 'aboutUs.aboutUs.noOfEmployees.answer.color').safeObject}
            employeeAnswerIconColor={t(shop, 'aboutUs.aboutUs.noOfEmployees.answer.iconColor').safeObject}

            turnoverQuestionColor={t(shop, 'aboutUs.aboutUs.turnover.question.color').safeObject}
            turnoverAnswerText={t(shop, 'aboutUs.aboutUs.turnover.answer.text').safeObject}
            turnoverAnswerColor={t(shop, 'aboutUs.aboutUs.turnover.answer.color').safeObject}
            turnoverAnswerIconColor={t(shop, 'aboutUs.aboutUs.turnover.answer.iconColor').safeObject}

            iceQuestionColor={t(shop, 'aboutUs.aboutUs.iceMember.question.color').safeObject}
            iceAnswerText={t(shop, 'aboutUs.aboutUs.iceMember.answer.text').safeObject}
            iceAnswerColor={t(shop, 'aboutUs.aboutUs.iceMember.answer.color').safeObject}
            iceAnswerIconColor={t(shop, 'aboutUs.aboutUs.iceMember.answer.iconColor').safeObject}

            gstQuestionColor={t(shop, 'aboutUs.aboutUs.gst.question.color').safeObject}
            gstAnswerText={t(shop, 'aboutUs.aboutUs.gst.answer.text').safeObject}
            gstAnswerColor={t(shop, 'aboutUs.aboutUs.gst.answer.color').safeObject}
            gstAnswerIconColor={t(shop, 'aboutUs.aboutUs.gst.answer.iconColor').safeObject}

            arrowBgColor={t(shop, 'aboutUs.aboutUs.arrow.bgColor').safeObject}
            arrowIconColor={t(shop, 'aboutUs.aboutUs.arrow.iconColor').safeObject}

            />


            <ThreeDVideo />


            <RightSidebar
            // offerImage={shop.offerBannerImage}
            // arrivedTodayImage={shop.specialProductBannerImage}
            // specialProductImage={shop.ArrivedTodayBannerImage}

            countShops={totalShops}

            rectangleBgColor={t(shop, 'offers.offers.rectangle.bgColor').safeObject}
            rectangleColor={t(shop, 'offers.offers.rectangle.color').safeObject}

            offerColor={t(shop, 'offers.offers.offer.color').safeObject}
            offerButtonColor={t(shop, 'offers.offers.offer.button.color').safeObject}
            offerButtonBgColor={t(shop, 'offers.offers.offer.button.bgColor').safeObject}

            specialProductColor={t(shop, 'offers.offers.specialProducts.color').safeObject}
            specialProductButtonColor={t(shop, 'offers.offers.specialProducts.button.color').safeObject}
            specialProductButtonBgColor={t(shop, 'offers.offers.specialProducts.button.bgColor').safeObject}

            arrivedTodayColor={t(shop, 'offers.offers.ArrivedToday.color').safeObject}
            arrivedTodayButtonColor={t(shop, 'offers.offers.ArrivedToday.button.color').safeObject}
            arrivedTodayButtonBgColor={t(shop, 'offers.offers.ArrivedToday.button.bgColor').safeObject}


            arrowBgColor={t(shop, 'offers.offers.arrow.bgColor').safeObject}
            arrowIconColor={t(shop, 'offers.offers.arrow.iconColor').safeObject}
            />

          </div>
        </div>
      {/* ) : null} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { shopIndex: state.main.shopIndex };
};

const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(modern_bath_hut);
