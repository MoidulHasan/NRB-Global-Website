export class ProgramService {
    getPrograms() {
        return fetch('program.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
