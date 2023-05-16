import '../stylesheets/Contacto.css';

const Contacto = () => {
  return (
    <main className="page-contact">
		<img className='funkos-contacto' src={require("../imagenes/funkos-contacto.jpg")} alt="" />
		<form action="" className="contact-form">
			<h2>Dejanos un mensaje</h2>
            <p className='sub-texto'>Nuestro equipo te contactará pronto</p>
			<div>
				<label for="name">Nombre</label>
				<input type="text" />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" required />
			</div>
			<div>
				<label for="message">Mensaje</label>
				<textarea name="message" cols="30" rows="10"></textarea>
			</div>
			<input className="enviar" type="submit" value="Enviar" />
		</form>
	</main>
  )
}

export default Contacto