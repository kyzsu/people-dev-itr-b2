async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1]

  const res = await fetch(
    `http://pets-v2.dev-apis/pets?animal=${animal}&location=${location}&breed=${breed}`
  )

  if (!res.ok) {
    throw new Error("Gagal melakukan pencarian! Silahkan dicoba lagi.")
  }

  return res.json()
}

export default fetchSearch
