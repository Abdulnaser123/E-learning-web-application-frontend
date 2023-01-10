import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from './edu4all.png';
import styles from './styles/header.module.css';

function Header() {
  const [searchString, setSearchString] = useState({
    search: '',
  });
  const handleChange = (e) => {
    setSearchString({
      ...searchString,
      [e.target.name]: e.target.value,
    });
  };
  const searchCourse = () => {
    if (searchString.search !== '')
      window.location.href = '/search-courses/' + searchString.search;
  };
  // if (localStorage.getItem('teacherLoginStatus') === 'true') {
  //   console.log(localStorage.getItem('teacherLoginStatus'));
  //   window.location.href = '/teacher-dashboard';
  // }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          {' '}
          <img className="navbar-brand" alt="edu" src={Logo} width={'150'} />
        </Link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search by course title"
            aria-label="Search"
            onChange={handleChange}
            name="search"
          />
          <button class="btn btn-warning" type="button" onClick={searchCourse}>
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/" className={styles.links}>
              <a className="nav-link active" aria-current="page" href="#1">
                Home
              </a>
            </Link>
            <Link className={styles.links}>
              <a className="nav-link " href="#1">
                Courses
              </a>
            </Link>

            <Link to="/about" className={styles.links}>
              <a className="nav-link" href="#1">
                About Us
              </a>
            </Link>
            <Link to="/FAQs" className={styles.links}>
              <a className="nav-link" href="#1">
                FAQs
              </a>
            </Link>
            <div className="dropdown me-2">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student{' '}
              </button>
              <ul className="dropdown-menu">
                {!localStorage.getItem('studentLoginStatus') && (
                  <>
                    {' '}
                    <li>
                      <Link to="/user-login">
                        <a className="dropdown-item" href="#1">
                          Login
                        </a>{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user-register">
                        <a className="dropdown-item" href="#1">
                          User Register
                        </a>{' '}
                      </Link>
                    </li>
                  </>
                )}
                {localStorage.getItem('studentLoginStatus') && (
                  <li>
                    <Link to="/user-dashboard">
                      <a className="dropdown-item" href="#1">
                        Dashboard
                      </a>{' '}
                    </Link>
                    <li>
                      <Link to="/user-logout">
                        <a className="dropdown-item" href="#1">
                          Logout
                        </a>{' '}
                      </Link>
                    </li>
                  </li>
                )}
              </ul>
            </div>
            <div className="dropdown mr-4">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher{' '}
              </button>
              <ul className="dropdown-menu">
                {!localStorage.getItem('teacherLoginStatus') && (
                  <>
                    {' '}
                    <Link to="/teacher-login">
                      <a className="dropdown-item" href="#1">
                        Login
                      </a>{' '}
                    </Link>{' '}
                    <Link to="/teacher-register">
                      <a className="dropdown-item" href="#1">
                        User Register
                      </a>{' '}
                    </Link>
                  </>
                )}
                {localStorage.getItem('teacherLoginStatus') && (
                  <>
                    <li>
                      <Link to="/teacher-dashboard">
                        <a className="dropdown-item" href="#1">
                          Dashboard
                        </a>{' '}
                      </Link>
                    </li>{' '}
                    <li>
                      <Link to="/teacher-logout">
                        <a className="dropdown-item" href="#1">
                          logout
                        </a>{' '}
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
