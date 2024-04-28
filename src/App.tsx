import { FormEvent, useState } from 'react';
import './App.css'

interface ResultadoProps {
	nome: string;
	idade: number;
}

function App() {

	const [nome, setNome] = useState("")
	const [anoNasc, setNasc] = useState("")
	const [resultado, setResultado] = useState<ResultadoProps>()
	const currentYear = new Date().getUTCFullYear();

	function descobrirIdade(e: FormEvent) {
		e.preventDefault();

		setResultado({
			nome: nome,
			idade: currentYear - Number(anoNasc),
		})

	}

	return (
		<div>
			<form className="form" onSubmit={descobrirIdade}>
				<label className='label'>Qual é o seu nome?</label>
				<input
					type="text"
					className='input'
					placeholder='digite seu nome...'
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				/>

				<label className='label'>Qual o ano que você nasceu?</label>
				<input
					type="text"
					className='input'
					placeholder='digite o ano...'
					value={anoNasc}
					onChange={(e) => setNasc(e.target.value)}
				/>

				<button type='submit' onClick={descobrirIdade}>Descobrir idade</button>
			</form>

			{resultado && resultado.nome !== '' && (
      			<section className="result">
        			<h2 onClick={descobrirIdade}>{resultado?.nome} você tem: <span>{resultado?.idade} anos</span> </h2>
      			</section>
      )}

		</div>
	)
}

export default App