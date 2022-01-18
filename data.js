import imgMoonPNG from 'url:/assets/destination/image-moon.png';
import imgMarsPNG from 'url:/assets/destination/image-mars.png';
import imgEuropaPNG from 'url:/assets/destination/image-europa.png';
import imgTitanPNG from 'url:/assets/destination/image-titan.png';

import douglasPNG from 'url:/assets/crew/image-douglas-hurley.png';
import anoushehPNG from 'url:/assets/crew/image-anousheh-ansari.png';
import markPNG from 'url:/assets/crew/image-mark-shuttleworth.png';
import victorPNG from 'url:/assets/crew/image-victor-glover.png';

import launchVehicleLand from 'url:/assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePort from 'url:/assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLand from 'url:/assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePort from 'url:/assets/technology/image-space-capsule-portrait.jpg';
import spacePortLand from 'url:/assets/technology/image-spaceport-landscape.jpg';
import spacePortPort from 'url:/assets/technology/image-spaceport-portrait.jpg';

export default {
  destinations: [
    {
      name: 'Moon',
      images: {
        png: `${imgMoonPNG}`,
      },
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
    },
    {
      name: 'Mars',
      images: {
        png: `${imgMarsPNG}`,
      },
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 mil. km',
      travel: '9 months',
    },
    {
      name: 'Europa',
      images: {
        png: `${imgEuropaPNG}`,
      },
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travel: '3 years',
    },
    {
      name: 'Titan',
      images: {
        png: `${imgTitanPNG}`,
      },
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travel: '7 years',
    },
  ],
  crew: [
    {
      name: 'Douglas Hurley',
      images: {
        png: `${douglasPNG}`,
      },
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      name: 'Mark Shuttleworth',
      images: {
        png: `${markPNG}`,
      },
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      name: 'Victor Glover',
      images: {
        png: `${victorPNG}`,
      },
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      name: 'Anousheh Ansari',
      images: {
        png: `${anoushehPNG}`,
      },
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ],
  technology: [
    {
      name: 'Launch vehicle',
      images: {
        portrait: `${launchVehiclePort}`,
        landscape: `${launchVehicleLand}`,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: 'Spaceport',
      images: {
        portrait: `${spacePortPort}`,
        landscape: `${spacePortLand}`,
      },
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      name: 'Space capsule',
      images: {
        portrait: `${spaceCapsulePort}`,
        landscape: `${spaceCapsuleLand}`,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
