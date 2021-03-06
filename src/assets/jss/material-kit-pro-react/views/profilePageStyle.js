import {
  container,
  cardTitle,
  title,
  mlAuto,
  mrAuto,
  main,
  whiteColor,
  mainRaised,
  grayColor,
  coloredShadow,
  description,
  infoColor,
  roseColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

import imagesStyle from "assets/jss/material-kit-pro-react/imagesStyles.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";

import rotatingCards from "assets/jss/material-kit-pro-react/rotatingCards.js";

const profilePageStyle = {
  container,
  coloredShadow,
  title,
  mlAuto,
  cardTitle,
  ...imagesStyle,
  ...tooltipsStyle,
  ...rotatingCards,
  sectionGray: {
    background: grayColor[14]
  },
  sectionWhite: {
    background: whiteColor
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + "  !important"
  },
  cardTitle,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    paddingInlineStart: "15px !important",
    textAlign: "start !important",
    color: grayColor[0]
  },
  cardPic: {
    paddingTop: "25px !important"
  },
  textCenter: {
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },

  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  title: {
    ...title,
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  follow: {
    position: "absolute",
    top: "0",
    right: "0"
  },
  followIcon: {
    width: "20px",
    height: "20px"
  },
  linkedinButton: {
    marginTop: "-28px !important",
    
  },
  gridItem: {
    ...mlAuto,
    ...mrAuto
  },
  canvas: {
    width: "100%"
  },
  tag: {
    color: "#08fdd8 !important"
  },
  collections: {
    marginTop: "20px"
  },
  cardBody: {
    display: "flex",
    boxOrient: "vertical",
    boxDirection: "normal",
    flexDirection: "column",
    boxPack: "center",
    justifyContent: "center"
  },
  badge: {
    display: "inline-table",
    margin: "0 auto"
  },
  listUnstyled: {
    paddingLeft: "0",
    listStyle: "none",
    "& > li": {
      padding: "5px 0px",
      fontSize: "1em"
    }
  },
  profileTabs: {
    marginTop: "4.284rem",
    marginBottom: "50px"
  },
  card: {
    textAlign: "left !important"
  },
  customZindex: {
    zIndex: "3 !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  parallax: {
    height: "1000px",
    "@media (max-width: 768px)": {
      height: "700px"
    }
  },
  cardTitleAbsolute: {
    ...cardTitle,
    position: "absolute !important",
    bottom: "15px !important",
    left: "15px !important",
    color: whiteColor + " !important",
    fontSize: "1.125rem !important",
    textShadow: "0 2px 5px rgba(" + hexToRgb(grayColor[9]) + ", 0.5) !important"
  },
  cardTitleWhite: {
    "&, & a": {
      ...title,
      marginTop: ".625rem",
      marginBottom: "0",
      minHeight: "auto",
      color: whiteColor + " !important"
    }
  },
  cardCategory: {
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "8px"
    }
  },
  cardCategorySocial: {
    marginTop: "10px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategorySocialWhite: {
    marginTop: "10px",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategoryWhite: {
    marginTop: "10px",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7)"
  },
  cardCategoryFullWhite: {
    marginTop: "10px",
    color: whiteColor
  },
  cardDescription: {
    ...description
  },
  cardDescriptionWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
  },
  author: {
    display: "inline-flex",
    "& a": {
      color: grayColor[1]
    }
  },
  authorWhite: {
    display: "inline-flex",
    "& a": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    }
  },
  avatar: {
    width: "30px",
    height: "30px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "5px"
  },
  statsWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
    display: "inline-flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  stats: {
    color: grayColor[0],
    display: "flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  front: {
    backgroundSize: "cover !important",
    backgroundPosition: "center !important"
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  iconWrapper: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[14],
    borderRadius: "50%",
    lineHeight: "174px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "55px",
      lineHeight: "55px"
    },
    "& svg": {
      width: "55px",
      height: "55px"
    }
  },
  iconWrapperColor: {
    borderColor: "rgba(" + hexToRgb(whiteColor) + ", 0.25)"
  },
  iconWhite: {
    color: whiteColor
  },
  iconRose: {
    color: roseColor[0]
  },
  iconInfo: {
    color: infoColor[0]
  },
  marginTop30: {
    marginTop: "30px"
  },
  textCenter: {
    textAlign: "center"
  },
  marginBottom20: {
    marginBottom: "20px"
  },
  brand: {
    color: whiteColor,
    zIndex: "3",
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    }
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "0px",
    padding: "10px 18px",
    top: "30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)"
  }
};




export default profilePageStyle;
