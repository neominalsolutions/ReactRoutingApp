import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
// react ile sayfalarımızın birbirine link vasıtası ile yönlenmesi Link component sağlar.
import { Route, Routes } from 'react-router';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div style={{padding:'20px'}}>
      <nav>
        <Link style={{padding:'5px'}} to="users" > Users </Link>
        <Link style={{padding:'5px'}} to="todos" > Todos </Link>
      </nav>

      {/* uygulama içerisinde hangi linkin hangi componente yönleneceği kuralını Routes Component içerisinde tanımlıyouruz. */}
      {/* tüm yönledirmeleri Routes altında tutarız, Route ise ilgili link ile sayfaya yönlendiğimiz componentleri tanıttığımız Routing component */}
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="users" element={<UsersPage />} />
        <Route path="todos" element={<TodosPage />} />
        {/* eğer yukarıdaki pathlerden birisi ile eşleşilemediği takdirde aşağıdaki route componente girecektir. */}
        <Route path="*" element={<div>Sayfa bulunamadı</div>} />
      </Routes>
    </div>
  );
}

export default App;
