import ApiClient      from './ApiClient.js';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient  : api,
        // brick      : new BrickAPI({ apiClient: api }),
    };
}
