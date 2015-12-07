(function(){
	App = function(canvas,rojo,azul,verde,opacity,anchura){
		this.limpieza = document.getElementById('limpiar');
		_this = this;
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.rojo = rojo;
		this.azul = azul;
		this.verde = verde;
		this.opa = opacity; 
		this.anchura = anchura;
		this.añadir_event();
		this.r = 9;
		this.v = 255;
		this.a = 10;
		this.o = 0.5;
		this.anc = 10;
	}
	App.prototype.añadir_event =function(){
		this.canvas.addEventListener("mousedown",otro_evento);
		this.rojo.addEventListener("change",aumentar_r);
		this.azul.addEventListener("change",aumentar_a);
		this.verde.addEventListener("change",aumentar_v);
		this.opa.addEventListener("change",aumentar_0);
		this.anchura.addEventListener("change",d_or_i_anchura);
		this.limpieza.addEventListener("click",limpiemos);
	}
	function aumentar_r(){
		_this.r = _this.rojo.value;
	}
	function aumentar_a(){
		_this.a = _this.azul.value;
	}
	function aumentar_v(){
		_this.v = _this.verde.value;
	}
	function d_or_i_anchura(){
		_this.anc = _this.anchura.value;
	}
	function aumentar_0(){
		var c = _this.opa.value;
		if(c == 0)_this.o = 0.09;
		else if(c == 1)_this.o = 0.2;
		else if(c == 2)_this.o = 0.3;
		else if(c == 3)_this.o = 0.4;
		else if(c == 4)_this.o = 0.5;
		else if(c == 5)_this.o = 0.6;
		else if(c == 6)_this.o = 0.7;
		else if(c == 7)_this.o = 0.8;
		else if(c == 8)_this.o = 0.9;
		else if(c == 9)_this.o = 1.0;
	}
	function limpiemos(){
		_this.ctx.clearRect(0,0,800,300);
	}
	function otro_evento(){
		_this.canvas.addEventListener("mousemove",agregar_dibujo);
	}
	function agregar_dibujo(e){
		var c = e;
		_this.dibujo(c);
	}
	App.prototype.dibujo = function(e){
		this.x = e.layerX;
		this.y = e.layerY;
		this.ctx.beginPath();
		this.ctx.fillStyle =`rgba(${this.r}, ${this.v}, ${this.a},${this.o})`;
		this.ctx.arc(this.x,this.y,this.anc,0,Math.PI * 2, true);
		this.ctx.fill();
		this.ctx.closePath();
	}
}());