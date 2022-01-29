import React from 'react';
import { useParams } from 'react-router';
import { UserData } from './UsersData';
// bu hook ile dinamik paramtereleri yani id den gönderilen değeri yakalıyorum
// hook demek uygulamaya bir özellik kazandıran yaşam döngüsü elemanı
// urldeki dinamik parametreleri okumamızı sağlar

function UserDetailPage() {

  const param = useParams();

  const user = UserData.find(x=> x.id == param.id);

  console.log('param', user);

  return <div>
    <p>UserName: {user.name} {user.surname}</p>
  </div>;
}

export default UserDetailPage;
