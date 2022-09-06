export class TestimonialService {
  getTestimonials() {
    return fetch('testimonial.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
