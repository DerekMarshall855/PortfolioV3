import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World, <br />
        Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        My name is Derek Marshall, I am a detail-oriented and self-motivated software engineer with a wide range of experience in software development paradigms. I am nearing 3 years of professional experience currently, even more if you count my personal endeavors.
        After graduating from Laurier, with a cumulative GPA of 3.7, I began pursuing solo projects that interested me.
        This lead me to make small projects in many languages, from C++ to Typescript, and experiment in developing for web, games, and even graphics. Currently, I am employed at IRCC,
        where I work as a full stack developer. Here I've focused mainly on backend and cloud development, sharpening my Java, Typescript, and AWS skills. I've build out architectures and participated in the full software development life cycle, building scalable software currently in use at some VAC offices.
        My current goal is to keep improving, both as a developer and as a person, while still finding time to do the things I love, like reading, gaming, and socialzing.
        I am always open to new and interesting ideas, conversations, and oppurtunities, so please reach out to me on linkedin!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/derekmarshall855/'}>Learn More</Button>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;