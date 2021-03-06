import React,{ Component}'react';
    
    
class HeaderNotifications extends React.createClass({

    render() {
        let that = this;

        let notificationList = this.props.notifications.map(function (notificationDetails, iterator) {
        return (
            <li key={"header-notification-item"+iterator}>
                <a href="#">
                    <i className={notificationDetails.className}></i> {notificationDetails.subject}
                </a>
            </li>
        )

        });

        return (
            <ul className="dropdown-menu">
                <li className="header">You have {this.props.notifications.length} notifications</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv">

                            <ul className="menu">
                                {notificationList}
                            </ul>
                                
                            <div className="slimScrollBar"></div>
                                <div className="slimScrollRail"></div>
                            </div>
                        </li>
                        <li className="footer"><a href="#">View all</a></li>
                    </ul>
                )
            }
        });

export default HeaderNotifications;
    
