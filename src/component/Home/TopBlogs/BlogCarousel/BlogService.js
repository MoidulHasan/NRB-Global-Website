export class BlogService {
  getBlogs() {
    return fetch('blogs.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
