const DOM = function(){
    this.id = str=>document.getElementById(str);
    this.query= (regla_css,one=false)=>one ===true?
    document.querySelector(regla_css): 
    document.querySelectorAll(regla_css);

    this.create=(str, props={})=> Object.assigm(document.createElement(str), props);
    this.append = (hijos,padres=document.body)=>{
        hijos.length?
        hijos.map(
            hijo=>padres.appendChild(hijo)
        ):
        padres.appendChild(hijos);
    }
}
const D = new DOM();
