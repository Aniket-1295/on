const fs = require('fs');

const featuresFile = 'c:/Users/om/OneDrive/Desktop/ddd2/revio-react/src/components/sections/FeaturesOverview.jsx';
const heroFile = 'c:/Users/om/OneDrive/Desktop/ddd2/revio-react/src/components/sections/Hero.jsx';

let featuresCode = fs.readFileSync(featuresFile, 'utf8');
let heroCode = fs.readFileSync(heroFile, 'utf8');

const lines = featuresCode.split('\n');

const card4 = lines.slice(132, 166).join('\n'); // lines 133 to 166
const card5 = lines.slice(167, 215).join('\n'); // lines 168 to 215
const card6 = lines.slice(216, 244).join('\n'); // lines 217 to 244

const fixClass = (c) => c.replace('h-[480px]', 'h-full');

const componentsToInject = `
function SupportCard() {
  return (
${fixClass(card4)}
  )
}

function MultilingualCard() {
  return (
${fixClass(card5)}
  )
}

function SchedulingCard() {
  return (
${fixClass(card6)}
  )
}
`;

heroCode = heroCode.replace('export default function Hero() {', componentsToInject + '\nexport default function Hero() {');

const oldGrid = `<div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-6 sm:gap-8 z-10 relative">
          <PipelineIntelligenceCard />
          <RevenueForecastingCard />
          <DealPrioritizationCard />
        </div>`;
const newGrid = `<div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-6 sm:gap-8 z-10 relative">
          <PipelineIntelligenceCard />
          <RevenueForecastingCard />
          <DealPrioritizationCard />
          <SupportCard />
          <MultilingualCard />
          <SchedulingCard />
        </div>`;

heroCode = heroCode.replace(oldGrid, newGrid);
fs.writeFileSync(heroFile, heroCode);

lines.splice(3, 243);

fs.writeFileSync(featuresFile, lines.join('\n'));
console.log('Done!');
