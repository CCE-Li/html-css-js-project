import request from './request';

// 用户相关 API
export const userApi = {
  // 登录
  login(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    });
  },
  
  // 获取用户列表
  getUsers(params) {
    return request({
      url: '/users',
      method: 'get',
      params
    });
  },
  
  // 获取用户详情
  getUserDetail(id) {
    return request({
      url: `/users/${id}`,
      method: 'get'
    });
  },
};

// 商品相关 API
export const productApi = {
  // 获取商品列表
  getProducts(params) {
    return request({
      url: '/products',
      method: 'get',
      params
    });
  },
  
  // 获取商品详情
  getProductDetail(id) {
    return request({
      url: `/products/${id}`,
      method: 'get'
    });
  },
  
  // 添加商品
  addProduct(data) {
    return request({
      url: '/products',
      method: 'post',
      data
    });
  },
  
  // 更新商品
  updateProduct(id, data) {
    return request({
      url: `/products/${id}`,
      method: 'put',
      data
    });
  },
  
  // 删除商品
  deleteProduct(id) {
    return request({
      url: `/products/${id}`,
      method: 'delete'
    });
  },
};

// 导出所有 API
export default {
  user: userApi,
  product: productApi,
};
