/*Itens*/
const items=[
  { 
	id:0,
	nome:'Pizza',
	img:'pizza.jpg',
	quantidade:0
  },
    { 
	id:1,
	nome:'Hambúrguer',
	img:'hamburguer.jpg',
	quantidade:0
  },
    { 
	id:2,
	nome:'Batata Frita',
	img:'batata.jpg',
	quantidade:0
  },
    { 
	id:3,
	nome:'Coxinha Frita',
	img:'Coxinha.jpg',
	quantidade:0
  },
      { 
	id:4,
	nome:'Macarrão',
	img:'macarrao.jpg',
	quantidade:0
  },
      { 
	id:5,
	nome:'Salada de Frutas',
	img:'salada.jpg',
	quantidade:0
  },
]


inicializarLoja = () =>{
	/*Pondo produtos no container*/
	var containerProdutos = document.getElementById('produtos');
	items.map((val)=>{
		containerProdutos.innerHTML +=`
		<div class="produto-single"> 
		    <img src="`+val.img+`" /> 
		    <p>`+val.nome+`</p>
		    <a key="`+val.id+`" href="#">Adicionar aos pedidos!</a>
		</div>
		`;
	})

}

inicializarLoja();

/*Pondo produtos no pedido*/
atualizarPedido = () =>{

	var containerPedido = document.getElementById('pedido');
	containerPedido.innerHTML="";
	items.map((val)=>{
		if(val.quantidade > 0){
		containerPedido.innerHTML+=`
		<div class="info-single-checkout">
		 <p style="float:left;">|Pedido: `+val.nome+`</p>
		 <p style="float:right;">Quantidade: `+val.quantidade+`|</p>
		 <div style="clear:both"></div>
		
		</div>
		
		`;
	     }
	})
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
	links[i].addEventListener("click",function(){
		let key = this.getAttribute('key');
		items[key].quantidade++;
		atualizarPedido();
		return false;
	})
}