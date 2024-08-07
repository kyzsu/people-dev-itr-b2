import { useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import fetchPet from "./fetchPet"
import Carousel from "./Carousel.jsx"
import ErrorBoundary from "./ErrorBoundary.jsx"
import Modal from "./Modal.jsx"

const Details = () => {
  const [showModal, setShowModal] = useState(false) // TAMBAHKAN USESTATE MODAL
  const params = useParams()
  const results = useQuery(["details", params.id], fetchPet)
  // parameter 1 dari useQuery disebut queryKey, parameter 2 adalah fungsinya.

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌟</h2>
      </div>
    )
  }

  console.log("results: ", results)
  const pet = results.data.pets[0]

  console.log("pet: ", pet)

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} | ${pet.city} - ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>
          Ingin bawa &quot;{pet.name}&quot; pulang?
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Apakah kamu yakin?</h1>
              <div className="buttons">
                <button>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}
