import React from 'react';
import { useSelector } from 'react-redux';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';
import { Container } from './styles';

const Notifications = () => {

    let notification = useSelector((state: CarteItemState) => state.cartItem.cartItens)
    let notificationsoma = 0
  
    notification.map((i: EachCartItemType) => {
      notificationsoma = notificationsoma + i.amount
    })
  
    return (
      <Container>
        {
          notificationsoma > 0 &&
          <div>{notificationsoma}</div>
        }
      </Container>
    );
  };
  
  export default Notifications;