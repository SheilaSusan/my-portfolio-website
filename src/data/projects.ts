export interface Project {
  title: string;
  tag: string;
  description: string;
  theme: string;
  type: string;
  sourceUrl?: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: 'Weather App',
    tag: 'wa',
    description: 'A web application that allows users to check the weather in any location. Built with JavaScript, React & OpenWeather API.',
    theme: 'blue',
    type: 'default',
    sourceUrl: 'https://github.com/SheilaSusan/weather-app',
    liveUrl: 'https://weather-app-sue.netlify.app/',
  },
  {
    title: 'Password Generator',
    tag: 'pg',
    description: 'A web application that generates secure passwords for users. Built with JavaScript.',
    theme: 'green',
    type: 'absolute',
    sourceUrl: 'https://github.com/SheilaSusan/Password-Generator',
    liveUrl: 'https://assword-generator.netlify.app/',
  },
  {
    title: 'Deck of Cards API',
    tag: 'ta',
    description: 'A web application that allows users to fetch a new Deck of cards and play against the computer. It then gives the winner once the game is finished.',
    theme: 'orange',
    type: 'split',
    sourceUrl: 'https://github.com/SheilaSusan/deck-of-cards-API',
    liveUrl: 'https://eck-of-cards-api.netlify.app/',
  },
];

export default projects;