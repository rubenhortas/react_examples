import { useState } from "react";

function Controlled() {

    const [mensaje, setMensaje] = useState({
        asunto: '',
        mensaje: '',
        user_id: 13,
    });

    const [formErrors, setFormErrors] = useState({
        asunto: '',
        mensaje: '',
    });

    const [formValid, setFormValid] = useState(false);

    const [formTouched, setFormTouched] = useState({
        asunto: false,
        mensaje: false,
    });

    const validateField = (name, value) => {
        const _formErrors = { ... formErrors }
        let valid;
        let message;

        switch (name) {
            case 'asunto':
                valid = value && value.length > 5;
                message = valid ? '' : 'Hace falta un valor de 5 caracteres'
                break;
            case 'mensaje':
                valid = value && value.length > 15;
                message = valid ? '' : 'Hace falta un valor de 15 caracteres'
                break;
            default:
                break;
        }

        if(name) _formErrors[name] = message;
        
        setFormErrors(_formErrors);

        let _formValid = true;
        
        Object.keys(_formErrors).map((key) => {
            if(_formErrors[key] || key === '' || value === '') {
                _formValid = false;
            } 
        });

        setFormValid(_formValid);
    }

    const handleChange = (event) => {
        const _mensaje = { ...mensaje };
        _mensaje[event.target.name] = event.target.value;
        setMensaje(_mensaje);

        validateField(event.target.name, event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("enviando datos", mensaje);
    }

    const handleBlur = (event) => {
        const _formTouched = { ... formTouched };
        _formTouched[event.target.name] = true;
        setFormTouched(_formTouched);
    }

    return (
        <div className="controlled card">
            <div className="card-header">
                <h1>Controlled form</h1>
            </div>
            <div className="card-body">
                <form className='formulario' onSubmit={handleSubmit} >
                    <div className='form-group' >
                        <label htmlFor="asunto">Asunto</label>
                        <input type='text' className='form-control' name='asunto' 
                        value={mensaje.asunto} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {
                            formErrors.asunto && formTouched.asunto ? <div className="alert alert-danger">{formErrors.asunto}</div> : null
                        }
                    </div>
                    <div className='form-group' >
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea className='form-control' 
                            name='mensaje'
                            value={mensaje.mensaje} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {
                            formErrors.mensaje && formTouched.mensaje ? <div className="alert alert-danger">{formErrors.mensaje}</div> : null
                        }
                    </div>
                    <div className='form-group' >
                        <label htmlFor='user_id'>User id</label>
                        <select
                            className='form-control'
                            name='user_id'
                            value={mensaje.user_id}
                            onChange={handleChange}
                        >
                            <option value="11">Carmen</option>
                            <option value="12">Claudia</option>
                            <option value="13">Jorge</option>
                            <option value="14">David</option>
                        </select>
                    </div>
                    <button className="btn btn-primary my-2" type="submit" disabled={!formValid} >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Controlled;