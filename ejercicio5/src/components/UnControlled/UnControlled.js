import { useFormik } from "formik";

function UnControlled() {
    const formik = useFormik({
        initialValues: {
            asunto: 'mi asunto',
            mensaje: 'mi mensaje',

        },
        onSubmit: values => {
            console.log(values)
        },
        validate: (values) => {
            const errores = {};
            if (!values.asunto) {
                errores.asunto = 'Campo obligatorio'
            } else if (values.asunto.length < 5) {
                errores.asunto = 'Campo hay de tener más de 5 caracteres';
            }

            if (!values.mensaje) {
                errores.mensaje = 'Campo obligatorio'
            } else if (values.mensaje.length < 15) {
                errores.mensaje = 'Campo hay de tener más de 15 caracteres';
            }

            return errores;
        }
    });

    return (
        <div className="uncontrolled card">
            <div className="card-header">
                <h1>Uncontrolled form</h1>
            </div>
            <div className="card-body">
                <form className='formulario' onSubmit={formik.handleSubmit} >
                    <div className='form-group' >
                        <label htmlFor="asunto" >Asunto</label>
                        <input type='text'
                            className='form-control'
                            name='asunto'
                            value={formik.values.asunto}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.asunto ? <div className="alert alert-danger">{formik.errors.asunto}</div> : null
                        }
                    </div>
                    <div className='form-group' >
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea className='form-control'
                            name='mensaje'
                            value={formik.values.mensaje}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.mensaje ?<div className="alert alert-danger">{formik.errors.mensaje}</div> : null
                        }
                    </div>
                    <button 
                    className="btn btn-primary my-2" 
                    type="submit" 
                    disabled={!formik.isValid}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UnControlled;

/*import { createRef } from "react";

function UnControlled() {
    const asuntoInput = createRef();
    const mensajeInput = createRef();

    const handleSubmit = (event) => {    
        event.preventDefault();        
        console.log(asuntoInput.current.value, mensajeInput.current.value);
    }

    return (
        <div className="uncontrolled card">
            <div className="card-header">
                <h1>Uncontrolled form</h1>
            </div>
            <div className="card-body">
                <form className='formulario' onSubmit={handleSubmit} >
                    <div className='form-group' >
                        <label htmlFor="asunto" >Asunto</label>
                        <input type='text' className='form-control' name='asunto' ref={asuntoInput}
                        />
                    </div>
                    <div className='form-group' >
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea className='form-control' name='mensaje' ref={mensajeInput}
                        ></textarea>
                    </div>
                    <button className="btn btn-primary my-2" type="submit" >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UnControlled;*/