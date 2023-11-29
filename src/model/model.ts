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

const params = process.argv.splice(2);

validateStudentCharacter(params[2]);

// Daniel Radcliffe -> dan
const getCharacterByActor = (actor: string): Charater[] => {
  return [];
};

const showWandData = (name: string): Charater | undefined => {
  return;
};

const filterByHouse = (house: string): Charater[] => {
  return [];
};
