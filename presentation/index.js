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
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  drawing: require("../assets/epk/raven_adriano_lyra.jpg"),
  cubit: require("../assets/epk/RAVEN_cubit2.jpg"),
  lyra: require("../assets/epk/Raven_lyra.jpg"),
  feathers: require("../assets/raven_animal/feathers_2.jpg"),
  signature: require("../assets/epk/RAVEN_signature_bw.jpg"),
  silks: require("../assets/epk/RAVEN_silks_re.jpg"),
  birdcage: require("../assets/epk/raven_birdcage_bw.jpg"),
  birdcage2: require("../assets/epk/raven_birdcage.jpg"),

  rig: require("../assets/epk/RAVEN_rig.jpg"),
  houseofyes: require("../assets/epk/RAVEN_hoy.jpg"),
  lc: require("../assets/epk/RAVEN_lc_bw.jpg"),


    burning: require("../assets/_epk/RAVEN_burning_black.jpg"),
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
  <Deck controls={true} progress={"bar"} transition={["fade"]} transitionDuration={500} theme={theme}>

      <Slide transition={["fade"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
        <Heading fit bold textColor="primary">RAVEN</Heading>
      </Slide>

      <Slide transition={["fade"]} bgImage={images.signature.replace("/", "")} bgDarken={0.85}>
        <BlockQuote >
        <Quote textColor="secondary">Once upon a midnight dreary...</Quote>
        </BlockQuote>
      </Slide>

{/* Slideshow */}
  <Slide transition={["fade"]} bgImage={images.signature.replace("/", "")} bgDarken={0.33} />
  <Slide transition={["fade"]} bgImage={images.silks.replace("/", "")} bgDarken={0.33} />
    <Slide transition={["fade"]} bgImage={images.rig.replace("/", "")} bgDarken={0.67} />
      <Slide transition={["fade"]} bgImage={images.lc.replace("/", "")} bgDarken={0.67} />

{/* Services */}
  <Slide transition={["fade"]} bgImage={images.feathers.replace("/", "")} bgDarken={0.75}>
      <Heading caps textColor="secondary">SERVICES</Heading>
  </Slide>

  <Slide transition={["fade"]} bgImage={images.lyra.replace("/", "")} bgDarken={0.75}>
      <Heading fill caps textColor="secondary">Feature</Heading>
        <Text fill caps italic textColor="secondary">Aerial Duo</Text>
        <Text fill caps italic textColor="secondary">Tandem Duo</Text>
        <Text fill caps italic textColor="secondary">Solo</Text>

      <Heading fill caps textColor="secondary">Ambient</Heading>
        <Text fill caps italic textColor="secondary">Aerial Duo</Text>
        <Text fill caps italic textColor="secondary">Tandem Duo</Text>
        <Text fill caps italic textColor="secondary">Solo</Text>
        <Text fill caps italic textColor="secondary">contortion-based acro</Text>
        <Text fill caps italic textColor="secondary">Dance</Text>
  </Slide>

  <Slide transition={["fade"]} bgImage={images.cubit.replace("/", "")} bgDarken={0.75}>
    <Heading fit caps textColor="secondary">Stage Shows</Heading>
      <Text fill caps italic textColor="secondary">  <FontAwesome className='white' name='clock-o' size='1x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /> 5-60 minutes</Text>
    <Heading margin="20px 0 0 0" fit caps textColor="secondary">Collaboration</Heading>
    <Text fill caps italic textColor="secondary">Theater</Text>
    <Text fill caps italic textColor="secondary">Dance</Text>
  </Slide>


{/* EVENTS */}
<Slide transition={["fade"]} bgColor="primary" textColor="secondary" bgImage={images.birdcage2.replace("/", "")} bgDarken={0.85}>
  <Heading fit caps textColor="secondary" caps>OCCASIONS</Heading>

    <Text textColor="secondary" italic>corporate events</Text>
    <Text textColor="secondary" italic>commercial video</Text>
    <Text textColor="secondary" italic>still shoots</Text>
    <Text textColor="secondary" italic>nightclubs</Text>
    <Text textColor="secondary" italic>concerts</Text>
    <Text textColor="secondary" italic>immersive theatre</Text>
    <Text textColor="secondary" italic>proscenium productions</Text>
    <Text textColor="secondary" italic>variety</Text>

</Slide>


{/* Appaatus */}
  <Slide align="center center" transition={["fade"]} bgImage={images.houseofyes.replace("/", "")} bgDarken={0.67}>
    <Heading margin="0 0 20px 0" caps fit textColor="secondary">apparatus</Heading>
      <Layout fit>
        <Fill>
        {/* <Link href="http://milkbarstore.com"> */}
        {/* <Image src={images.milkbar.replace("/", "")} width="50%" height="50%" ></Image> */}
      <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="quartenary">
        <FontAwesome className='white' name='institution' size='1x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
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
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
            </Text>
        </Fill>
          </Layout>
            <Layout fit>
        <Fill>
          {/* <Link href="http://milkbarstore.com"> */}
          {/* <Image src={images.milkbar.replace("/", "")} width="50%" height="50%" ></Image> */}
            <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="quartenary">
          <FontAwesome className='white' name='cube' size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                Cubit
              </Text>
        </Fill>


        <Fill>
          <Text textAlign="right" margin="0 0 10px 0"  bold italic textColor="quartenary">
        {/* <Link href="http://www.abraconyc.com"> */}
        {/* <Image src={images.abraco.replace("/", "")}  width="100%" height="50%"></Image> */}

              Hammock
              <FontAwesome className='white' name='leaf' rotate={180} size='1x'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
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
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
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
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
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
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
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
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
              </Text>
          {/* </Link> */}
      </Fill>

    </Layout>
      <Heading margin="20px 0 0 0" caps fit textColor="secondary">options</Heading>
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

  <Heading>TV & Commercial</Heading>
    <List>
    <ListItem>Casual Films - commercial shoot</ListItem>
    <ListItem>Younger (TV Land)</ListItem>
    </List>
</Slide>

<Slide align="left center" bgImage={images.burning.replace("/", "")} bgDarken={0.75}>

  <Text textAlign="right" italic textFont="secondary" textColor="white">
    <FontAwesome className='white' name='instagram' size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
       ravenkindness
  </Text>
  <Text textAlign="right" italic textFont="secondary" textColor="white">  <FontAwesome
    className='white'
    name='envelope'
    size='1x'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
  />ravenkindness@gmail.com</Text>
</Slide>


      </Deck>
    );
  }
}
