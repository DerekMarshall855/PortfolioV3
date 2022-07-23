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
        I've worked in industry as a full stack developer for over a year, and am currently employed by the Government of Canada - IRCC.
        Presently, my goal is to continue improving in a wide variety of langauges and technologies so I can keep pursuing my passion for code.
        My best languages are Typescript and Go, but I have experience in many others, and learn new ones quickly.
        I am always open to new and interesting ideas and conversation, so I encourage anyone to reach out to me on linkedin!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/derekmarshall855'}>Learn More</Button>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;