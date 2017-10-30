import React,{ Component}'react';
import 'jquery';
import HeaderMessages from './header-messages/header-messages';
import HeaderNotifications from './header-notifications/header-notifications';
import HeaderTasks from './header-tasks/header-tasks';
    
   
        class HeaderBar extends Component({
            pushMenu() {
                let body = document.body;
                if(body.clientWidth > 768){
                    if(body.className.indexOf('sidebar-collapse') === -1){
                        body.className += ' sidebar-collapse';
                    }else {
                        body.className = body.className.replace(' sidebar-collapse', '');
                    }
                }else{
                    if (body.className.indexOf('sidebar-open') === -1) {
                        body.className += ' sidebar-open';
                    }else{
                        body.className = body.className.replace(' sidebar-open','');
                    }
                }
            },
            render() {
                let that = this;
                return (
                    <header className="main-header">
                        {/* Logo */}
                        <a href="index2.html" className="logo">
                            {/* mini logo for sidebar mini 50x50 pixels */}
                            <span className="logo-mini"><b>A</b>RA</span>
                            {/* logo for regular state and mobile devices */}
                            <span className="logo-lg"><b>A</b>RA</span>
                        </a>
                        {/* Header Navbar: style can be found in header.less */}
                        <nav className="navbar navbar-static-top" role="navigation">
                            {/* Sidebar toggle button*/}
                            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    {/* Messages: style can be found in dropdown.less*/}
                                    <HeaderMessages />
                                    {/* Notifications: style can be found in dropdown.less */}
                                    <HeaderNotifications />
                                    {/* Tasks: style can be found in dropdown.less */}
                                    <HeaderTasks />
                                    {/* User Account: style can be found in dropdown.less */}
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src="dist/img/avi3.png" className="user-image" alt="User Image" />
                                            <span className="hidden-xs">Brenda Nyokabi</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            {/* User image */}
                                            <li className="user-header">
                                                <img src="dist/img/avi3.png" className="img-circle" alt="User Image" />
                                                <p>
                                                    Brenda Nyokabi - Web Developer
                                                    <small>Member since Nov. 2012</small>
                                                </p>
                                            </li>
                                            {/* Menu Body */}
                                            <li className="user-body">
                                                <div className="col-xs-4 text-center">
                                                    <a href="earnings.html">Earnings</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="allorders.html">Orders</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="inbox.html">Inbox</a>
                                                </div>
                                            </li>
                                            {/* Menu Footer */}
                                            <li className="user-footer">
                                                <div className="pull-left">
                                                    <a href="profile.html" className="btn btn-default btn-flat">Profile</a>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="logout" className="btn btn-default btn-flat">Sign out</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    { /* control Sidebar Toggle Button */}
            
                                </ul>
                            </div>
                        </nav>
                    </header>
                ):
            }
        }

export default HeaderBar;
    
