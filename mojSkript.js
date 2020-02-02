
  
    function napraviEmail() {

        var imePrezime = document.getElementById("username").value;
        var godina = document.getElementById("godinaupisa").value;
        var ime = imePrezime.slice(0, 2);
  
        for(var i = 0; i < imePrezime.length; i++) {
  
            if(imePrezime[i] == ' ') {
                var prezime = imePrezime.slice(i+1, i+5);
            }
        }
  
        var email = (ime + '.' + prezime + '-' + godina + '@edu.fit.ba').toLowerCase();
        document.getElementById("email").value = email;
  
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
  
  /*
      if(valuta == localStorage.getItem("valuta")) {
  
        var prompt = confirm("Code valute vec postoji u „bazi podataka“. Da li želite promijeniti vrijednost za tu valutu?");
          
        if (prompt == true) {
  
          localStorage.setItem("indexRazmjene", 522);
          div.innerHTML = localStorage.getItem("indexRazmjene");
          document.getElementById("accordion").appendChild(div);
  
           
          } else {
              
          }
  
        } */
  
      } 
  
    }
  
    function konverzija() {
  
      var codeIzvorneValute = document.getElementById("valuta").value;
      var iznosRazmjene = document.getElementById("indexrazmjene").value;
      var codeDestinacijskeValute = document.getElementsByClassName("valuta").value;
  
      var valute = {
  
        "USD": {
          "vrijednost": 1234564
        },
        "CAD": {
          "vrijednost": 6534
        },
        "EUR": {
          "vrijednost": 23456
        },
        "AED": {
          "vrijednost": 34554
        },
        "AFN": {
          "vrijednost": 3455
        },
        "ALL": {
          "vrijednost": 3245
        },
        "AMD": {
          "vrijednost": 234545
        },
        "ARS": {
          "vrijednost": 23453
        },
        "AUD": {
          "vrijednost": 234545
        },
        "AZN": {
          "vrijednost": 324432
        },
        "BAM": {
          "vrijednost": 2345
        },
  
      }
  
    for (i = 0; i < valute.length; i++) {
  
           console.log(value.) + "<br>";
    
    }
  
  
    }