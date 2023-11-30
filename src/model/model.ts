import jsonfile from "jsonfile";
import { pathFile } from "../database";

interface Charater {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: any;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

// GET ALL DATA
const getAllCharacters = () => jsonfile.readFileSync(pathFile);

const validateStudentCharacter = (name = "", lastname = ""): Charater[] => {
  const data = getAllCharacters();

  const characters: Charater[] = data.filter((character: Charater) => {
    // const fullName = character.name.split(" ").pop()
    // const characterLastName = character.name.split(" ").pop(); // "Harry Potter" -> ["Harry", "Potter"]
    const lowerName = name.toLowerCase();
    if (
      character.name.toLowerCase().startsWith(lowerName) &&
      character.hogwartsStudent === true
    ) {
      return character;
    }
  });

  console.log(characters);

  return characters;
};

// const params = process.argv.splice(2);

// validateStudentCharacter(params[2]);

// Daniel Radcliffe -> dan
const getCharacterById = (id: string): Charater | undefined => {
  const data = getAllCharacters();
  const foundCharacter = data.find(
    (character: Charater) => character.id === id
  );
  return foundCharacter;
};

const showWandData = (id: string): Charater | undefined | string => {
  const data = getAllCharacters();
  const foundCharacter = data.find(
    (character: Charater) => character.id === id
  );
  if (foundCharacter.id === id) {
    return foundCharacter.wand;
  }
};

const showdataWand = (wandData: any) => {
  console.log(
    `La varita está construida en madera ${wandData.wood}, la escencia es de ${wandData.core} y la longitud es de ${wandData.length * 2.54}cm.`
  );
};

const mostrarVarita = showWandData("ca3827f0-375a-4891-aaa5-f5e8a5bad225");
console.log(mostrarVarita);

const filterByHouse = (house: string): Charater[] => {
  const data = getAllCharacters();
  const arrayCharacters = data.filter((character: Charater) => {
    const lowerHouse = character.house.toLowerCase();
    if (lowerHouse.includes(house.toLowerCase())) {
      return character;
    }
  });
  console.log(arrayCharacters);

  return arrayCharacters;
};

// const filtrarPorCasa = filterByHouse("gr")
// console.log(filtrarPorCasa);
