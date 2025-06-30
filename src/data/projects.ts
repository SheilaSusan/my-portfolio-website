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
    liveUrl: 'https://Password-Generator-sue.netlify.app',
  },
  {
    title: 'Unit Converter',
    tag: 'ta',
    description: 'A web application that allows users to convert units of measurement. Built with JavaScript.',
    theme: 'orange',
    type: 'split',
    sourceUrl: 'https://github.com/SheilaSusan/Unit-converter',
    liveUrl: 'https://Unit-converter-sue.netlify.app/',
  },
];

export default projects;