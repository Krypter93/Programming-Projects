function perform(){
    const color= "#" + Math.random().toString(16).substring(9);
    document.getElementById("color").innerHTML=color;
    document.body.style.backgroundColor=color;
}
