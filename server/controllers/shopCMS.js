import Shop from '../models/shop'

export const addShop = async (req, res) => {
    try {
   
        const { category, topNavbgColor, navgstColor, navgstBgcolor, navgstText, navgstIconColor, imageUrl, headingColor, headingText, nameText, nameColor, locationText, locationColor, locationIconColor, gstColor, gstText, gstIconColor, trustsealColor, trustsealIconCOlor, trustsealIsChecked, phoneText, phoneColor, phoneBgColor, phoneIconColor, responseRateText, responseRateColor, bottomNavBgColor, aboutUsRectangleText, aboutUsRectangleColor, aboutUsRectangleBgColor, yearQColor, yearAText, yearAIconColor, yearAColor,  legalQColor, legalAText, legalAIconColor, legalAColor, natureQColor, natureAText, natureAIconColor, natureAColor, turnoverQColor, turnoverAText, turnoverAIconColor, turnoverAColor, iceQColor, iceAText, iceAIconColor, iceAColor, gstQColor,gstAText, gstAIconColor, gstAColor,
        employeeQColor, employeeAText, employeeAIconColor, employeeeAColor, aboutUsArrowBgColor, aboutUsArrowIconCOlor, offersRectangleText,offersRectangleColor, offersRectangleBgColor, offerColor,offerImage, offerBtnColor, offerBtnBgColor, specialProductColor,specialProductImage, specialProductBtnColor,specialProductBtnBgColor, arrivedTodayColor, arrivedTodayImage,arrivedTodayBtnColor, arrivedTodayBtnBgColor,offersArrowBgColor, offersArrowIconCOlor } = req.body;

        const TotalShops = await Shop.find({});

        const length = TotalShops.length;

        const shop = new Shop({
            index:length,
            category:category,
            shop : {
                navbar:{
                    topNav : {
                        bgcolor:topNavbgColor,
                        gst : {
                            color:navgstColor,
                            bgColor:navgstBgcolor,
                            text:navgstText,
                            iconCOlor:navgstIconColor
                        }
                    },
        
                    middleNav:{
                        image:{
                            url:imageUrl
                        },
                        heading:{
                            color:headingColor,
                            text:headingText
                        },
                        name: {
                            text:nameText,
                            color:nameColor,
                        },
                        location:{
                            text:locationText,
                            iconColor:locationIconColor,
                            color:locationColor
                        },
                        gst:{
                            text:gstText,
                            iconColor:gstIconColor,
                            color:gstColor
                        },
                        trustseal:{
                            isChecked:trustsealIsChecked,
                            iconColor:trustsealIconCOlor,
                            color:trustsealColor
                        },
                        phone:{
                            text:phoneText,
                            iconColor:phoneIconColor,
                            color:phoneColor,
                            bgColor:phoneBgColor,
                            responseRate:{
                                text:responseRateText,
                                color:responseRateColor
                            }
                        }
                    },
        
                    bottomNav :{
                        bgColor:bottomNavBgColor
                    }
                },
                aboutUs:{
                    rectangle : {
                        text:aboutUsRectangleText,
                        color:aboutUsRectangleColor,
                        bgColor:aboutUsRectangleBgColor
                    },
        
                    year:{
                        question:{
                            color:yearQColor
                        },
                        answer:{
                            text:yearAText,
                            color:yearAColor,
                            iconColor:yearAIconColor
                        }
                    },
        
                    legalStatus:{
                        question:{
                            color:legalQColor
                        },
                        answer:{
                            text:legalAText,
                            color:legalAColor,
                            iconColor:legalAIconColor
                        }
                    },
        
                    natureOfBusiness:{
                        question:{
                            color:natureQColor
                        },
                        answer:{
                            text:natureAText,
                            color:natureAColor,
                            iconColor:natureAIconColor
                        }
                    },
                    
                    noOfEmployees : {
                        question:{
                            color:employeeQColor
                        },
                        answer:{
                            text:employeeAText,
                            color:employeeeAColor,
                            iconColor:employeeAIconColor
                        }
                    },
        
                    turnover:{
                        question:{
                            color:turnoverQColor
                        },
                        answer:{
                            text:turnoverAText,
                            color:turnoverAColor,
                            iconColor:turnoverAIconColor
                        }
                    },
        
                    iceMember:{
                        question:{
                            color:iceQColor
                        },
                        answer:{
                            text:iceAText,
                            color:iceAColor,
                            iconColor:iceAIconColor
                        }
                    },
        
                    gst:{
                        question:{
                            color:gstQColor
                        },
                        answer:{
                            text:gstAText,
                            color:gstAColor,
                            iconColor:gstAIconColor
                        }
                    },
        
                    arrow:{
                        bgColor:aboutUsArrowBgColor,
                        iconColor:aboutUsArrowIconCOlor
                    }
                },
        
                offers:{
                    rectangle : {
                        text:offersRectangleText,
                        color:offersRectangleColor,
                        bgColor:offersRectangleBgColor
                    },
        
                    offer:{
                        color:offerColor,
                        image:offerImage,
                        button:{
                           color:offerBtnColor,
                           bgColor:offerBtnBgColor
                        }
                    },
        
                    specialProducts:{
                        color:specialProductColor,
                        image:specialProductImage,
                        button:{
                           color:specialProductBtnColor,
                           bgColor:specialProductBtnBgColor
                    }
                },
        
                    ArrivedToday:{
                        color:arrivedTodayColor,
                        image:arrivedTodayImage,
                        button:{
                           color:arrivedTodayBtnColor,
                           bgColor:arrivedTodayBtnBgColor
                    }
                    },

                    arrow:{
                        bgColor:offersArrowBgColor,
                        iconColor:offersArrowIconCOlor
                    }
        
        
                }
            }
        
        });
        
        await shop.save();

        console.log('shop saved', shop)
        return res.status(200).json({ message: "true"})

       
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error. Try Again')
    }
}


export const getShop = async (req, res) => {
    try {

        const { index } = req.body;

    const TotalShops = await Shop.find({});
    const shop = await Shop.findOne({});

    res.send(shop.shop)


    res.status(200).json({
        message:true,
        data:shop.shop
    })
       
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error. Try Again')
    }
}

