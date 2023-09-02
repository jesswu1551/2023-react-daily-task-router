import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet, useParams } from 'react-router-dom';

const Todo = () => {
  return (<>
    <p>這是 Todo 頁面</p>
    <LogOut />
  </>);
};

const LogOut = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }

  return <button onClick={handleClick}>Logout</button>
}

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

// post -> 動態路由練習
const Post = () => {
  return (<>
    <h3>使用者詳細資料</h3>
    <Outlet />
  </>);
}

const PostId = () => {
  let params = useParams();
  return (<p>PostId: {params.postId}</p>);
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/todo" element={<Todo/>}></Route>
          <Route path="/post" element={<Post/>}>
            <Route path=":postId" element={<PostId/>}></Route>
          </Route>
          <Route path="*" element={<main><p>There's nothing here</p></main>}></Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
