import React, { useEffect, useState } from 'react'
import InputControl from '../../../components/InputControl/InputControl'
import './UserInfo.scss';
import editIcon from '../../../images/editIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAsync, updateUserAsync } from '../../../redux/actions/user';
import MoonLoader from "react-spinners/MoonLoader";
import Toastify from '../../../components/Toastify/Toastify';
import { toast } from 'react-toastify';

function UserInfo() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  console.log(user)
  const [userInfo, setUserInfo] = useState({});
  const notify = (message) => toast.success(message);

  let { firstname, lastname, email, phone, id } = userInfo;

  useEffect(() => {
    console.log('first')
    dispatch(getUserAsync());
  }, []);

  
  useEffect(() => {
    setUserInfo(user.user)
  }, [user]);


  function updateCustomer(e) {
    e.preventDefault();
    dispatch(updateUserAsync(userInfo));
    notify('İstifadəçi yeniləndi');
  }

  function changeForm(e) {
    let newObj = {};
    let inputName = e.target.name;
    let inputValue = e.target.value;
    newObj[inputName] = inputValue;
    let updatedUserInfo = { ...userInfo, ...newObj };
    setUserInfo(updatedUserInfo);
  }


  return (

    <div className='userInfo'>
      {user.loading ? <div className="spinner">
        <MoonLoader color={'#2DD06E'} loading={user.loading} size={100} />
      </div> :
        <>
          <div className="title">Şəxsi məlumatlar</div>
          <form onSubmit={(e) => updateCustomer(e)} onChange={(e) => changeForm(e)}>
            <div className="row">
              <div className="col-6">
                <InputControl  title='Ad' value={firstname} name='firstname' type='text' placeholder='Adınızı daxil edin' />
                <InputControl  title='E-mail' value={email} name='email' type='email' placeholder='nümunə@gmail.com' />
              </div>
              <div className="col-6">
                <InputControl  title='Soyad' value={lastname} name='lastname' type='text' placeholder='Soyadınızı daxil edin' />
                <InputControl  title='Mobil nömrə' value={phone} name='phone' type='tel' placeholder='077 - 000 - 00 - 00' />
              </div>
              <button type='submit' className='editBtn'><img src={editIcon} alt="editIcon" /> <span>Məlumatları yenilə</span></button>
            </div>
            <Toastify/>
          </form>
        </>}
    </div>
  )
}

export default UserInfo