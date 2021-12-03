import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There <br />
        Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        My name is Derek Marshall, I am a detail-oriented and self-motivated Computer Science and Psychology graduate with experience in
        software development. I primarily focus on backend web development but have gained experience in frontend development, 
        game development, and graphics programming in my personal time. My strongest languages are JavaScript, Go, Python, and C++.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/derekmarshall855'}>Learn More</Button>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;