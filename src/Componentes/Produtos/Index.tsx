import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import api from '../../services/api';
import { BeerItemType } from '../../store/ducks/beers/types';
import { AiOutlineShopping } from 'react-icons/ai'
import { Container, Box } from './styles';
import { getCategories } from '../../store/ducks/categories/actions';
import { setCartItem } from '../../store/ducks/cartItem/actions';
import { CarteItemState, EachCartItemType } from '../../store/ducks/cartItem/types';

const Produtos = () => {

    const [denyPermission,setDenyPermission] = useState<Boolean>(false)
    const [beers,  setBeers] = useState<BeerItemType[]>()
  
    const dispatch = useDispatch()
  
    useEffect(() => {
      if (localStorage.getItem('accessToken')) {
        const accessToken = localStorage.getItem('accessToken')
        const headers = {
          'Authorization' : `Bearer ${accessToken}`
        }
        api.get(`/categories`, {headers: headers})
          .then(response => {
            dispatch(getCategories(response.data))
          })
  
        api.get(`/beers`, {headers: headers})
          .then(response => setBeers(response.data))
  
      } else {
        setDenyPermission(true)
      }
    }, [])
  
    const cartItens = useSelector((state: CarteItemState) => state.cartItem.cartItens)
  
    const addCart = (i: BeerItemType) => {
  
      const newItemArray = cartItens
  
      const itemFound = newItemArray.find((element: EachCartItemType) => element.id === i.id)
      const indexOfItemFound = newItemArray.findIndex((element: EachCartItemType) => element.id === i.id)
  
      if (itemFound) {
          const newItem: EachCartItemType ={
          description: itemFound.description,
          id: itemFound.id,
          image: itemFound.image,
          price: itemFound.price,
          title: itemFound.title,
          amount: itemFound.amount+1
        }
        newItemArray.splice(indexOfItemFound, 1, newItem)
        dispatch(setCartItem(newItemArray))
  
      } else {
        const newItem: EachCartItemType = {
          description: i.description,
          id: i.id,
          image: i.image,
          price: i.price,
          title: i.title,
          amount: 1
        }
        newItemArray.push(newItem)
        dispatch(setCartItem(newItemArray))
      }
  
      
    }
  
    return (
      <>
        <Container>
        {
          beers?.map((i: BeerItemType) => (
            <Box key={i.id}>
              <div className="card">
                <div className="top">
                  <img src={i.image} alt={i.title} className="product"/>
                  <h3>{i.description}</h3>
                  <h2>{i.title}</h2>
                </div>
                <div className="bot">
                  <p>{i.price}</p>
                  <Link to="/cart" onClick={() => addCart(i)}>Adicionar <AiOutlineShopping/></Link>
                </div>
                
              </div>
            </Box>
          )) 
        }
        </Container>
        {
          denyPermission &&
          <Redirect to="/" />
        }
      </>
    );
  };
  
  export default Spotlights;