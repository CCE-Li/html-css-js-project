import request from './request';

export const catalogApi = {
  getCategories() {
    return request({
      url: '/categories',
      method: 'get',
    });
  },
  getGoods() {
    return request({
      url: '/goods',
      method: 'get',
    });
  },
};

export default {
  catalog: catalogApi,
};
