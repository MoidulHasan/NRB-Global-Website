export class ProgramService {
    getImages() {
        return fetch('program.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
