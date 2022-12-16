import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  // if (localStorage.getItem('teacherLoginStatus') === 'true') {
  //   console.log(localStorage.getItem('teacherLoginStatus'));
  //   window.location.href = '/teacher-dashboard';
  // }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          {' '}
          <a className="navbar-brand" href="#1">
            Edu4all
          </a>
        </Link>
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
            <Link to="/">
              {' '}
              <a className="nav-link active" aria-current="page" href="#1">
                Home
              </a>
            </Link>
            <a className="nav-link" href="#1">
              Courses
            </a>
            <Link to="/about">
              <a className="nav-link" href="#1">
                About Us
              </a>
            </Link>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User{' '}
              </button>
              <ul class="dropdown-menu">
                <>
                  <li>
                    <Link to="/user-login">
                      <a class="dropdown-item" href="#1">
                        Login
                      </a>{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to="/user-register">
                      <a class="dropdown-item" href="#1">
                        User Register
                      </a>{' '}
                    </Link>
                  </li>
                </>

                <li>
                  <Link to="/user-dashboard">
                    <a class="dropdown-item" href="#1">
                      Dashboard
                    </a>{' '}
                  </Link>
                  <li>
                    <Link to="/user-login">
                      <a class="dropdown-item" href="#1">
                        Logout
                      </a>{' '}
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
            <div class="dropdown mr-4">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher{' '}
              </button>
              <ul class="dropdown-menu">
                <li>
                  {localStorage.getItem('teacherLoginStatus') != 'true' && (
                    <>
                      {' '}
                      <Link to="/teacher-login">
                        <a class="dropdown-item" href="#1">
                          Login
                        </a>{' '}
                      </Link>{' '}
                      <Link to="/teacher-register">
                        <a class="dropdown-item" href="#1">
                          User Register
                        </a>{' '}
                      </Link>
                    </>
                  )}
                  <Link to="/teacher-logout">
                    <a class="dropdown-item" href="#1">
                      logout
                    </a>{' '}
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link to="/teacher-dashboard">
                    <a class="dropdown-item" href="#1">
                      Dashboard
                    </a>{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
