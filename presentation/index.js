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
  markdown: require("../assets/markdown.png"),
  drawing: require("../assets/epk/raven_adriano_lyra.jpg"),

  birdcage: require("../assets/epk/raven_birdcage_bw.jpg"),




  birdcage2: require("../assets/_epk/birdcage.jpg"),
  lyra: require("../assets/_epk/lyra.jpg"),
  feathers: require("../assets/raven_animal/feathers_2.jpg"),
  cubit: require("../assets/_epk/cubit.jpg"),
  houseofyes: require("../assets/_epk/house_of_yes.jpg"),
  signature: require("../assets/_epk/signature.jpg"),
  silks: require("../assets/_epk/silks.jpg"),
  rig: require("../assets/_epk/rig.jpg"),
  burning: require("../assets/_epk/burning_black.jpg"),
  lc: require("../assets/_epk/lc.jpg"),
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
      <Text fill caps italic textColor="secondary">
         {/* <FontAwesome className='white' name='clock-o' size='1x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />  */}
            15-60 minutes</Text>


    <Heading fit caps margin="20px 0 0 0" textColor="secondary">Original Productions</Heading>
    <Text fill caps italic textColor="secondary">The Chicago Party</Text>
    <Text fill caps italic textColor="secondary">False Awakening</Text>
  </Slide>


  {/* Appaatus */}
    <Slide align="center center" transition={["fade"]} bgImage={images.houseofyes.replace("/", "")} bgDarken={0.67}>
      <Heading margin="0 0 20px 0" caps fit textColor="secondary">apparatus</Heading>
        <Layout fit>
          <Fill>
        <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="secondary">
          <FontAwesome className='white' name='institution' size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                Birdcage
              </Text>
          </Fill>
          <Fill>
      <Text textAlign="right" margin="0 0 10px 0"  bold italic textColor="secondary">
              Corde Lisse
              <FontAwesome className='white' name='road' size='1x'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
              </Text>
          </Fill>
            </Layout>
              <Layout fit>
          <Fill>
              <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="secondary">
            <FontAwesome className='white' name='cube' size='1x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                  Cubit
                </Text>
          </Fill>
          <Fill>
            <Text textAlign="right" margin="0 0 10px 0"  bold italic textColor="secondary">
                Hammock
                <FontAwesome className='white' name='leaf' rotate={180} size='1x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
              </Text>
          </Fill>
          </Layout>
              <Layout fit>
          <Fill>
                  <Text textAlign="left" margin="0 0 10px 0" bold italic textColor="secondary">
          <FontAwesome className='primary'  name='opera' size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
              LYRA
            </Text>
          </Fill>
          <Fill>
        <Text textAlign="right" margin="0 0 10px 0" bold italic textColor="secondary">
                NET
                <FontAwesome className='white' name='table' size='1x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
              </Text>
          </Fill>
        </Layout>
    <Layout fit>
        <Fill>
      <Text textAlign="left" margin="0 0 10px 0"  bold italic textColor="secondary">
        <FontAwesome className='white' rotate={90} name='random' size='1x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
            Spansets
            </Text>
        </Fill>
        <Fill>
    <Text textAlign="right"margin="0 0 10px 0" bold italic textColor="secondary">
              Tissu
            <FontAwesome  className='white' name='fire' rotate={180} size='1x'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                </Text>
        </Fill>
      </Layout>
        <Heading margin="20px 0 0 0" caps fit textColor="secondary">options</Heading>
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
    <Text textColor="secondary" italic>TV & Commercial</Text>

</Slide>




{/* NIGHT CLUBS AND VARIETY - LOGO BADGE  */}
  <Slide align="center center" transition={["fade"]} bgImage={images.feathers.replace("/", "")} bgDarken={0.50}>
  <Heading fit>Nightclubs​ ​&​ ​Variety</Heading>
  <Text fill textColor="secondary">The Box: NYC | UK</Text>
  <Text fill textColor="secondary">Blunderland</Text>
  <Text fill textColor="secondary">Diamond Horseshoe</Text>
  <Text fill textColor="secondary">The House of YES</Text>
  <Text fill textColor="secondary">Lightning Society</Text>
  <Text fill textColor="secondary">Little Cinema</Text>
  <Text fill textColor="secondary">El Ministerio De La Parranda</Text>
  <Text fill textColor="secondary">No Holds Barred</Text>
  <Text fill textColor="secondary">Que Bajo?!</Text>
  <Text fill textColor="secondary">The Slipper Room</Text>
</Slide>



{/* Contact Info */}
<Slide align="left center" bgImage={images.burning.replace("/", "")} bgDarken={0.67}>
    <Link href="http://www.instagram.com/ravenkindness" _blank >
  <Text textAlign="right" italic textFont="secondary" textColor="white">
    <FontAwesome className='white' name='instagram' size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
       ravenkindness
  </Text>
</Link>
  <Link href="http://www.kindnessofravens.com" _blank>
  <Text textAlign="right" italic textFont="secondary" textColor="white">
    <FontAwesome className='white' name='globe' size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
       kindnessofravens.com
  </Text>
</Link>
<Link href="mailto:ravenkindness@gmail.com" _blank>
  <Text textAlign="right" italic textFont="secondary" textColor="white">  <FontAwesome
    className='white'
    name='envelope'
    size='1x'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
  />ravenkindness@gmail.com</Text>
</Link>
</Slide>
      </Deck>
    );
  }
}
