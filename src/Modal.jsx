import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const elRef = useRef(null)

  // step 0
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  useEffect(() => {
    // step 1 mengambil lokasi DOM dari element dengan ID modal
    const modalRoot = document.getElementById("modal")
    // step 2 appendChild, menambahkan childrennya yang diisi dengan elRef.current (div)
    modalRoot.appendChild(elRef.current)

    // step 4, apabila modalnya sudah selesai dipake/diclose,
    // maka fungsi return akan dijalankan untuk menghapus/remove childrennya (elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  // step 3, menambahkan argumen 1 dari createPortal kedalam elRef.current (div)
  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
