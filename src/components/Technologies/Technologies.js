import React from 'react';
import { DiDatabase, DiReact } from 'react-icons/di';
import { SiUnrealengine } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've working with a range of technologies in web, game, and graphics development.
      My work lies primarily in full stack web development. That said, I am interested in all kinds of development,
      including back end, cloud, graphics, and imbedded systems.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Angular, CSS, <br />
            NgRx, Redux, and NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS, Go, C++, <br />
            NodeJS, NestJS, ExpressJS <br />
            MongoDB, Redis, and DynamoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiUnrealengine size="5rem" />
        <ListContainer>
          <ListTitle>Game/Graphics</ListTitle>
          <ListParagraph>
            Experience with <br />
            WebGL, C++, Unreal Engine, <br />
            Godot, Asperite, and Blender
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
