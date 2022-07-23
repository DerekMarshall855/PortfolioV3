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
        My name is Derek Marshall, I am a detail-oriented and self-motivated developer with experience in
        software development. I graduated from Wilfrid Laurier Unversity Computer Science and Psychology double degree program in April 2021, with a cumulative GPA of 3.7.
        I've worked in industry as a full stack developer for over a year, and am currently doing the same at the Government of Canada - IRCC.
        I primarily focus on cloud and backend web development but have gained experience in frontend development,
        game development, and graphics programming in my personal time. My strongest languages are TypeScript and Go, but I have experience in many other languages,
        and find it easy to pickup new languages quickly.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/derekmarshall855'}>Learn More</Button>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;