import Base from './Base';

class NewReleases extends Base {
    async list() {
        const data  = await this.apiClient.get('list');

        return data;
    }
}

export default NewReleases;
