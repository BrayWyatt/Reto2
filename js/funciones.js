function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var articulo = document.getElementById(data).parentElement;
    ev.target.appendChild(document.getElementById(data));
    articulo.remove();

    var result = document.getElementById("resultado");
    var resultNum = result.textContent
    if(data == "drag1"){
      result.innerHTML = "1.3€";
    }else if(data == "drag1"){
      result.innerHTML = "2";
    }
    result.app
  } 
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var articulo = document.getElementById(data).parentElement;
    ev.target.appendChild(document.getElementById(data));
    articulo.remove();

    var result = document.getElementById("resultado");
    var resultNum = result.innerHTML;
    if(data == "drag1"){
      result.innerHTML = Number(resultNum) + 1.3;
    }else if(data == "drag2"){
      result.innerHTML = Number(resultNum) + 2.4;
    }
    else if(data == "drag3"){
      result.innerHTML = Number(resultNum) + 3.1;
    }
    else if(data == "drag4"){
      result.innerHTML = Number(resultNum) + 5;
    }
    result.app
  }
