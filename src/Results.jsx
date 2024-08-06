import Pet from "./Pet.jsx"

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? ( // ternary operator (versi mininya IF ELSE)
        <h1>Hewan peliharaan yang dicari tidak ada</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} - ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  )
}

export default Results
