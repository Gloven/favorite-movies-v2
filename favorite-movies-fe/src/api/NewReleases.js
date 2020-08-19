import Base from './Base';

class NewReleases extends Base {
    async list() {
        const data = await this.apiClient.get('movies/list');

        return data;
    }

    async create(payload) {
        const data = await this.apiClient.post('movies/', payload);

        return data;
    }

    async show(id) {
        const data = await this.apiClient.get(`movies/${id}`);

        return data;
    }
}

export default NewReleases;
