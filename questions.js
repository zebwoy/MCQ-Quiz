// creating an array and passing the number, questions, options, and answers
let questions = [{
  numb: 1, question: "What are the end products of cellular respiration?",
  answer: "Water and carbon dioxide",
  options: [
    "Water and carbon dioxide",
    "Carbon dioxide and oxygen",
    "Water and oxygen",
    "Sugar and oxygen"]
},
{
  numb: 2,
  question: "The stomata are present on which part of the plant?",
  answer: "Leaves",
  options: [
    "Roots",
    "Leaves",
    "Stem",
    "Flowers"
  ]
},
{
  numb: 3,
  question: "Which of the following is not a type of symbiotic relationship?",
  answer: "Predation",
  options: [
    "Mutualism",
    "Commensalism",
    "Parasitism",
    "Predation"
  ]
},
{
  numb: 4,
  question: "What are the components of blood?",
  answer: "Red blood cells, white blood cells, and plasma",
  options: [
    "Red blood cells, white blood cells, and plasma",
    "Platelets, plasma, and hemoglobin",
    "White blood cells, plasma, and hemoglobin",
    "Red blood cells, platelets, and plasma"
  ]
},
{
  numb: 5,
  question: "The process of photosynthesis takes place in which part of the plant cell?",
  answer: "Chloroplast",
  options: [
    "Vacuole",
    "Chloroplast",
    "Mitochondria",
    "Nucleus"
  ]
},
{
  numb: 6,
  question: "Who discovered the structure of DNA?",
  answer: "James Watson and Francis Crick",
  options: [
    "Charles Darwin",
    "Gregor Mendel",
    "James Watson and Francis Crick",
    "Robert Hooke"
  ]
},
{
  numb: 7,
  question: "What is the main function of the renal system?",
  answer: "Excretion of waste products",
  options: [
    "Excretion of waste products",
    "Homeostasis",
    "Hormone regulation",
    "Blood circulation"
  ]
},
{
  numb: 8,
  question: "Which of the following is not a component of the nervous system?",
  answer: "Muscle",
  options: [
    "Brain",
    "Spinal cord",
    "Nerves",
    "Muscle"
  ]
},
{
  numb: 9,
  question: "What are the stages of the menstrual cycle?",
  answer: "Follicular, ovulatory, and luteal",
  options: [
    "Follicular, ovulatory, and luteal",
    "Proestrus, estrus, and diestrus",
    "Ovarian, uterine, and follicular",
    "Menstrual, proliferative, and secretory"
  ]
},
{
  numb: 10,
  question: "The hormones secreted by the pancreas regulate which of the following body processes?",
  answer: "All of the above",
  options: [
    "Blood pressure",
    "Blood sugar levels",
    "Metabolism",
    "All of the above"
  ]
},
{
  numb: 11,
  question: "Which of the following is a monosaccharide?",
  answer: "Glucose",
  options: [
    "Glucose",
    "Sucrose",
    "Lactose",
    "Fructose"
  ]
},
{
  numb: 12,
  question: "Which of the following is a noble gas?",
  answer: "Helium",
  options: [
    "Oxygen",
    "Carbon",
    "Nitrogen",
    "Helium"
  ]
},
{
  numb: 13,
  question: "Which of the following is the lightest gas?",
  answer: "Hydrogen",
  options: [
    "Oxygen",
    "Nitrogen",
    "Carbon dioxide",
    "Hydrogen"
  ]
},
{
  numb: 14,
  question: "Which of the following is not a type of chemical bond?",
  answer: "Magnetic bond",
  options: [
    "Ionic bond",
    "Covalent bond",
    "Metallic bond",
    "Magnetic bond"
  ]
},
{
  numb: 15,
  question: "Which of the following elements has the highest electronegativity?",
  answer: "Fluorine",
  options: [
    "Carbon",
    "Oxygen",
    "Nitrogen",
    "Fluorine"
  ]
},
{
  numb: 16,
  question: "What is the SI unit of pressure?",
  answer: "Pascal",
  options: [
    "Newton",
    "Joule",
    "Watt",
    "Pascal"
  ]
},
{
  numb: 17,
  question: "Which of the following is a vector quantity?",
  answer: "Acceleration",
  options: [
    "Mass",
    "Temperature",
    "Energy",
    "Acceleration"
  ]
},
{
  numb: 18,
  question: "Which of the following is not a state of matter?",
  answer: "Energy",
  options: [
    "Solid",
    "Liquid",
    "Gas",
    "Energy"
  ]
},
{
  numb: 19,
  question: "Which of the following is not an enzyme?",
  answer: "Gastrin",
  options: [
    "Amylase",
    "Pepsin",
    "Lactase",
    "Gastrin"
  ]
},
{
  numb: 20,
  question: "Which of the following is not a type of RNA?",
  answer: "Recombinant RNA",
  options: [
    "Messenger RNA",
    "Transfer RNA",
    "Ribosomal RNA",
    "Recombinant RNA"
  ]
},
{
  numb: 21,
  question: "What is the function of the nucleolus?",
  answer: "c. Ribosome synthesis",
  options: [
    "a. Protein synthesis",
    "b. Lipid synthesis",
    "c. Ribosome synthesis",
    "d. Carbohydrate synthesis"
  ]
},
{
  numb: 22,
  question: "What is the primary source of energy in the cell?",
  answer: "a. ATP",
  options: [
    "a. ATP",
    "b. Glucose",
    "c. Sucrose",
    "d. Fructose"
  ]
},
{
  numb: 23,
  question: "What is the function of the adrenal gland?",
  answer: "a. Regulation of blood pressure",
  options: [
    "a. Regulation of blood pressure",
    "b. Regulation of blood sugar levels",
    "c. Regulation of the immune system",
    "d. Regulation of the sleep-wake cycle"
  ]
},
{
  numb: 24,
  question: "Which of the following structures is not found in prokaryotic cells?",
  answer: "c. Nucleus",
  options: [
    "a. Cell wall",
    "b. Plasma membrane",
    "c. Nucleus",
    "d. Ribosomes"
  ]
},
{
  numb: 25,
  question: "Which of the following is not a function of the respiratory system?",
  answer: "c. Production of red blood cells",
  options: [
    "a. Gas exchange",
    "b. Regulation of blood pH",
    "c. Production of red blood cells",
    "d. Removal of carbon dioxide"
  ]
},
{
  numb: 26,
  question: "Which of the following is not a colligative property?",
  answer: "d. Viscosity",
  options: [
    "a. Freezing point depression",
    "b. Boiling point elevation",
    "c. Osmotic pressure",
    "d. Viscosity"
  ]
},
{
  numb: 27,
  question: "What is the difference between an acid and a base?",
  answer: "b. Acids donate protons, while bases accept protons",
  options: [
    "a. Acids have a higher pH than bases",
    "b. Acids donate protons, while bases accept protons",
    "c. Acids accept electrons, while bases donate electrons",
    "d. Acids have a bitter taste, while bases have a sour taste"
  ]
},
{
  numb: 28,
  question: "What is the oxidation state of carbon in methane (CH4)?",
  answer: "d. +4",
  options: [
    "a. 0",
    "b. +1",
    "c. -1",
    "d. +4"
  ]
},
{
  numb: 29,
  question: "What is the function of a catalyst in a chemical reaction?",
  answer: "a. To increase the rate of the reaction",
  options: [
    "a. To increase the rate of the reaction",
    "b. To decrease the rate of the reaction",
    "c. To change the direction of the reaction",
    "d. To change the temperature of the reaction"
  ]
},
{
  numb: 30,
  question: "Which of the following is a characteristic of an exothermic reaction?",
  answer: "c. The reaction releases heat to the surroundings",
  options: [
    "a. The reaction absorbs heat from the surroundings",
    "b. The products have a higher energy than the reactants",
    "c. The reaction releases heat to the surroundings",
    "d. The reaction is not spontaneous"
  ]
},
{
  numb: 31,
  question: "What is the formula for kinetic energy?",
  answer: "a. KE = 1/2 mv^2",
  options: [
    "a. KE = 1/2 mv^2",
    "b. KE = mgh",
    "c. KE = 1/2 kx^2",
    "d. KE = PΔV"
  ]
},
{
  numb: 32,
  question: "What is the difference between velocity and speed?",
  answer: "c. Velocity is the rate of change of displacement with respect to time, while speed is the rate of change of distance with respect to time",
  options: [
    "a. Velocity is a scalar quantity, while speed is a vector quantity",
    "b. Velocity is the rate of change of distance with respect to time, while speed is the rate of change of displacement with respect to time",
    "c. Velocity is the rate of change of displacement with respect to time, while speed is the rate of change of distance with respect to time",
    "d. Velocity and speed are the same thing"
  ]
},
{
  numb: 33,
  question: "What is the principle of conservation of momentum?",
  answer: "a. The total momentum of a system is conserved if no external forces act on the system",
  options: [
    "a. The total momentum of a system is conserved if no external forces act on the system",
    "b. The total kinetic energy of a system is conserved if no external forces act on the system",
    "c. The total potential energy of a system is conserved if no external forces act on the system",
    "d. The total energy of a system is conserved if no external forces act on the system"
  ]
}
]