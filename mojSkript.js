
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

      if(imePrezime.length < 5) {

        document.getElementById("error").innerHTML = 'Minimalna dužina karaktera je 5.';
        document.getElementById("error").style.color = 'red';
        document.getElementById("username").style.border = '1px solid red';
      }

      if(prvoSlovo != prvoSlovo.toUpperCase()) {

        document.getElementById("error").innerHTML = 'Prvo slovo mora biti veliko.';
        document.getElementById("error").style.color = 'red';
        document.getElementById("username").style.border = '1px solid red';
      }

      else {

        document.getElementById('username').style.border = '1px solid #a7a7a7';
        document.getElementById('error').innerHTML = '';
        return capitalizeString(imePrezime);

      }

    }

    function validacijaGodina() {

      var godina = document.getElementById("godinaupisa").value;


      if (Number.isInteger(+godina)){
        console.log('Ovo je broj');
      }
      else {
        document.getElementById("error2").innerHTML = 'Samo brojevi dolaze u obzir.';
        document.getElementById("error2").style.color = 'red';
        document.getElementById("godinaupisa").style.border = '1px solid red';
     }

      if (godina.length < 4 || godina.length > 4) {
        document.getElementById("error2").innerHTML = 'Godina treba da sadrži samo četiri cifre.';
        document.getElementById("error2").style.color = 'red';
        document.getElementById("godinaupisa").style.border = '1px solid red';
      }

    }

    function validacijaIndexa() {

      var index = document.getElementById("brindeksa").value;

      if(index.length < 8 || index.length > 8) {
          document.getElementById("error3").innerHTML = 'Broj indexa treba da se sastoji od 8 karaktera.';
          document.getElementById("error3").style.color = 'red';
          document.getElementById("brindeksa").style.border = '1px solid red';
        }

      var prvaDvaSlova = index.slice(0,2);
      var brojevi = index.slice(2, 9);

      if(prvaDvaSlova != prvaDvaSlova.toUpperCase()) {
          document.getElementById("error3").innerHTML = 'Prva dva slova moraju biti velika.';
          document.getElementById("error3").style.color = 'red';
          document.getElementById("brindeksa").style.border = '1px solid red';
      }

      if(Number.isInteger(+prvaDvaSlova))  {
          document.getElementById("error3").innerHTML = 'Prva dva karaktera moraju biti slova.';
          document.getElementById("error3").style.color = 'red';
          document.getElementById("brindeksa").style.border = '1px solid red';
      }

      if(Number.isInteger(+brojevi))
          console.log('brojevi')
      else {
          document.getElementById("error3").innerHTML = 'Zadnjih šest karaktera moraju biti brojevi.';
          document.getElementById("error3").style.color = 'red';
          document.getElementById("brindeksa").style.border = '1px solid red';
      }


  }

    function snimi() {

      var valuta = document.getElementById("valuta").value;
      var indexRazmjene = document.getElementById("indexrazmjene").value;

      //console.log('valuta: ' + valuta + ' ' + 'index: ' + indexRazmjene);

      if (typeof(Storage) !== "undefined") {

        if(valuta == localStorage.getItem("valuta")) {
          var r = confirm("Code valute vec postoji u „bazi podataka“. Da li želite promijeniti vrijednost za tu valutu?");
          if (r == true) {
            document.getElementById("valuta").value = '';
            document.getElementById("indexrazmjene").value = '';
           
          } else {
            txt = "You pressed Cancel!";
          }
        }
        // Store
        localStorage.setItem("valuta", valuta);
        localStorage.setItem("indexRazmjene", indexRazmjene);
        // Retrieve
        console.log("Valuta: " + localStorage.getItem("valuta"));
        console.log("Index razmjene: " + localStorage.getItem("indexRazmjene"));

        valuta = '';
        indexRazmjene = '';

        var h3 = document.createElement("h3");
        h3.innerHTML = localStorage.getItem("valuta");
        document.getElementById("accordion").appendChild(h3);

        var div = document.createElement("div");
        div.innerHTML = localStorage.getItem("indexRazmjene");
        document.getElementById("accordion").appendChild(div);

      } else {
        console.log("Sorry, your browser does not support Web Storage...");
      }


    }

