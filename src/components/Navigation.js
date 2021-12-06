import React, { } from 'react';
import { connect } from 'react-redux';
import './styles/Navigation.scss';
import './styles/Print.scss'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Navigation = ({ remoteFullscreen }) => {
      const rememberMe = localStorage.getItem('role') === 'Admin'
      const location = useLocation();
      const history = useHistory();
      return (
            <>
                  <nav role="navigation" className="navigation">
                        <div id="menuToggle" >
                              <input type="checkbox" />
                              <span ></span>
                              <span ></span>
                              <span ></span>
                              <ul id="menu">
                                    {location.pathname !== '/' ? <li onClick={() => history.push("/", { from: "/" }, remoteFullscreen())}>
                                          <div className="home" style={{ cursor: 'pointer' }}>
                                                <FaHome size='2em' color='#1289f4' />  </div>
                                    </li> : ' '}
                                    {rememberMe ? <li>
                                          <NavLink to="/createAccount">
                                                <div className="User" style={{ cursor: 'pointer' }}>
                                                      <div className="circleAroundBlue">   <FaUser size='1.5em' color='white' />   </div></div>
                                          </NavLink>
                                    </li> : null}
                              </ul>
                        </div>
                  </nav>
            </>
      );
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
      remoteFullscreen: () => {
            dispatch({ type: 'REMOTE_FULLSCREEN' })
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);