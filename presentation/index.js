// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

import Lottie from "react-lottie";
import * as animationData from "../assets/snoopy.json";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto"
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("../assets/snoopy.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={'100%'}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false })}
        >
          play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          pause
        </button>
      </div>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Lottie Animations
          </Heading>
          <div>
            <LottieControl />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
        >
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
