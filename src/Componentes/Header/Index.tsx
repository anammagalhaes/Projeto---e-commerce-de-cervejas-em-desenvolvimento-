import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Categories, Border } from './styles';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { CategoriesItemType, CategoriesState } from '../../store/ducks/categories/types';
import { Link } from 'react-router-dom';
import { deleteCategories } from '../../store/ducks/categories/actions';
import { deleteCartItem } from '../../store/ducks/cartItem/actions';

const Header = () => {
  const [render, reRender]=useState<Boolean>(false)
  
  let categories = useSelector((state: CategoriesState) => state.categories.arrayCategories)
  let dispatch = useDispatch()

  const deleteInfo = () => { 
    localStorage.removeItem('accessToken')
    reRender(!render)
    dispatch(deleteCategories())
    dispatch(deleteCartItem())
  }

  return (
    <>
      <Container>
        <div className="content">
          <img src="http://www.cupomvalido.com.br/wp-content/uploads/emporio-da-cerveja-logo-1.png" alt="Logo"/>
          {
            localStorage.getItem('accessToken') &&
            <>
              <div className="search">
                <input type="text" placeholder="Busque pela marca, estilo ou sabor"/>
                <AiOutlineSearch className="search-icon"/>
              </div>
              <div className="rightSide">
                <Link to="/" onClick={deleteInfo}>Login<AiOutlineUser /></Link>
                <Link to="/cart">Carrinho<AiOutlineShoppingCart /></Link>
              </div>
            </>
            }
        </div>
      </Container>
      <Categories>
        <ul>
      {
        categories?.map((i: CategoriesItemType) =>(
              <li key={i.category}>{i}</li>
        ))
      }
        </ul>
      </Categories>
      <Border/>
    </>
  );
};

export default Header;