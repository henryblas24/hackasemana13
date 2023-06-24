let dogs = [
	{
		img: './imagenes/perro1.jpg',
		name: 'Cobu',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id:  '01'
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '02',
	},
	{
		img: './imagenes/perro3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '03',
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '04',
	},
	{
		img: './imagenes/perro5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '05',
	},
	{
		img: './imagenes/perro6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '06',
	},
	{
		img: './imagenes/perro7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '07',
	},
	{
		img: './imagenes/perro8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: '08',
	},
];

const contenedorCard = document.querySelector(".contenedor-card")

const cards=dogs.map((card)=> 
`
<div class="card">
	<div class="icono" >
		<img class="editar" src="https://static.vecteezy.com/system/resources/previews/006/827/458/non_2x/edit-premium-icon-sign-symbol-vector.jpg " alt="">  
		<img class="delete" src="https://cdn.icon-icons.com/icons2/3241/PNG/512/x_delete_trash_remove_cancel_icon_197533.png " alt="">  
	</div>
	<div class="card-img">
		<img src=${card.img} alt="">  
	</div>
	<h2>${card.name}</h2>
	<h3>${card.telefono}</h3>
	<h3>${card.pais}</h3>
	<p>${card.descripcion}</p>
</div> 
`
)
//console.log(cards)

contenedorCard.innerHTML=cards
//console.log(contenedorCard)
const deleteCard = document.querySelector('.delete').classList.value
//console.log(deleteCard)
contenedorCard.addEventListener('click',(e)=> {
	
	if (e.target.classList.value==deleteCard) {
		console.log(e.target.parentElement.parentElement)
		e.target.parentElement.parentElement.remove()
		}	
	} 
)