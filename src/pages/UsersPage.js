import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserData } from './UsersData';

// page componentler sayfa componentleri olduğu için sayfa yönlendirmesi ile çalışır ve içerisinde birden fazla  react componenti barındırır.



function UsersPage() {

  return <ListGroup>
    {
      UserData.map((item, key) => {
        return <ListGroup.Item key={key} disabled>
          <Link to={`/user-detail/${item.id}`}>
            {item.name} {item.surname}
          </Link>
        </ListGroup.Item>
      })
    }

  </ListGroup>

}

export default UsersPage;

// users linkine tıklayınca yönleneceğimiz sayfa