import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
// react ile sayfalarımızın birbirine link vasıtası ile yönlenmesi Link component sağlar.
import { Outlet, Route, Routes } from 'react-router';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import Layout from './components/Layout';
import { Container } from 'react-bootstrap';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <Container fluid>
      {/* uygulama içerisinde hangi linkin hangi componente yönleneceği kuralını Routes Component içerisinde tanımlıyouruz. */}
      {/* tüm yönledirmeleri Routes altında tutarız, Route ise ilgili link ile sayfaya yönlendiğimiz componentleri tanıttığımız Routing component */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="user-detail/:id" element={<UserDetailPage />} />
          {/* eğer yukarıdaki pathlerden birisi ile eşleşilemediği takdirde aşağıdaki route componente girecektir. */}
          <Route path="*" element={<div>Sayfa bulunamadı</div>} />
        </Route>
      </Routes>
    </Container>
  );
}

// :id veya :name ne istersek yazabiliriz. :value ile tanımladığımız route yapısına dinamik route diyoruz. buraya 1,2,3 gibi user'a ait id değerini gönderip sonra UserDetailPage componentinde bu id değerine ulaşacağız.
export default App;
