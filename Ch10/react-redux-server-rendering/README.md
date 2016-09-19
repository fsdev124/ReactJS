# Redux Server 端 Rendering

要把数据从服务器端传递到客户端，我们需要：

1. 对每个请求创建一个全新的 Redux store 实体
2. 选择性的 dispatch 一些 action
3. 把 state 从 store 取出来
4. 把 state 一起传到客户端

# 延伸阅读
1. [Immutable.js usage - Reducers & Server Side Rendering](https://github.com/reactjs/redux/issues/1555)
2. [Redux Server Rendering](http://redux.js.org/docs/recipes/ServerRendering.html)
3. [React Router Tutorial](https://github.com/reactjs/react-router-tutorial)