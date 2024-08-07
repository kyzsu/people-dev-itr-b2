import { Component } from "react"

class Carousel extends Component {
  // functional comp => hooks / use-usenya, class comp => state = {}
  state = {
    active: 0,
  }

  // TUJUANNYA UNTUK MENAMPILKAN GAMBAR DEFAULT,
  // APABILA IMAGES YANG DITERIMA DARI PARENT COMPONENT TIDAK ADA (LINE 17).
  static defaultProps = {
    images: ["http://pets-image.dev-apis.com/pets/none.jpg"],
  }

  // FUNGSI UNTUK MENG-HANDLE CLICK EVENT PADA THUMBNAIL
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state // asalnya dari komponen ini sendiri
    const { images } = this.props // asal dari parent component

    return (
      <div className="carousel">
        <img src={images[active]} alt="pet" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              key={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="pet thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
