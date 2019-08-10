import React from 'react';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import Intro from './components/Intro';
import Container from './components/Container';
import Projects from './container/Projects';
import Footer from './components/Footer';
import Test from './components/Test';
// ipmort TestR from './components/TestR';
import LinkRouter from './components/TestR';
import LevelOne from './components/Games/01/componentsG/page';

import Page from '../src/components/Games/01/componentsG/page.js'




import {
    firstName,
    fullName,
    links,
    socialLinks
} from './constants'


function App() {
    return (

        <Box
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
            position="absolute"
            justifyContent="space-between"
        >
            <Container>
                <Header name={fullName} links={links} />
                <Intro name={firstName} aboutLinkHref={links[1].href} />
                <Projects />
                {/* <LinkRouter /> */}
                {/* <LevelOne/> */}
            </Container>

            <Container>
            <Test />
            </Container>
            
            <Container id="games">
                <Page />
            </Container>

            <Footer links={socialLinks} />
        </Box>

    );
}

export default App;

