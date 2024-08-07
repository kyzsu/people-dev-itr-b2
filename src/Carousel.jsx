import { Component } from "react"

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: ["http://pets-image.dev-apis.com/pets/none.jpg"],
  }

  render() {
    const { active } = this.state
    const { images } = this.props

    return (
      <div className="carousel">
        <img src={images[active]} alt="pet" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="pet thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
