import React from 'react'
import Usuarios from './Usuarios'

class formUsuarios extends React.Component{

    
    render(){
        return(
            <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                  <Usuarios />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }


}
export default formUsuarios