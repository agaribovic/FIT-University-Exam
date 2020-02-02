# FIT-University-Exam
### Solutions to exams from FIT university (web design and development)

Zadatak preuzeti s ftp servera. Za izradu zadatka koristiti bilo editor po želji. U rješenju posebno razdvojiti css, html i js fileove. Folder koji sadrži sve potrebne file-ove imenovati brojem indeksa, zapakovati i postaviti na ftp. Obratiti pozornost na minimizaciju HTML/CSS te JavaScript koda koja, kod svakog zadatka, donosi veći broj bodova. U prilog ovom file-u je jquery biblioteka funkcija. Ukoliko je u nekom zadatku ekspicitno navedeno da se koristi jQuery te student izostavi jquery biblioteku u nekom zadatku, a funkcionalnost postigne putem javasripta, taj zadatak se boduje polovično. Po želji možete početi rad na ponuđenom html file-u ili kreirati svoj html file.
Podaci za pristup FTP Serveru:
•	Username: student_eb
•	Password: student_eb
Zadatak 1 (HTML+CSS) (ukupno 35 bodova – Samo Integralni) :
Prema priloženoj formi stranica.jpg i markup-u Ispit.html napraviti HTML stranicu s pripadajućim css-om. Stavke na navigacijskom menu-u mijenjaju boju prilikom hovera mišem.

Zadatak 2 (Auto mail) (ukupno 5 bodova – 2. Parcijalni 15) :
Na osnovu unesenih podataka iz polja ime i prezime (pretpostavimo da će korisnik unijeti dvije riječi – nije potrebno validirati) i godina kreirati e-mail adresu u formatu: im.prez-YYYY@edu.fit.ba (dva slova imena i četiri slova prezimena)
Generisanje e-mail adrese odraditi klikom na polje e-mail. Koristiti jQuery ili JavaScript po želji. 
Zadatak 3 (jQuery ili JavaScript Validacija) (Ukupno 20 bodova)  (za 2. parcijalni 35):

Validirati unos u polja Ime i prezime, i email na onblur event ovih polja prema sljedećim pravilima (dodati obrub crvene boje i tekstualnu informaciju o tome da polje nije uneseno ispravno):
1.	Ime i prezime: dužina minimalno 5 karaktera, prvo veliko slovo; 
2.	Godina: samo brojevi, 4 cifre;
3.	Broj indexa: u formatu AA123456;
Koristiti jQuery ili JavaScript po želji. 
Zadatak 4 (Podaci) (Ukupno 40 bodova) (za 2. parcijalni 50): :
Napraviti funkcionalnost koristeći JavaScript ili jQuery po izboru studenta. Funkcionalnost treba da podržava slijedeće:
-	U gornjem dijelu konvertora valuta treba omogućiti korisniku Klikom na dugme „Snimi“ da u lokalno  skladište snimi medjunarodni code valute i njen omjer u odnosu na Euro. Prilikom snimanja ukloniti podatke iz polja.
-	Korištenjem kreiranja elemenata (JavaScript i DOM ili jQuery i DOM) kreirati za svaki unos po jedan "<H3>" i <div> element u „accordion“ djelu stranice. (Nije potrebno znanje jQuery UI nego samo „obično“ kreiranje DOM elemenata). Postojece elemente u accordionu obrisite prije pocetka rada na ovom zadatku jer sluze samo kao primjer.
-	Treba omogućiti snimanje podataka za više unosa u lokalno skladište i accordion.
-	Pretpostaviti da je primarni ključ u nekoj zamišljenoj bazi podataka code valute. Prije snimanja treba provjeriti code valute vec postoji i ako postoji informisati korisnika dijaloškim prozorom sa opcijama „OK“ i „Cancel“. Tekst dijaloškog prozora treba da bude informacija o tome da code valute vec postoji u „bazi podataka“ i da se korisnik upita da li želi da promjeni vrijednost za tu valutu. Ukoliko korisnik klikne „OK“ podatak treba da se snimi tako što će se vrijednost za datu valutu promijeniti. Ukoliko korisnik klikne „Cancel“ podatak treba da se odbaci.
-	U donjem dijelu konvertora valuta treba omogućiti korisniku da unese bilo koja dva code-a valuta i iznos te da konvertuje iznos izvorne valute uodgovarajući iznos destinacijske valute koristeći Euro kao međuvalutu (npr. za konverziju GBP u USD konvertovati GBP prvo u EUR a onda EUR u USD).

