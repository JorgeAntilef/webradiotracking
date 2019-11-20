// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
           <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    </ul>

                    <form className="form-inline ml-3">
                        <div className="input-group input-group-sm">
                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                            </div>
                        </div>
                     </form>
                     <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-comments"></i>
                    <span className="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                
                    <div className="media">
                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                            </h3>
                            <p className="text-sm">Call me whenever you can...</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                     </div>
                
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                  
                        <div className="media">
                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                            </h3>
                            <p className="text-sm">I got your message bro</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                        </div>
             
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                     
                        <div className="media">
                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                            </h3>
                            <p className="text-sm">The subject goes here</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                        </div>
                        
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-envelope mr-2"></i> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-users mr-2"></i> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-file mr-2"></i> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                    <i className="fas fa-th-large"></i>
                    </a>
                </li>
                </ul>
        </nav>
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
          
          <a href="index3.html" className="brand-link">
             <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" /> 
            <span className="brand-text font-weight-light">RADIOTRACKING</span>
          </a>
      
         
          <div className="sidebar">
            
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                 <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> 
              </div>
              <div className="info">
                <a href="#" className="d-block">Usuario</a>
              </div>
            </div>
      
            
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy"></i>
              <p>
                Layout Options
                <i className="fas fa-angle-left right"></i>
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Fixed Navbar</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/charts/chartjs.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/inline.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="pages/calendar.html" className="nav-link">
              <i className="nav-icon far fa-calendar-alt"></i>
              <p>
                Calendar
                <span className="badge badge-info right">2</span>
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-plus-square"></i>
              <p>
                Extras
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
          </li>      
        </ul>
            </nav>
      
          </div>
         
        </aside>
        </div>
 
        )
    }
}