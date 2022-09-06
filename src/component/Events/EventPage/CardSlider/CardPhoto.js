export class PhotoService {
  getImages() {
    return fetch("cardImage.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
