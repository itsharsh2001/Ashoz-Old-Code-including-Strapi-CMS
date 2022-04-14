import mongoose from 'mongoose'
const { Schema } = mongoose;

const shopSchema = new Schema({

    index:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    shop : {

        navbar:{
            topNav : {
                bgcolor:{
                    type:String,
                    required: true
                },
                gst : {
                    color:{
                        type:String,
                        required: true
                    },
                    bgColor:{
                        type:String,
                        required: true
                    },
                    text:{
                        type:String,
                        required: true
                    },
                    iconCOlor:{
                        type:String,
                        required: true
                    }
                }
            },

            middleNav:{
                image:{
                    url:{
                        type:String,
                        required: true
                    }
                },
                heading:{
                    color:{
                        type:String,
                        required: true
                    },
                    text:{
                        type:String,
                        required: true
                    }
                },
                name: {
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                },
                location:{
                    text:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    }
                },
                gst:{
                    text:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    }
                },
                trustseal:{
                    isChecked:{
                        type:Boolean,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    }
                },
                phone:{
                    text:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    bgColor:{
                        type:String,
                        required: true
                    },
                    responseRate:{
                        text:{
                            type:String,
                            required: true
                        },
                        color:{
                            type:String,
                            required: true
                        }
                    }
                }
            },

            bottomNav :{
                bgColor:{
                    type:String,
                    required: true
                }
            }
        },
        aboutUs:{
            rectangle : {
                text:{
                    type:String,
                    required: true
                },
                color:{
                    type:String,
                    required: true
                },
                bgColor:{
                    type:String,
                    required: true
                }
            },

            year:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            legalStatus:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            natureOfBusiness:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            noOfEmployees:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            turnover:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            iceMember:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            gst:{
                question:{
                    color:{
                        type:String,
                        required: true
                    }
                },
                answer:{
                    text:{
                        type:String,
                        required: true
                    },
                    color:{
                        type:String,
                        required: true
                    },
                    iconColor:{
                        type:String,
                        required: true
                    }
                }
            },

            arrow:{
                bgColor:{
                    type:String,
                    required: true
                },
                iconColor:{
                    type:String,
                    required: true
                }
            }
        },

        offers:{
            rectangle : {
                text:{
                    type:String,
                    required: true
                },
                color:{
                    type:String,
                    required: true
                },
                bgColor:{
                    type:String,
                    required: true
                }
            },

            offer:{
                color:{
                    type :String,
                    require:true
                },
                image:[
                    {
                        type :String,
                        require:true
                    }

                ],
                button:{
                   color:{
                    type:String,
                    require:true
                   },
                   bgColor:{
                    type:String,
                    require:true
                   }
                }
            },

            specialProducts:{
                color:{
                    type :String,
                    require:true
                },
                image:[
                    {
                        type :String,
                        require:true
                    }

                ],
                button:{
                   color:{
                    type:String,
                    require:true
                   },
                   bgColor:{
                    type:String,
                    require:true
                   }
                }
            },

            ArrivedToday:{
                color:{
                    type :String,
                    require:true
                },
                image:[
                    {
                        type :String,
                        require:true
                    }

                ],
                button:{
                   color:{
                    type:String,
                    require:true
                   },
                   bgColor:{
                    type:String,
                    require:true
                   }
                }
            },
            arrow:{
                bgColor:{
                    type:String,
                    required: true
                },
                iconColor:{
                    type:String,
                    required: true
                }
            }


        }
    }

})



export default mongoose.model("Shop", shopSchema);