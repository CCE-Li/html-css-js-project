import Mock from 'mockjs';
import categories from './categories.json';
import goods from './goods.json';

const success = (data) => ({
  code: 200,
  message: 'success',
  data,
});

Mock.mock('/api/categories', 'get', () => success(categories));
Mock.mock('/api/goods', 'get', () => success(goods));

export default Mock;
