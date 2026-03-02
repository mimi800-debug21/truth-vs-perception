export interface Question {
  id: string;
  question: string;
  type: 'slider' | 'number';
  min?: number;
  max?: number;
  answer: number;
  unit: string;
  source: string;
  comment: string;
}

export const questions: Question[] = [
  {
    id: 'dark-mode',
    question: 'Wie viele Prozent der Websites weltweit nutzen Dark Mode?',
    type: 'slider',
    min: 0,
    max: 100,
    answer: 41,
    unit: '%',
    source: 'Statista 2023',
    comment: 'Menschen überschätzen oft Tech-Trends',
  },
  {
    id: 'reading-speed',
    question: 'Wie viele Sekunden braucht ein durchschnittlicher Mensch, um 1 A4-Seite zu überfliegen?',
    type: 'number',
    answer: 50,
    unit: 'Sekunden',
    source: 'University of Michigan, 2019',
    comment: 'Nutzer unterschätzen oft die Geschwindigkeit beim Lesen',
  },
  {
    id: 'big-mac-calories',
    question: 'Wie viele Kalorien hat ein Big Mac?',
    type: 'number',
    answer: 563,
    unit: 'kcal',
    source: 'McDonald\'s Nährwertangaben',
    comment: 'Überraschung: oft zu hoch geschätzt',
  },
  {
    id: 'water-consumption',
    question: 'Wie viele Liter Wasser verbraucht man durchschnittlich pro Tag (inkl. indirekt durch Produkte)?',
    type: 'number',
    answer: 3000,
    unit: 'Liter',
    source: 'Water Footprint Network',
    comment: 'Sehr unterschätzt, guter Aha-Effekt',
  },
  {
    id: 'social-media',
    question: 'Wie viele Stunden verbringt die durchschnittliche Person pro Woche auf Social Media?',
    type: 'number',
    answer: 20,
    unit: 'Stunden',
    source: 'Global Web Index 2023',
    comment: 'Überraschung: Menschen schätzen oft weniger',
  },
];
