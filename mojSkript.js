
  
    function napraviEmail() {

        var imePrezime = document.getElementById("username").value;
        var godina = document.getElementById("godinaupisa").value;
        var ime = imePrezime.slice(0, 2);

        if(imePrezime != '') {

          for(var i = 0; i < imePrezime.length; i++) {
    
              if(imePrezime[i] == ' ') {
                  var prezime = imePrezime.slice(i+1, i+5);
              }
          }
  
        var email = (ime + '.' + prezime + '-' + godina + '@edu.fit.ba').toLowerCase();
        document.getElementById("email").value = email;
      
      }

    }
  
    function validacijaImePrezime() {
  
      var imePrezime = document.getElementById("username").value;
      var prvoSlovo = document.getElementById("username").value[0];
  
      if(imePrezime.length >= 5 && prvoSlovo == prvoSlovo.toUpperCase()) {
  
        document.getElementById('username').style.border = '1px solid #a7a7a7';
        document.getElementById('error').innerHTML = '';
        return imePrezime;
  
      }
  
      else {
  
        document.getElementById("error").innerHTML = 'Minimalna dužina karaktera je 5 i prvo slovo mora biti veliko.';
        document.getElementById("error").style.color = 'red';
        document.getElementById("username").style.border = '1px solid red';
        return false;
  
      }
  
    }
  
    function validacijaGodina() {
  
      var godina = document.getElementById("godinaupisa").value;
  
      if (Number.isInteger(+godina) && godina.length == 4){
        document.getElementById('godinaupisa').style.border = '1px solid #a7a7a7';
        document.getElementById('error2').innerHTML = '';
        return godina;
      }
  
      else {
        document.getElementById("error2").innerHTML = 'Broj od četiri cifre obavezan!';
        document.getElementById("error2").style.color = 'red';
        document.getElementById("godinaupisa").style.border = '1px solid red';
        return false;
     }

    }
  
    function validacijaIndexa() {
  
      var index = document.getElementById("brindeksa").value;
      var prvaDvaSlova = index.slice(0,2);
      var brojevi = index.slice(2, 9);
      var slovaRegex = /^[A-Za-z]+$/;
      
      if(index.length == 8 && prvaDvaSlova.match(slovaRegex) && prvaDvaSlova == prvaDvaSlova.toUpperCase() && Number.isInteger(+brojevi)) {
        
        document.getElementById('brindeksa').style.border = '1px solid #a7a7a7';
        document.getElementById('error3').innerHTML = '';
        return index;
      
      }
  
      else {
  
          document.getElementById("error3").innerHTML = 'Broj indexa mora da se sastoji od 8 karaktera, prva 2 velika slova i 6 brojeva.';
          document.getElementById("error3").style.color = 'red';
          document.getElementById("brindeksa").style.border = '1px solid red';
          return false;
  
      }

  }
  
    function snimiPodatke() {
  
      var valuta = document.getElementById("valuta").value;
      var indexRazmjene = document.getElementById("indexrazmjene").value;
  
      if (typeof(Storage) !== "undefined") {
  
        localStorage.setItem("valuta", valuta);
        localStorage.setItem("indexRazmjene", indexRazmjene);
     
        document.getElementById("valuta").value = '';
        document.getElementById("indexrazmjene").value = ''
  
        var h3 = document.createElement("h3");
        h3.innerHTML = localStorage.getItem("valuta");
        document.getElementById("accordion").appendChild(h3);
  
        var div = document.createElement("div");
        div.innerHTML = localStorage.getItem("indexRazmjene");
        document.getElementById("accordion").appendChild(div);
  
  
      if(valuta == localStorage.getItem("valuta")) {
  
        var prompt = confirm("Code valute vec postoji u „bazi podataka“. Da li želite promijeniti vrijednost za tu valutu?");
          
        if (prompt) {
  
          localStorage.setItem("indexRazmjene", Math.floor(Math.random() * 100) + 1);
          div.innerHTML = localStorage.getItem("indexRazmjene");
          document.getElementById("accordion").appendChild(div);
  
          } 
  
        } 
  
      } 
  
    }
  
    function konverzija() {
  

      var rates = {
        
        "CAD": 1.565,
        "CHF": 1.1798,
        "GBP": 0.87295,
        "SEK": 10.2983,
        "EUR": 1.092,
        "USD": 1.2234
  
      }
  
      for(i in rates) {
        
       /*
       */
  
        console.log(i + ':' + rates[i]);
      }
  
   
}