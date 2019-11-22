import React from 'react';
import firebase from '../Firebase';

class Usuarios extends React.Component{

    constructor(){
        super();

        this.state = {
            correo:'',
            nombre:'',
            password:'',
            carrier:'',
            habilitado:'1'

        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        const {nombre,password,carrier,habilitado} = this.state;
        e.preventDefault();
       
        //var nombre = this.state.nombre;
        //var correo = this.state.nombre+'@web.com';
      
        var db =   firebase.firestore();
        db.collection("Usuarios").where("nombre", "==", nombre)
        .get()
        .then(function(querySnapshot) {
            if (querySnapshot.empty) {
                //console.log(nombre + "Do Not Exist In DB");
                firebase.auth().createUserWithEmailAndPassword(nombre+'@web.com', password).catch(function(error) {
                   // Handle Errors here.
                   var errorCode = error.code;
                   var errorMessage = error.message;
                   alert(errorMessage);
                   console.log(errorCode);
                 });
                 
                db.collection("Usuarios").add({
                   nombre,
                   password,
                   carrier,
                   habilitado
               }).then((docRef) => {

                    alert("Usuario guardado");

                   })
                   .catch((error) =>{
                       console.log(error);
                   });
            } else {
                querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                alert("Usuario ya existe");
                  
                })
            }
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        this.setState({
                       nombre:'',
                       password:'',
                       carrier:'',
                       habilitado:''
                    }) ;
        
    }
    
    handlerSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        const {nombre,password,carrier} = this.state
        return(
        <div className="container">
            <form 
                onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                        name="nombre"
                        value = {nombre}
                        onChange={this.onChange}
                    />
                </div>
                
               
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Password"
                            name="password"
                            value = {password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Carrier" 
                            name="carrier"
                            value = {carrier}
                            onChange={this.onChange}
                        />    
                    </div>
                    
                    <button 
                type="submit" 
                className="btn btn-primary float-right"> Submit</button>
               
                </div>
                
            </form>
        </div>
        )
    };

}

export default Usuarios