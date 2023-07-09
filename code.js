// Programa que recibe un .txt con formato de manos tipo PioSolver y devuelve la mano en formato PPT (ProPokerTools). Es útil para el uso del nodelock concreto en MonkerSolver

let pioFormat;

document.getElementById('inputfile').addEventListener('change', function () {
    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById('output1').textContent = fr.result;
        let resultString = this.result;
        // Guardo el formato de Pio en una variable de scope global
        pioFormat = resultString;

        pioFormat = pioFormat.replace(/:/g, "@");
        // Paso el string a array
        let arr = pioFormat.split(',');
        let newArr = [];
        console.log(arr);

        for (mano of arr) {
            if (mano.indexOf("@") == -1) {
                mano = mano + "@1";
            }
            let tipoMano = mano.substring(0, mano.indexOf("@"));
            let porcMano = mano.slice(mano.indexOf("@") + 1);
            porcMano = parseFloat(porcMano) * 100;
            porcMano = Math.round(porcMano);

            if (tipoMano.indexOf("s") != -1) {
                tipoMano = tipoMano[0] + "x" + tipoMano[1] + "x";
            }

            if (tipoMano.indexOf("o") != -1) {
                tipoMano = tipoMano[0] + "x" + tipoMano[1] + "y";
            }

            mano = tipoMano + "@" + porcMano;
            newArr.push(mano);
            console.log(mano);
        }

        let strValue = String(newArr);
        console.log(strValue);

        document.getElementById('output2').textContent = strValue;
    }

    fr.readAsText(this.files[0]);
})