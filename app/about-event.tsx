"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "../components/about-card";

const EVENT_INFO = [
  {
    title: "SHORT TERM GOALS",
    description:
      [
        'Promoting tennis in younger generations of our region.',
      'Formulating the current structure of tennis in north Karnataka by developing a ranking system which will helps players understand there progress and motivate them to perform better day after day.',
      'To provide information regarding all upcoming events, rules, participation etc being conducted under the banner of NKTA and information on players , their current standing, performances, details etc.',
      'Help conduct tournaments under the banner of NKTA with financial aid, systematic score maintenance and dynamic website uploading, making a fair draw, standardising categories for events.',
      'Provide short term coaching in different districts of north Karnataka to promote tennis.'
    ],
    subTitle: "Presentation",
  },
  {
    title: "LONG TERM GOALS",
    description:
      ['Formation of a self sustainable professional tennis academy in north Karnataka.',
      'To sponsor exceptional talent and help them achieve there goals.',
      'Conduct regular camps in various districts of north Karnataka all round the year and motivate more young children to take up tennis.'],
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section id="aboutnkta" className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h3" className="text-center" color="blue-gray" placeholder="">
        All about NKTA
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        placeholder=""
      >
        NKTA is a non profitable organisation which brings together players from all private, semi private and department run clubs in north Karnataka region together. 
      </Typography>
      <div className="md:col-span-2">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AboutEvent;
