const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1]
  // [index 0 : "details", index 1: params.id] ==> id itu memiliki value 1
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

  if (!apiRes.ok) {
    throw new Error(`details ${id} gagal fetching`)
  }

  return apiRes.json()
}

export default fetchPet
