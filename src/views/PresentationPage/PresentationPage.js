/*eslint-disable*/
import React from "react";
import TextLoop from "react-text-loop";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import PhotoIcon from '@material-ui/icons/Photo';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import profilePic from "assets/img/faces/christian.jpg";
import photo6 from "assets/img/examples/photo6.jpg";
import photo5 from "assets/img/examples/photo5.jpg";
import photo4 from "assets/img/examples/photo4.jpg";
import photo3 from "assets/img/examples/photo3.jpg";
import photo2 from "assets/img/examples/photo2.jpg";
import photo1 from "assets/img/examples/photo1.jpg";
import project1 from "assets/img/project1.png";
import project2 from "assets/img/project2.png";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import companyLogo1 from "assets/img/logo1.jpg";
import companyLogo2 from "assets/img/logo2.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    addStylesForRotatingCards();
    return function cleanup() {};
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  function navigate(url) {
    window.open(url, '');
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Kok Hung"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "gray"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/bg5.jpg")}
        filter="dark"
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classes.customZindex}>
              <div className={classes.brand}>
                {window.innerWidth < 768  ? 
                  <h1>
                  Hi, I am {" "} <br></br>
                  <span>Kok hung</span> <br></br>
                  <span className={classes.proBadge}>Welcome to my website</span>
                </h1>
                :
                  <h1>
                  Hi, I am {" "}
                  <TextLoop springConfig={{ stiffness: 70, damping: 31 }}
                    djustingSpeed={500}>
                    <span>Kok Hung</span>
                    <span>a Developer</span>
                    <span>a ReactJS Engineer</span>
                    <span>an Adventurist</span>
                    <span>a pet lover :)</span>
                </TextLoop>{" "} <br></br>
                  <span className={classes.proBadge}>Welcome to my website</span>
                </h1>
                }
                
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profilePic} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Kok Hung Chan</h3>
                  <h6>Developer</h6>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    onClick={() => navigate("https://www.instagram.com/khungchan/")}
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    onClick={() => navigate("https://twitter.com/KhchanThatsme")}
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="github"
                    onClick={() => navigate("https://github.com/Kokhungchan")}
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Connect with me"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
              <Button 
                color="linkedin" 
                className={classes.linkedinButton}
                justIcon
                round
                onClick={() => navigate("https://www.linkedin.com/in/kokhungchan/")}
                >
                <i className="fab fa-linkedin" />
              </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              Passionate coder, Chan Kok Hung — Graduated University West Of England majoring SE,
              What I do — write codes, read, play, What I love — travel, tech update, pets, photos.
              <br></br>
              Welcome to my playground
              {" "}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Work",
                  tabIcon: CodeIcon,
                  tabContent: (
                    <GridContainer>
                       <GridItem
                        xs={12}
                        sm={12}
                        md={9}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Projects</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={12} lg={6}>
                            <div className={classes.rotatingCardContainer}>
                                <Card
                                  background
                                  className={classes.cardRotate}
                                >
                                  <div 
                                  className={
                                    classes.front + " " + classes.wrapperBackground
                                  }
                                  style={{
                                    backgroundImage: `url(${project2})`
                                  }}>
                                    <CardBody background className={classes.cardBody}>
                                      <Badge
                                        color="warning"
                                        className={classes.badge}
                                      >
                                        ReactJS
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          Website
                                        </h2>
                                      </a>
                                    </CardBody>
                                  </div>
                                  <div className={classes.back + " " + classes.wrapperWhite}
                                  style={{
                                    backgroundImage: `url(${project2})`
                                  }}>
                                    <CardBody className={classes.cardBodyRotate}>
                                    <div className={classes.textCenter}>
                                      <h5 className={classes.cardCategorySocialWhite}>
                                        <i className="fab fa-github" /> Info
                                      </h5>
                                      </div>
                                      <div>
                                        <Button round color="white" onClick={() => navigate("http://zchwantech.com/")}>
                                          <Subject /> Visit
                                        </Button>
                                      </div>
                                    </CardBody>
                                  </div>
                                </Card>
                              </div>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12} lg={6}>
                            <div className={classes.rotatingCardContainer}>
                              <Card
                                background
                                className={classes.cardRotate}
                              >
                                <div 
                                  className={
                                    classes.front + " " + classes.wrapperBackground
                                  }
                                  style={{
                                    backgroundImage: `url(${project1})`
                                  }}>
                                    <CardBody background className={classes.cardBody}>
                                      <Badge color="info" className={classes.badge}>
                                        Html & CSS
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          Portfolio 
                                        </h2>
                                      </a>
                                    </CardBody>
                                </div>
                                <div className={classes.back + " " + classes.wrapperWhite}
                                style={{
                                  backgroundImage: `url(${project1})`
                                }}>
                                    <CardBody className={classes.cardBodyRotate}>
                                      <h5 className={classes.cardCategorySocialWhite}>
                                        <i className="fab fa-github" /> Info
                                      </h5>
                                      <div>
                                        <Button round color="white" onClick={() => navigate("https://kokhungchan.github.io/")}>
                                          <Subject /> Visit
                                        </Button>
                                      </div>
                                    </CardBody>
                                  </div>
                              </Card>
                              </div>
                            </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={3}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>What I speak</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>Front-end</b>
                            <CustomLinearProgress
                            variant="determinate"
                            color="primary"
                            value={80}
                          />
                          </li>
                          <li>
                            <b>ReactJS</b>
                            <CustomLinearProgress
                            variant="determinate"
                            color="progress1"
                            value={75}
                          />
                          </li>
                          <li>
                            <b>Back-end</b> 
                            <CustomLinearProgress
                            variant="determinate"
                            color="progress2"
                            value={50}
                          />
                          </li>
                          <li>
                            <b>AngularJS</b>
                            <CustomLinearProgress
                            variant="determinate"
                            color="progress3"
                            value={55}
                          />
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>About</h4>
                        <p className={classes.description}>
                          Started as front-end developer, explored with ReactJS framework. Currently focusing on Java programming
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Full-stack</Badge>
                        <Badge color="rose">Java</Badge>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "About Me",
                  tabIcon: InfoIcon,
                  tabContent: (
                    <div>             
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={12}
                          className={classes.gridItem}>
                          <div id="myCanvasContainer">
                              <canvas width="1000" height="500" id="myCanvas" className={classes.canvas}>
                                <ul id="weightTags">
                                <li><a >Angular</a></li>
                                <li><a>ReactJS</a></li>
                                <li><a>Html</a></li>
                                <li><a>Css</a></li>
                                <li><a>SASS</a></li>
                                <li><a>jQuery</a></li>
                                <li><a>npm</a></li>
                                <li><a>Git</a></li>
                                <li><a>SQL</a></li>
                                <li><a>WordPress</a></li>
                                <li><a>JavaScript</a></li>
                                <li><a>Java</a></li>
                                <li><a>Python</a></li>
                                <li><a>Bootstrap</a></li>
                                <li><a>Node JS</a></li>
                                <li><a>TypeScript</a></li>
                                <li><a>ES5/ES6</a></li>
                                <li><a>JSON</a></li>
                                </ul>
                              </canvas>
                            </div>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5} className={classes.cardPic}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={companyLogo2} alt="Zchwantech logo" />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + companyLogo2 + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Zchwantech Sdn Bhd
                                  </h4>
                                  <Muted>
                                    <h6>Front-End Developer</h6>
                                  </Muted>
                                  <ul className={classes.description}>
                                  <li>Developed and deployed fully responsive websites using ReactJS</li>
                                  <li>Collaborate and translate designer's mockup into working websites</li>
                                  <li>Enhanced codebase into reusable components and libraries</li>
                                  <li>Experienced in version control with git and various deployment environment stages (local/staging/uat/production)</li>
                                  </ul>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card} >
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5} className={classes.cardPic}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={companyLogo1} alt="Glocomp logo" />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + companyLogo1 + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Glocomp Systems Sdn Bhd
                                  </h4>
                                  <Muted>
                                    <h6>System Engineer Intern</h6>
                                  </Muted>
                                  <ul className={classes.description}>
                                    <li>Deployment and manage using VMware ESXi hypervisor</li>
                                    <li>Configuring data storage, data management using SQL</li>
                                    <li>Cloud computing using VMSphere</li>
                                    <li>Analyze and troubleshoot operating system problems</li>
                                    <li>Manage and monitor LAN and WAN networks</li>
                                    <li>Study and help to design network topologies</li>
                                  </ul>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    
                    </div>
                  )
                },
                {
                  tabButton: "Media",
                  tabIcon: PhotoIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <img
                          alt="..."
                          src={photo1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={photo2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={photo6}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <img
                          alt="..."
                          src={photo3}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={photo4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={photo5}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://drive.google.com/file/d/18J-G3HfoRInj5DkYBR6efVUn1udFUGDE/view"
                    target="_blank"
                    className={classes.block}
                  >
                    Resume
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="https://kokhung.blog/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} {" "}
              kh
            </div>
          </div>
        }
      />
    </div>
  );
}
