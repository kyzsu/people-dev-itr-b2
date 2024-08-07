import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import fetchSearch from "./fetchSearch.js"
import Results from "./Results.jsx"
import useBreedList from "./useBreedList.js"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  const [animal, setAnimal] = useState("")
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  })
  const [breeds] = useBreedList(animal)

  const results = useQuery(["search", requestParams], fetchSearch)
  const pets = results?.data?.pets ?? [] // <==> results?.data?.pets ? results?.data?.pets : []

  return (
    <>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const obj = {
              animal: formData.get("animal") ?? "",
              breed: formData.get("breed") ?? "",
              location: formData.get("location") ?? "",
            }
            setRequestParams(obj)
          }}
        >
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              placeholder="location"
              name="location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              name="animal"
              onChange={(e) => {
                setAnimal(e.target.value)
              }}
              onBlur={(e) => {
                setAnimal(e.target.value)
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select disabled={!breeds.length} id="breed" name="breed">
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
        <Results pets={pets} />
      </div>
    </>
  )
}

export default SearchParams
