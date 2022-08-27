var image=["https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200466/91961521-mam%C3%A1-vistiendo-ropa-de-manga-corta-est%C3%A1-guiando.jpg?ver=6",
"https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-personaje-de-avatar-de-ni%C3%B1a-peque%C3%B1a.jpg?ver=6",
"https://previews.123rf.com/images/hermandesign2015/hermandesign20151707/hermandesign2015170700138/82914315-de-dibujos-animados-lindo-del-ni%C3%B1o-buena-presentaci%C3%B3n.jpg",
"https://png.pngtree.com/png-clipart/20210318/ourmid/pngtree-cute-twin-sister-with-big-eyes-png-image_3045541.png"];

var name_family=["Mamá Patricia",
"Hermana mayor Donaji",
"Yo Giovanni",
"Hermana menor Mariana"];

var i=0;
function update(){
    i++;
    var num_miembros_de_mi_familia=5
    if(i>num_miembros_de_mi_familia){
        i=0;
    }
    var subir_imagen=image[i];
    var subir_nombre=name_family[i];
    document.getElementById("name_text").innerHTML=subir_nombre;
    document.getElementById("album").src=subir_imagen;
}