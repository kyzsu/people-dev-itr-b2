async function fetchSearch({ queryKey }) {
  // QUERYKEY DIAMBIL DARI PARAMETER 1 FUNGSI USEQUERY DI HALAMAN SEARCHPARAMS
  // useQuery(PARAM 1 (QUERYKEY) = ["search", requestParams], PARAM 2(FUNGSI) = fetchSearch)
  const { animal, location, breed } = queryKey[1] // DESTRUCTURING UNTUK REQ PARAMS

  // melakukan consume API
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  )

  if (!res.ok) {
    // jika gagal maka lempar error
    throw new Error("Gagal melakukan pencarian! Silahkan dicoba lagi.")
  }

  // mengembalikan JSON
  return res.json()
}

export default fetchSearch
