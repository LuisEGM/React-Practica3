import React from "react";

class Forumario extends React.Component{

    render(){

        return(

            <div className="col-md-5 form">

                <form>

                    <div className="form-group">
                        <label>Link de la imagen</label>
                        <input type="link" className="form-control" id="linkImg" placeholder="https://..."/>
                    </div>

                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Mi título..."/>
                    </div>

                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea className="form-control" id="descripcion" rows="2" placeholder="Describe tu imagen" ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{width: "100%"}} >Agregar</button>

                </form>

            </div>

        );

    }

}

export default Forumario;
