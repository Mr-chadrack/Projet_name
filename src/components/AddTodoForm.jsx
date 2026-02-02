import React, {useState} from "react";


const AddTodoForm = ({addNewTodo}) => {

        const [addTodo, setAddTodo] = useState('')
       // addNewTodo
       const handelTodo = (e) => {
           e.preventDefault() //une methode permettant d'arreté le rafraichissement automatique
            addNewTodo(addTodo)
            setAddTodo('')
           

        } 
    return (
        <form onSubmit={handelTodo}>
            <div className='card card-body mt-4'>
                <div className="form-group">
                    <label>Ajouter Todo</label>
                    <input className="form-control" value={addTodo} type='text' onChange={(e) => setAddTodo(e.target.value)}/>
                    <input className=" btn btn-success mt-4" type='submit' />

                </div>
            </div>
        </form>
    );
}

export default AddTodoForm;