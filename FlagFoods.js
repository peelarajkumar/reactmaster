import React from "react";
import ReactDOM from "react-dom/client";
import $ from 'jquery';

//AppLayout - Header - Body - Footer
//header : Logo - Nav Items
//body - resrocardscontainer - resto cards
//footer : copyrights , servivces , email us



const RestoHeader = ()=>{
    return(<div id="header" className="resto-header">
        <div id="logo">
            <img src="https://i.pinimg.com/originals/23/ea/f7/23eaf73a1787621248279492ecbfb43f.png"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Our Servives</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

const RestoCard = (props)=>{
    const {resdata} = props
        return(<div className="res-card">
            <img alt="Image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.info.cloudinaryImageId}></img>
            <h3 className="rating-space">{resdata.info.name} <span>{resdata.info.avgRatingString}</span></h3>
            <div className="res-des">
                <p>{resdata.info.cuisines.join(',')}</p>
                <p>{resdata.info.sla.slaString}</p>
                <p>{resdata.info.areaName}</p>
                <p>{resdata.info.costForTwo}</p>
            </div>
    </div>)
}

let restaurants = [
    {
    "info": {
        "id": "549128",
        "name": "Yashodamma Tiffins",
        "cloudinaryImageId": "ocjdo70bxancyrwv1wkd",
        "locality": "Hyderguda",
        "areaName": "Attapur",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "South Indian",
            "Snacks"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "330134",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-26 22:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
 },
 {
    "info": {
        "id": "858815",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "e233fb34d70482545b018b5b169fe18e",
        "locality": "Celest Mall",
        "areaName": "GAJUWAKA",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "10761",
        "avgRatingString": "4.5",
        "totalRatingsString": "9",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 22:45:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-celest-mall-gajuwaka-vizag-858815",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "638021",
        "name": "Delights by INOX",
        "cloudinaryImageId": "pzddraf9ef2lpzvxpqqb",
        "locality": "chiatnya nagar",
        "areaName": "Gajuwaka",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Snacks"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "385095",
        "avgRatingString": "4.1",
        "totalRatingsString": "20+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/delights-by-inox-chiatnya-nagar-gajuwaka-vizag-638021",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "429771",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_429771.JPG",
        "locality": "Exhibition Road",
        "areaName": "Gajuwaka",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-exhibition-road-gajuwaka-vizag-429771",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "858813",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/5f01f474-d2bd-4b74-9208-1b94083a27ee_858813.jpg",
        "locality": "Celest Mall",
        "areaName": "GAJUWAKA",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "630",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 22:45:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-celest-mall-gajuwaka-vizag-858813",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "321242",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b440804a-5295-4f53-a58f-0ae652a9264d_321242.JPG",
        "locality": "Gajuwaka",
        "areaName": "Chaitanya Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-gajuwaka-chaitanya-nagar-vizag-321242",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "196926",
        "name": "Ibaco",
        "cloudinaryImageId": "l0ic42djgaznawz7okxv",
        "areaName": "Gajuwaka",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Ice Cream"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "3481",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/ibaco-gajuwaka-vizag-196926",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "709630",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/3967a9e5-221f-4af7-8bec-9d5c63551954_709630.JPG",
        "locality": "Sudhakar bulding",
        "areaName": "Gajuwaka",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 12:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sudhakar-bulding-gajuwaka-vizag-709630",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "72859",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Pendurthi",
        "areaName": "Gajuwaka",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "2456",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-06-27 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-pendurthi-gajuwaka-vizag-72859",
        "type": "WEBLINK"
    }
},
]

const RestoBody = ()=>{
    return(<div className="res-body-con">
            <div className="res-search">Search For Restaurant</div>
            <div className="res-cards-all">
            {restaurants.map(item=>(<RestoCard key ={item.info.id} resdata = {item}/>))}
         {/* <RestoCard resdata = {restaurants[0]}/>
         <RestoCard resdata = {restaurants[1]}/>
         <RestoCard resdata = {restaurants[2]}/>
         <RestoCard resdata = {restaurants[3]}/> */}
         {/* <RestoCard/>
         <RestoCard/>
         <RestoCard/>
         <RestoCard/> */}
            
            </div>
            
    </div>)
}



const AppLayout = ()=>{
    return(<div id="applayout" className="App-Layout">
            <RestoHeader/>
            <RestoBody/>
    </div>)
}

const TestProps = (props)=>{
    return (<h2>I am {props.name}</h2>)
}



const root = ReactDOM.createRoot(document.getElementById('rooter'));
root.render(<AppLayout/>);
// root.render(<TestProps name="Toufeed"/>)