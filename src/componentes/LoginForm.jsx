import { useForm } from "react-hook-form"



export const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const ValSubmit = (data) => console.log(data)
    return (
        <>
            <div className='bg-dark vh-100'>
                <div className='container h-100'>
                    <div className='row aling-items-center h-100'>
                        <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white' >
                            <h2 className='text-center'>Inicio de Sesion</h2>





                            <form onSubmit={handleSubmit(ValSubmit)}>
                                <div className="mb-3">
                                    <label className="fw-bold">Email </label>
                                    <input className="form-control"
                                        {...register("correo", {
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

                                <div className="mb-3">
                                    <label className="fw-bold">Password</label>
                                    <input type="password" className="form-control"
                                        {...register("contraseña", {
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
                                    <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}