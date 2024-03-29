import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  // const [breeds, setBreeds] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      bread,
      type: animal
    })
  }

  //handling async

  useEffect(() => {
    pet.breeds('dog').then(console.log, console.error);
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(( {breeds}) => {
      const breedStrings = breeds.map(({ name}) => name);
      setBreeds(breedStrings);
    }, console.error)
  }, [animal, setBreed, setBreeds]);


  return (
    <div className="search-params">
      <h1>{Location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        <AnimalDropdown/>
        <BreedDropdown/>
        </label>
        <button>Submit</button>
        <Results pets={pets} />
       </form>
    </div>
  );
};

export default SearchParams;
