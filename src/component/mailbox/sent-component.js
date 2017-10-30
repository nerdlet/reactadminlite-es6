import React,{ Component } from 'react';
import $ from 'jquery';
    
  
    class SentComponent extends Component{
    		render(){
                let style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
    				 <div className="col-md-3">
                <a href="compose.html" className="btn btn-primary btn-block margin-bottom">Compose</a>
                <div className="box box-solid">
                  <div className="box-header with-border">
                    <h3 className="box-title">Folders</h3>

                    <div className="box-tools">
                      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="box-body no-padding">
                    <ul className="nav nav-pills nav-stacked">
                      <li className=""><a href="inbox.html"><i className="fa fa-inbox"></i> Inbox
                        <span className="label label-primary pull-right">0</span>
                      </a>
                      </li>
                      <li className="active"><a href="sent.html"><i className="fa fa-envelope-o"></i>Sent</a></li>
                    </ul>
                  </div>
                </div>
              </div> 
    			)
    		}
    	})

export default SentComponent;
       
     