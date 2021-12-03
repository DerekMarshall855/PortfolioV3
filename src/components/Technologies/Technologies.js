import React from 'react';
import { DiDatabase, DiReact } from 'react-icons/di';
import { SiUnrealengine } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've working with a range of technologies in web, game, and graphics development.
      My work lies primarily in full stack web development, but I am most interested in backend and graphics.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Styled Components, and Sass
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Go, C++, and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiUnrealengine size="5rem" />
        <ListContainer>
          <ListTitle>Game/Graphics</ListTitle>
          <ListParagraph>
            Experience with <br />
            WebGL, C++, Unreal Engine, and Blender
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
