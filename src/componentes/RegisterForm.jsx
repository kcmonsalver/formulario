import { useForm } from "react-hook-form";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const ValSubmit = (data) => console.log(data)
    return (

        <div className='bg-info vh-200'>
                <div className='container h-200'>
                    <div className='row aling-items-center h-100'>
                        <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white' >
            <h2 >Formulario de Registro</h2>
            <form onSubmit={handleSubmit(ValSubmit)}>
                <div>
                <label className="fw-bold">Nombres </label>
                <input className="form-control"  {...register("nombres", {required: true})}  />
                </div>

                <div>
                <label className="fw-bold">Apellidos </label>
                <input className="form-control"  {...register("apellidos")}  />
                </div>

                <div>
                <label className="fw-bold">Documento </label>
                <input className="form-control"  {...register("documento", {required: true}, {maxLenght:10}, {minLenght: 6})}  />
                </div>

                <div>
                <label className="fw-bold">Correo </label>
                <input className="form-control"  {...register("correo", {
                                            required: {

                                                value: true,
                                                message: "el correo electronico es obligatorio"
                                            },
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "formato de correo electronico invalido"
                                            }

                                        })} />
                                        {errors.correo && <span className="text-danger">{errors.correo.message}</span>}
                </div>

                <div>
                <label className="fw-bold">Telefono </label>
                <input className="form-control"  {...register("telefono", {required: true}, {maxLenght:10}, {minLenght: 7} )}  />
                </div>

                <div>
                <label className="fw-bold">Pais </label>
                
                    <select  {...register("pais")}>
                         <option value="">Seleccionar</option>
                        <option value="es">España</option>
                        <option value="col">Colombia</option>
                        <option value="mex">Mexico</option>
                        <option value="can">Canada</option>
                        <option value="ita">Italia</option>

                    </select>
                </div>

                <div>
                <label className="fw-bold">Contraseña </label>
                <input type="password" className="form-control" {...register("contraseña", {
                                            required: {
                                                value: true,
                                                message: "la contraseña se debe ingresar"
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "la contraseña no cuenta con los parametros requeridos"
                                            }
                                        })} />
                                         {errors.contraseña && <span className="text-danger">{errors.contraseña.message}</span>}
                </div>

                <div className="d-flex flex-column mt-4">
                <input type="submit" value="Enviar"  />
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>


    )
}