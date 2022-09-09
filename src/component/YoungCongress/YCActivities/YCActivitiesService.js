export class ActivityService {
    getImages() {
        return fetch('activity.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
