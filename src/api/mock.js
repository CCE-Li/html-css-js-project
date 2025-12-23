import Mock from 'mockjs';

// 模拟用户数据
const users = [];
for (let i = 1; i <= 5; i++) {
  users.push({
    id: i,
    name: Mock.Random.cname(),
    email: Mock.Random.email(),
    phone: Mock.mock(/^1[3-9]\d{9}$/),
    address: Mock.Random.county(true),
    avatar: Mock.Random.image('100x100', Mock.Random.color(), '#FFF', 'png', Mock.Random.first())
  });
}

// 模拟商品数据
const products = [];
for (let i = 1; i <= 10; i++) {
  products.push({
    id: i,
    name: Mock.Random.ctitle(3, 8),
    price: Mock.Random.float(10, 1000, 2, 2),
    stock: Mock.Random.integer(0, 1000),
    description: Mock.Random.cparagraph(),
    image: Mock.Random.image('200x200', Mock.Random.color(), '#FFF', 'png', 'Product' + i)
  });
}

// 模拟登录接口
Mock.mock('/api/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body);
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      data: {
        token: 'mock_token_' + Mock.Random.guid(),
        userInfo: {
          id: 1,
          username: 'admin',
          role: 'admin',
          avatar: Mock.Random.image('100x100', Mock.Random.color(), '#FFF', 'png', 'Admin')
        }
      }
    };
  } else {
    return {
      code: 401,
      message: '用户名或密码错误',
      data: null
    };
  }
});

// 获取用户列表
Mock.mock(/\/api\/users(\?.*)?$/, 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: users
  };
});

// 获取用户详情
Mock.mock(/\/api\/users\/\d+$/, 'get', (options) => {
  const id = options.url.split('/').pop();
  const user = users.find(item => item.id == id);
  if (user) {
    return {
      code: 200,
      message: 'success',
      data: user
    };
  } else {
    return {
      code: 404,
      message: '用户不存在',
      data: null
    };
  }
});

// 获取商品列表
Mock.mock(/\/api\/products(\?.*)?$/, 'get', (options) => {
  // 模拟分页
  const { page = 1, pageSize = 10 } = options.url.split('?')[1]?.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value;
    return acc;
  }, {}) || {};
  
  const start = (page - 1) * pageSize;
  const end = start + parseInt(pageSize);
  const list = products.slice(start, end);
  
  return {
    code: 200,
    message: 'success',
    data: {
      list,
      total: products.length,
      page: parseInt(page),
      pageSize: parseInt(pageSize)
    }
  };
});

// 获取商品详情
Mock.mock(/\/api\/products\/\d+$/, 'get', (options) => {
  const id = options.url.split('/').pop();
  const product = products.find(item => item.id == id);
  if (product) {
    return {
      code: 200,
      message: 'success',
      data: product
    };
  } else {
    return {
      code: 404,
      message: '商品不存在',
      data: null
    };
  }
});

// 添加商品
Mock.mock('/api/products', 'post', (options) => {
  const newProduct = JSON.parse(options.body);
  const product = {
    id: products.length + 1,
    ...newProduct
  };
  products.push(product);
  return {
    code: 200,
    message: '添加成功',
    data: product
  };
});

// 更新商品
Mock.mock(/\/api\/products\/\d+$/, 'put', (options) => {
  const id = options.url.split('/').pop();
  const index = products.findIndex(item => item.id == id);
  if (index !== -1) {
    const updatedProduct = JSON.parse(options.body);
    products[index] = { ...products[index], ...updatedProduct };
    return {
      code: 200,
      message: '更新成功',
      data: products[index]
    };
  } else {
    return {
      code: 404,
      message: '商品不存在',
      data: null
    };
  }
});

// 删除商品
Mock.mock(/\/api\/products\/\d+$/, 'delete', (options) => {
  const id = options.url.split('/').pop();
  const index = products.findIndex(item => item.id == id);
  if (index !== -1) {
    products.splice(index, 1);
    return {
      code: 200,
      message: '删除成功',
      data: true
    };
  } else {
    return {
      code: 404,
      message: '商品不存在',
      data: false
    };
  }
});

export default Mock;
