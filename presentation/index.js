// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

//Font Awesome
import FontAwesome from "react-fontawesome";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {

  city: require("../assets/raven_animal/raven_duo.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  drawing: require("../assets/raven_adriano_lyra.jpg"),


feathers: require("../assets/feathers.jpg"),
  signature: require("../assets/epk/RAVEN_signature.jpg"),
  silks: require("../assets/epk/RAVEN_silks.jpg"),
  birdcage: require("../assets/epk/raven_birdcage_bw.jpg"),
};

preloader(images);

const theme = createTheme({
  //Colors
  primary: "#111",
  secondary: "white",
  tertiary: "#333",
  quartenary: "#CECECE"
}, {
  //Fonts
  primary: "Unica One",
  secondary: "Abel",
  tertiary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck controls={true} progress={"bar"} transition={["zoom", "fade"]} transitionDuration={500} theme={theme}>

      <Slide transition={["fade"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
        <Heading fit bold textColor="primary">RAVEN</Heading>
        {/* <Heading fit textFont="secondary" fit>Aerial. Dance. Theatre.</Heading> */}

    </Slide>

<Slide transition={["fade"]} bgImage={images.signature.replace("/", "")} bgDarken={0.85}>
  <Text fit textFont="secondary" textColor="white" >
    {/*Mission Statement?*/}
  Once upon a midnight dreary...
</Text>
</Slide>

  <Slide transition={["fade"]} bgImage={images.signature.replace("/", "")} bgDarken={0.33} />
  <Slide transition={["fade"]} bgImage={images.birdcage.replace("/", "")} bgDarken={0.67} />
  <Slide transition={["fade"]} bgImage={images.silks.replace("/", "")} bgDarken={0.33} />

  {/* <Slide transition={["fade"]} bgImage={images.city.replace("/", "")} bgDarken={0.85}> */}
<Slide transition={["fade"]} bgImage={images.silks.replace("/", "")} bgDarken={0.75}>
  <Heading fit>SERVICES</Heading>

<Text fill textFont="secondary" textColor="white">Feature & Ambient</Text>
<List fit textFont="secondary">
<ListItem>Aerial Duo</ListItem>
<ListItem>Tandem Duo</ListItem>
<ListItem>Solo</ListItem>
<ListItem>Ground Contortion Acro</ListItem>
<ListItem>Dance</ListItem>
</List>


//STUFF DONE
corporate events, commercial video and still shoots, to nightclubs, concerts, immersive theatre, proscenium productions, and variety.

<Text fill textFont="secondary" textColor="white">Stage</Text>
<List fit textFont="secondary">

</List>

<FontAwesome className='white' name='clock-o' rotate={90} size='1x'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
  />
  <Text fill textColor="white">15-60 min</Text>
      {/*<Heading>Theater & Dance Collaboration</Heading> */}
</Slide>

  <Slide align="center center" transition={["fade"]} bgImage={images.drawing.replace("/", "")} bgDarken={0.95}>
  <Heading margin="0 0 20px 0" caps fit>apparatus</Heading>


  <Layout fit>
    <Fill>
    {/* <Link href="http://milkbarstore.com"> */}
    {/* <Image src={images.milkbar.replace("/", "")} width="50%" height="50%" ></Image> */}
  <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="quartenary">
    <FontAwesome className='white' name='institution' size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
          Birdcage
        </Text>
        {/* </Link> */}
    </Fill>
    <Fill>
    {/* <Link href="http://www.ilpostoaccantonyc.com"> */}
    {/* <Image src={images.ilposto.replace("/", "")}  width="50%" height="50%"></Image> */}
  <Text textAlign="right" margin="0 0 10px 0"  bold italic textColor="quartenary">

        Corde Lisse
        <FontAwesome className='white' name='road' size='1x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </Text>

        {/* </Link> */}
    </Fill>
      </Layout>
        <Layout fit>
    <Fill>

      {/* <Link href="http://milkbarstore.com"> */}
      {/* <Image src={images.milkbar.replace("/", "")} width="50%" height="50%" ></Image> */}
        <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="quartenary">
      <FontAwesome className='white' name='cube' size='1x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
            Cubit
          </Text>
          {/* </Link> */}
    </Fill>


    <Fill>
      <Text textAlign="right" margin="0 0 10px 0"  bold italic textColor="quartenary">
    {/* <Link href="http://www.abraconyc.com"> */}
    {/* <Image src={images.abraco.replace("/", "")}  width="100%" height="50%"></Image> */}

          Hammock
          <FontAwesome className='white' name='leaf' rotate={180} size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
        </Text>
        {/* </Link> */}
    </Fill>
    </Layout>
        <Layout fit>
    <Fill>
      {/* <Link href="http://biang-nyc.com"> */}
    {/* <Image src={images.biang.replace("/", "")} width="50%" height="50%"></Image> */}
      <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="quartenary">
    <FontAwesome className='primary'  name='opera' size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />

        LYRA
      </Text>
      {/* </Link> */}
    </Fill>
    <Fill>
    {/* <Link href="http://milkbarstore.com"> */}
    {/* <Image src={images.milkbar.replace("/", "")} width="50%" height="50%" ></Image> */}
  <Text textAlign="right" margin="0 0 10px 0" bold italic textColor="quartenary">
          NET
          <FontAwesome className='white' name='table' size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
        </Text>
        {/* </Link> */}
    </Fill>
  </Layout>
      <Layout fit>

  <Fill>
  {/* <Link href="http://www.mudnyc.com"> */}
  {/* <Image src={images.mud.replace("/", "")}  width="50%" height="50%"></Image> */}
  <Text textAlign="left" margin="0 0 10px 0"  bold italic textColor="quartenary">
  <FontAwesome className='white' rotate={90} name='random' size='1x'
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />
      Spansets
      </Text>
      {/* </Link> */}
  </Fill>


  <Fill>
  {/* <Link href="http://www.cafemogador.com"> */}
  {/* <Image src={images.mogador.replace("/", "")} width="100%" height="50%"></Image> */}

<Text textAlign="right"margin="0 0 10px 0" bold italic textColor="quartenary">
        Tissu
      <FontAwesome  className='white' name='fire' rotate={180} size='1x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          </Text>
      {/* </Link> */}
  </Fill>

</Layout>
  <Heading margin="20px 0 0 0" caps fit>options</Heading>
</Slide>

<Slide>
Shows
The Chicago Party
False Awakening
</Slide>

{/* NIGHT CLUBS AND VARIETY - LOGO BADGE  */}
<Slide>
  <Heading>Nightclubs​ ​&​ ​Variety</Heading>

<List>
  <ListItem>The Box NYC</ListItem>
  <ListItem>El Ministerio De La Parranda</ListItem>
  <ListItem>Que Bajo?!</ListItem>
  <ListItem>Little Cinema</ListItem>
  <ListItem>Blunderland</ListItem>
  <ListItem>Lightning Society</ListItem>
  <ListItem>No Holds Barred</ListItem>
  <ListItem>The House of YES</ListItem>
  <ListItem>The Slipper Room</ListItem>
  <ListItem>Diamond Horseshoe</ListItem>
</List>

  <Text>TV & Commercial</Text>
    <List>
    <ListItem>Casual Films - commercial shoot</ListItem>
    <ListItem>Younger (TV Land)</ListItem>
    </List>
</Slide>

<Slide>

  <Text textFont="secondary" textColor="white" fit>
    <FontAwesome className='white' name='instagram' size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
       ravenkindness
  </Text>
  <Text textFont="secondary" textColor="white" fit>  <FontAwesome
    className='white'
    name='envelope'
    size='1x'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
  />ravenkindness@gmail.com</Text>
</Slide>


        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide align="center center" transition={["fade"]} bgImage={images.feathers.replace("/", "")} bgDarken={0.15}>
          <BlockQuote >
            <Quote textColor="secondary">Example Quote</Quote>
            <Cite textColor="tertiary">Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
