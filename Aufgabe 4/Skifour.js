var Aufgabe4;
(function (Aufgabe4) {
    //Aufgabe: (Aufgabe 04)
    //Name: (Dominik Seyfried)
    //Matrikel: (256734)
    //Datum: (29.10.2017)
    //Hiermit versichere ich, dass ich diesen
    //Code selbst geschrieben habe. Er wurde
    //nicht kopiert und auch nicht diktiert.
    //*************************************************************
    //* Soweit bis jetzt. Arbeite mich langsam aber sicher durch. *
    //* Bis zum Praktikum sollt's aber laufen                     *
    //*************************************************************
    window.addEventListener("load", letitsnow); //Wartet auf Startefehl "load"
    //Arrays ("Schubladen")
    var crc2; //hier ins Array wird wie in eine Schublade meine
    var schneeflockenX = []; //Koordinaten der Zeichnung gepackt
    var schneeflockenY = [];
    var wolkenX = [];
    var wolkenY = [];
    var skifahrer = [];
    var image;
    function letitsnow() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Hintergrund
        crc2.fillStyle = "#E0F2F7";
        crc2.fillRect(0, 0, 800, 600);
        //Sonne
        crc2.beginPath();
        crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#F3E2A9";
        crc2.fill();
        //BergigerBerg 2
        crc2.beginPath();
        crc2.moveTo(350, 150);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CAE1FF";
        crc2.fill();
        //Bergiger Berg 1
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(600, 600);
        crc2.lineTo(-200, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#B0C4DE";
        crc2.fill();
        //Bergiger Berg 3
        crc2.beginPath();
        crc2.moveTo(650, 250);
        crc2.lineTo(1000, 600);
        crc2.lineTo(300, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#A2B5CD";
        crc2.fill();
        //Pistige Piste
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 800);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Skiliftiger Skilift
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 500);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 280);
        crc2.lineTo(800, 480);
        crc2.stroke();
        //Zufallsb�ume
        for (var i = 0; i < 5; i++) {
            //Eingrenzung f�r B�ume
            var x = 30 + Math.random() * 450;
            var y = 500 + Math.random() * 50;
            drawTree(x, y, "#90EE90");
        }
        // Start f�r Schneeflocken
        for (var i = 0; i < 1000; i++) {
            schneeflockenX[i] = 0 + Math.random() * 800;
            schneeflockenY[i] = 0 + Math.random() * 600;
        }
        for (var i = 0; i < 3; i++) {
            wolkenX[i] = 0 + Math.random() * 800;
            wolkenY[i] = 0 + Math.random() * 200;
        }
        //Skifahrer
        for (var i = 0; i < 3; i++) {
            skifahrer[i] = {
                x: 0,
                y: 250 + Math.random() * 300,
                dx: 10,
                dy: 5,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        //Bild wird gespeichert
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //Animationsbefehl: Hintergrund, l�schen, neuer Hintergrund, l�schen...
    function animate() {
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);
        for (var i = 0; i < schneeflockenX.length; i++) {
            if (schneeflockenY[i] > 600) {
                schneeflockenY[i] = 0;
            }
            schneeflockenY[i] += Math.random();
            snowflake(schneeflockenX[i], schneeflockenY[i]);
        }
        for (var i = 0; i < wolkenX.length; i++) {
            if (wolkenX[i] > 800) {
                wolkenX[i] = 0;
            }
            wolkenX[i] += Math.random();
            cloud(wolkenX[i], wolkenY[i]);
        }
        for (var i = 0; i < skifahrerX.length; i++) {
            if (skifahrerX[i] > 800) {
                skifahrerX[i] = 0; //Anfang
                skifahrerY[i] = 250 + Math.random() * 300; //Anfangsbereich
            }
            herbert(skifahrer[i]);
        }
        window.setTimeout(animate, 20);
    }
    //Funktion Schneeflocken 
    function snowflake(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#EFF5FB";
        crc2.fill();
    }
    //Funktion Wolken
    for (var i = 0; i < wolkenX.length; i++) {
        if (wolkenX[i] > 800) {
            wolkenX[i] = 0;
        }
        console.log(wolkenX.length);
        wolkenX[i] += Math.random();
        cloud(wolkenX[i], wolkenY[i]);
    }
    //Funktion Wolken
    function cloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB6C1";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 40, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB6C1";
        crc2.fill();
    }
    //Funktion Skifahrer
    function herbert(_skifahrer) {
        _skifahrer.x += _skifahrer.dx;
        _skifahrer.y += _skifahrer.dy;
        crc2.fillStyle = _skifahrer.color;
        crc2.beginPath();
        crc2.fillStyle = "#000.color";
        crc2.arc(_x, _y, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.fillStyle = "#000.color";
        crc2.fillRect(_x - 5, _y, 10, 30);
        crc2.fillStyle = "#000.color";
        crc2.fillRect(_x - 20, _y + 30, 40, 5);
        crc2.fillStyle = "#000.color";
        crc2.fillRect(_x - 20, _y + 23, 40, 5);
    }
    function drawTree(_x, _y, _color) {
        crc2.fillStyle = "#90EE90";
        crc2.fillRect(_x, _y, 20, 30);
        //Baumiger Baum Shape
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Skifour.js.map