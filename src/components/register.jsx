

const Register = () => {
    return (
        <section>
            <br></br>
            <br></br>
            <br></br>
            <div class="container col-4 col-6-sm">
                <h2 class="h2 d-flex justify-content-center">Crear Cuenta</h2>
                <br></br>
                <div class="mb-3">
                    <label for="exampleInputtext1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="input1"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputtext2" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="input2"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputtext3" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="input3"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con alguien mas.</div>
                </div>
                <button type="submit" class="btn btn-primary" id="btn-register">Enviar</button>
            </div>    
        </section>
    );
}       

export default Register;