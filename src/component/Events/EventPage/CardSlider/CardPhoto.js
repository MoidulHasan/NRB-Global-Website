export class PhotoService {
  getImages() {
    return fetch("sliderImage.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
