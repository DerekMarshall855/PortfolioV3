import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentStyles';

const data = [
  { number: 500, text: 'Github Commits' },
  { number: 25, text: 'Projects', },
  { number: 3, text: 'Years of Experience', },
  { number: 10, text: 'Technology Certifications', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
