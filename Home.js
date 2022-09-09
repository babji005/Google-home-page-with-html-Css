function twoColors(s) {
    var c = Array.from(s)
    var temp = ""
    for (let i = 0; i < c.length; i++) {
      if (i == 1 || i==5){
        x = "<span style=\"color:red\">" + c[i] + "</span>";
    }
       if (i == 0 || i==3 ) {
       
          x = "<span style=\"color:blue\" >" + c[i] + "</span>";
    }
       if (i == 4) {
          x = "<span style=\"color:green\" >" + c[i] + "</span>";
    } 
       if(i == 2){
    console.log("wtf")
      x = "<span style=\"color:yellow\">" + c[i] + "</span>";
    }
      /*  if(i == 4){
         x = "<span style=\"color:#eeff00\">" + c[i] + "</span>";
       } */
    var d = temp + x
    console.log(d, temp)
    temp = d
    console.log(temp)
  
  
  }
  return temp
  
  
  }
  console.log("hello",twoColors("Google"))
  document.getElementById("logo").innerHTML = twoColors("Google");