const $app = document.getElementById('app');

const nombre = 'Rubén H.';

/*
const saludo = React.createElement(
	'h1',
	{},
	`Hola mundo ${nombre}`,
);

ReactDOM.render(
	saludo,
	$app,
);
*/

function Saludo({nombre}) {
	return React.createElement(
		'h1',
		{},
		`Hola ` + nombre + ' con componente',
	);
}

const saludo = React.createElement(
	Saludo,
	{nombre: 'Rubén'}
)

ReactDOM.render(
	saludo,
	$app
);