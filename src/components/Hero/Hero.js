import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello Friend <br />
        Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        My name is Derek Marshall, I am a detail-oriented and self-motivated graduate with experience in
        software development. I graduated from Wilfrid Laurier University's Computer Science and Psychology double degree program in April 2021, with a cumulative GPA of 3.7.
        I've worked in industry as a full stack developer for over a year, and am currently doing the same at the Government of Canada - IRCC.
        Currently my goal is to keep improving in a wide variety of langauges and technologies so I can keep pursuing my passion for code.
        My best languages right now are Typescript and Go, but I have experience in many others, and learn new ones quickly.
        I am always open to ideas or offers of employment, and I encourage anyone to reach out to me on linkedin!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/derekmarshall855'}>Learn More</Button>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;