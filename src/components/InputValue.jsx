import React, {useState} from 'react';

const InputValue = () => {

    const [number, setNumber] = useState()

    const RecValue = (e) => {
         setNumber(e.target.value)
    }
    const ValDouble = ()=>{
        setNumber (number * 2 )
    } 

    return (
        <div>
            <div className="card mt-4">
                <h5>Jeux de nombre</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" 
                            
                            onChange={RecValue}
                            placeholder="0"/>
                        </div> 
                        <p>le double : {ValDouble} </p>
                        <div className="col">
                            <input type="number" className="form-control" value={number} placeholder="le double de la valeur" disabled="false"/>
                        </div>
                    </div>
                   <button className='btn btn-primary mt-4'
                   onClick={ValDouble}>Valider</button>
                </div>
            </div>

        </div>
    );
}



export default InputValue;
