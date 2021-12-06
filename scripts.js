function swapImage(){
    document.getElementById('imageOne').src = 'green light.png';
  }

function startRace() {
    var elemRedcar = document.getElementById("redcar");
    var elemRedcarWin = document.getElementById("redcarwin");
    var elemBluecar = document.getElementById("bluecar");
    var elemBluecarWin = document.getElementById("bluecarwin");
    
    var posRedcar = 0;
    var posBluecar = 0;
  
    var hasWinner = false;
    elemRedcarWin.style.display = 'none';
    elemBluecarWin.style.display = 'none';
    
    var id = setInterval(frame, 20);
    function frame()
    {
      if(posRedcar >= 950 && posRedcar >= 950)
      {
        clearInterval(id);
        return;
      }
  
      if(posRedcar < 950)
      {
        posRedcar += Math.round(Math.random()*10);
        if(posRedcar >= 950)
        {
          posRedcar = 950;
          if(!hasWinner){
            hasWinner = true;
            elemRedcarWin.style.display = 'unset';
          }
        }
        elemRedcar.style.left = posRedcar + 'px';
      }
  
      if(posBluecar < 950)
      {
        posBluecar += Math.round(Math.random()*10);
        if(posBluecar >= 950)
        {
          posBluecar = 950;
          if(!hasWinner){
            hasWinner = true;
            elemBluecarWin.style.display = 'unset';
          }
        }
        elemBluecar.style.left = posBluecar + 'px';
      }
    }
  }

function refreshPage(){
    window.location.reload();
} 