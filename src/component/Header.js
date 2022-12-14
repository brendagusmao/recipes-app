import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../CSS/Header.css';

function Header({ title }) {
  const [show, setShow] = useState(false);

  const path = window.location.pathname;

  return (
    <header className="header">
      <h1 data-testid="page-title">{title}</h1>
      <div className="icones">
        <a href="/profile">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt={ `imagem de ${profileIcon}` }
          />
        </a>
        {!(
          path === '/profile'
        || path === '/done-recipes'
        || path === '/favorite-recipes'
        ) && (
          <>
            <button
              type="button"
              onClick={ () => setShow(!show) }
              className="buttonsearch"
            >
              <img
                data-testid="search-top-btn"
                src={ searchIcon }
                alt={ `imagem de ${searchIcon}` }
              />
            </button>
            { show && (
              <SearchBar />)}
          </>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
