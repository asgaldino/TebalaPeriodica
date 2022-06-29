
function infoNone(){
    var tabela = document.querySelector('#info');
    tabela.style.display = "none";
}
function infoBlock(){
    var tabela = document.querySelector('#info');
    tabela.style.display = "block";
}
infoNone();
function informar(id){  
    var nome = document.querySelector("#nome")  
    var simbolo = document.querySelector("#simbolo")
    var numeroAtomico = document.querySelector("#numeroAtomico")
    var massaAtomica = document.querySelector("#massaAtomica")
    var pontoFusao = document.querySelector("#pontoFusao")
    var pontoEbulicao = document.querySelector("#pontoEbulicao")

    if (id === "hidrogenio") {
        infoBlock()
        nome.innerHTML = "Hidrogênio";
        simbolo.innerHTML = "H";
        numeroAtomico.innerHTML = "1";
        massaAtomica.innerHTML = "1,008";
        pontoFusao.innerHTML = "-259,1°C";
        pontoEbulicao.innerHTML = "-252,9°C";
    }else if (id === "litio") {
        infoBlock()   
        nome.innerHTML = "Lítio";
        simbolo.innerHTML = "Li";
        numeroAtomico.innerHTML = "3";
        massaAtomica.innerHTML = "6,94";
        pontoFusao.innerHTML = "180,54°C";
        pontoEbulicao.innerHTML = "1342°C";
    }else if (id === "sodio") {
        infoBlock()
        nome.innerHTML = "Sódio";
        simbolo.innerHTML = "Na";
        numeroAtomico.innerHTML = "11";
        massaAtomica.innerHTML = "22,990";
        pontoFusao.innerHTML = "97,720°C";
        pontoEbulicao.innerHTML = "882,9°C";
    }else if (id === "potassio") {
        infoBlock()        
        nome.innerHTML = "Potássio";
        simbolo.innerHTML = "K";
        numeroAtomico.innerHTML = "19";
        massaAtomica.innerHTML = "39,098";
        pontoFusao.innerHTML = "63°C";
        pontoEbulicao.innerHTML = "758,9°C";
    }else if (id === "rubidio") {
        infoBlock()        
        nome.innerHTML = "Rubídio";
        simbolo.innerHTML = "Rb";
        numeroAtomico.innerHTML = "37";
        massaAtomica.innerHTML = "85,468";
        pontoFusao.innerHTML = "39,310°C";
        pontoEbulicao.innerHTML = "688°C";
    }else if (id === "cesio") {
        infoBlock()        
        nome.innerHTML = "Césio";
        simbolo.innerHTML = "Cs";
        numeroAtomico.innerHTML = "55";
        massaAtomica.innerHTML = "132,91";
        pontoFusao.innerHTML = "28,440°C";
        pontoEbulicao.innerHTML = "671°C";
    }else if (id === "francio") {
        infoBlock()        
        nome.innerHTML = "Frâncio";
        simbolo.innerHTML = "Fr";
        numeroAtomico.innerHTML = "87";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "berilio") {
        infoBlock()        
        nome.innerHTML = "Berílio";
        simbolo.innerHTML = "Be";
        numeroAtomico.innerHTML = "4";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "magnesio") {
        infoBlock()        
        nome.innerHTML = "Magnésio";
        simbolo.innerHTML = "Mg";
        numeroAtomico.innerHTML = "12";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "calcio") {
        infoBlock()        
        nome.innerHTML = "Cálcio";
        simbolo.innerHTML = "Ca";
        numeroAtomico.innerHTML = "20";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "estroncio") {
        infoBlock()        
        nome.innerHTML = "Estrôncio";
        simbolo.innerHTML = "Sr";
        numeroAtomico.innerHTML = "38";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "bario") {
        infoBlock()        
        nome.innerHTML = "Bário";
        simbolo.innerHTML = "Ba";
        numeroAtomico.innerHTML = "56";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "radio") {
        infoBlock()        
        nome.innerHTML = "Rádio";
        simbolo.innerHTML = "Ra";
        numeroAtomico.innerHTML = "88";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "escandio") {
        infoBlock()        
        nome.innerHTML = "Escandio";
        simbolo.innerHTML = "Sc";
        numeroAtomico.innerHTML = "21";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "itrio") {
        infoBlock()        
        nome.innerHTML = "Ítrio";
        simbolo.innerHTML = "Y";
        numeroAtomico.innerHTML = "39";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "lantanideos") {
        infoBlock()        
        nome.innerHTML = "Lantanídeos";
        simbolo.innerHTML = "La até Lu";
        numeroAtomico.innerHTML = "57 até 71";
        massaAtomica.innerHTML = "";
        pontoFusao.innerHTML = "";
        pontoEbulicao.innerHTML = "";
    }else if (id === "actinidios") {
        infoBlock()        
        nome.innerHTML = "Actinídeos";
        simbolo.innerHTML = "Ac até Lr";
        numeroAtomico.innerHTML = "89-103";
        massaAtomica.innerHTML = "";
        pontoFusao.innerHTML = "";
        pontoEbulicao.innerHTML = "";
    }else if (id === "titanio") {
        infoBlock()        
        nome.innerHTML = "Titânio";
        simbolo.innerHTML = "Ti";
        numeroAtomico.innerHTML = "22";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "zirconio") {
        infoBlock()        
        nome.innerHTML = "Zircônio";
        simbolo.innerHTML = "Zr";
        numeroAtomico.innerHTML = "40";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "hafnio") {
        infoBlock()        
        nome.innerHTML = "Háfnio";
        simbolo.innerHTML = "Hf";
        numeroAtomico.innerHTML = "72";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "ruthenfordio") {
        infoBlock()        
        nome.innerHTML = "Ruthenfórdio";
        simbolo.innerHTML = "Rf";
        numeroAtomico.innerHTML = "104";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "vanadio") {
        infoBlock()        
        nome.innerHTML = "Vanádio";
        simbolo.innerHTML = "V";
        numeroAtomico.innerHTML = "23";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "niobio") {
        infoBlock()        
        nome.innerHTML = "Nióbio";
        simbolo.innerHTML = "Nb";
        numeroAtomico.innerHTML = "41";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "tantalo") {
        infoBlock()        
        nome.innerHTML = "Tântalo";
        simbolo.innerHTML = "Ta";
        numeroAtomico.innerHTML = "73";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "dubnio") {
        infoBlock()        
        nome.innerHTML = "Dúbnio";
        simbolo.innerHTML = "Db";
        numeroAtomico.innerHTML = "105";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "cromo") {
        infoBlock()        
        nome.innerHTML = "Cromo";
        simbolo.innerHTML = "Cr";
        numeroAtomico.innerHTML = "24";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "molibdenio") {
        infoBlock()        
        nome.innerHTML = "Molibdênio";
        simbolo.innerHTML = "Mo";
        numeroAtomico.innerHTML = "42";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "tungstenio") {
        infoBlock()        
        nome.innerHTML = "Tungstênio";
        simbolo.innerHTML = "W";
        numeroAtomico.innerHTML = "74";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "seaborgio") {
        infoBlock()        
        nome.innerHTML = "Seabórgio";
        simbolo.innerHTML = "Sg";
        numeroAtomico.innerHTML = "106";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "manganes") {
        infoBlock()        
        nome.innerHTML = "Manganês";
        simbolo.innerHTML = "Mn";
        numeroAtomico.innerHTML = "25";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "tcnecio") {
        infoBlock()        
        nome.innerHTML = "Tcnécio";
        simbolo.innerHTML = "Tc";
        numeroAtomico.innerHTML = "43";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "renio") {
        infoBlock()        
        nome.innerHTML = "Rênio";
        simbolo.innerHTML = "Re";
        numeroAtomico.innerHTML = "75";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "bohrio") {
        infoBlock()        
        nome.innerHTML = "Bóhrio";
        simbolo.innerHTML = "Bh";
        numeroAtomico.innerHTML = "107";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "ferro") {
        infoBlock()        
        nome.innerHTML = "Ferro";
        simbolo.innerHTML = "Fe";
        numeroAtomico.innerHTML = "26";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "rutenio") {
        infoBlock()        
        nome.innerHTML = "Rutênio";
        simbolo.innerHTML = "Ru";
        numeroAtomico.innerHTML = "44";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "osmio") {
        infoBlock()        
        nome.innerHTML = "Ósmio";
        simbolo.innerHTML = "Os";
        numeroAtomico.innerHTML = "76";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "hassio") {
        infoBlock()        
        nome.innerHTML = "Hássio";
        simbolo.innerHTML = "Hs";
        numeroAtomico.innerHTML = "108";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "cobalto") {
        infoBlock()        
        nome.innerHTML = "Cobalto";
        simbolo.innerHTML = "Co";
        numeroAtomico.innerHTML = "27";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "rodio") {
        infoBlock()        
        nome.innerHTML = "Ródio";
        simbolo.innerHTML = "Rh";
        numeroAtomico.innerHTML = "45";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "iridio") {
        infoBlock()        
        nome.innerHTML = "Irídio";
        simbolo.innerHTML = "Ir";
        numeroAtomico.innerHTML = "77";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "meitnerio") {
        infoBlock()        
        nome.innerHTML = "Meitnério";
        simbolo.innerHTML = "Mt";
        numeroAtomico.innerHTML = "109";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "niquel") {
        infoBlock()        
        nome.innerHTML = "Níquel";
        simbolo.innerHTML = "Ni";
        numeroAtomico.innerHTML = "28";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "paladio") {
        infoBlock()        
        nome.innerHTML = "Paládio";
        simbolo.innerHTML = "Pd";
        numeroAtomico.innerHTML = "46";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "platina") {
        infoBlock()        
        nome.innerHTML = "Platina";
        simbolo.innerHTML = "Pt";
        numeroAtomico.innerHTML = "78";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "darmistadtio") {
        infoBlock()        
        nome.innerHTML = "Darmstádtio";
        simbolo.innerHTML = "Ds";
        numeroAtomico.innerHTML = "110";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "cobre") {
        infoBlock()        
        nome.innerHTML = "Cobre";
        simbolo.innerHTML = "Cu";
        numeroAtomico.innerHTML = "29";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "prata") {
        infoBlock()        
        nome.innerHTML = "Prata";
        simbolo.innerHTML = "Ag";
        numeroAtomico.innerHTML = "47";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "ouro") {
        infoBlock()        
        nome.innerHTML = "Ouro";
        simbolo.innerHTML = "Au";
        numeroAtomico.innerHTML = "79";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "roentgenio") {
        infoBlock()        
        nome.innerHTML = "Roentgênio";
        simbolo.innerHTML = "Rg";
        numeroAtomico.innerHTML = "111";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "zinco") {
        infoBlock()        
        nome.innerHTML = "Zinco";
        simbolo.innerHTML = "Zn";
        numeroAtomico.innerHTML = "30";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "cadmio") {
        infoBlock()        
        nome.innerHTML = "Cádmio";
        simbolo.innerHTML = "Cd";
        numeroAtomico.innerHTML = "48";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "mercurio") {
        infoBlock()        
        nome.innerHTML = "Mercúrio";
        simbolo.innerHTML = "Hg";
        numeroAtomico.innerHTML = "80";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "copernicio") {
        infoBlock()        
        nome.innerHTML = "Copernício";
        simbolo.innerHTML = "Cn";
        numeroAtomico.innerHTML = "112";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "boro") {
        infoBlock()        
        nome.innerHTML = "Boro";
        simbolo.innerHTML = "B";
        numeroAtomico.innerHTML = "5";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "aluminio") {
        infoBlock()        
        nome.innerHTML = "Alumìnio";
        simbolo.innerHTML = "Ai";
        numeroAtomico.innerHTML = "13";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "galio") {
        infoBlock()        
        nome.innerHTML = "Gálio";
        simbolo.innerHTML = "Ga";
        numeroAtomico.innerHTML = "31";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "indio") {
        infoBlock()        
        nome.innerHTML = "Índio";
        simbolo.innerHTML = "In";
        numeroAtomico.innerHTML = "49";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "talio") {
        infoBlock()        
        nome.innerHTML = "Tálio";
        simbolo.innerHTML = "Tl";
        numeroAtomico.innerHTML = "81";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "nihonio") {
        infoBlock()        
        nome.innerHTML = "Nihônio";
        simbolo.innerHTML = "Nh";
        numeroAtomico.innerHTML = "113";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "carbono") {
        infoBlock()        
        nome.innerHTML = "Carbono";
        simbolo.innerHTML = "C";
        numeroAtomico.innerHTML = "6";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "silicio") {
        infoBlock()        
        nome.innerHTML = "Silício";
        simbolo.innerHTML = "Si";
        numeroAtomico.innerHTML = "14";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "germanio") {
        infoBlock()        
        nome.innerHTML = "Germânio";
        simbolo.innerHTML = "Ge";
        numeroAtomico.innerHTML = "32";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "estanho") {
        infoBlock()        
        nome.innerHTML = "Estanho";
        simbolo.innerHTML = "Sn";
        numeroAtomico.innerHTML = "50";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "chumbo") {
        infoBlock()        
        nome.innerHTML = "Chumbo";
        simbolo.innerHTML = "Pb";
        numeroAtomico.innerHTML = "82";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "flerovio") {
        infoBlock()        
        nome.innerHTML = "Fleróvio";
        simbolo.innerHTML = "Fl";
        numeroAtomico.innerHTML = "114";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "nitrogenio") {
        infoBlock()        
        nome.innerHTML = "Nitrogênio";
        simbolo.innerHTML = "N";
        numeroAtomico.innerHTML = "7";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "fosforo") {
        infoBlock()        
        nome.innerHTML = "Fósforo";
        simbolo.innerHTML = "P";
        numeroAtomico.innerHTML = "15";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "arsenio") {
        infoBlock()        
        nome.innerHTML = "Arsênio";
        simbolo.innerHTML = "As";
        numeroAtomico.innerHTML = "33";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "antimonio") {
        infoBlock()        
        nome.innerHTML = "Antimônio";
        simbolo.innerHTML = "Sb";
        numeroAtomico.innerHTML = "51";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "bismuto") {
        infoBlock()        
        nome.innerHTML = "Bismuto";
        simbolo.innerHTML = "Bi";
        numeroAtomico.innerHTML = "83";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "moscovio") {
        infoBlock()        
        nome.innerHTML = "Moscóvio";
        simbolo.innerHTML = "Mc";
        numeroAtomico.innerHTML = "115";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "oxigenio") {
        infoBlock()        
        nome.innerHTML = "Oxigênio";
        simbolo.innerHTML = "O";
        numeroAtomico.innerHTML = "8";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "enxofre") {
        infoBlock()        
        nome.innerHTML = "Enxofre";
        simbolo.innerHTML = "S";
        numeroAtomico.innerHTML = "16";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "selenio") {
        infoBlock()        
        nome.innerHTML = "Selênio";
        simbolo.innerHTML = "Se";
        numeroAtomico.innerHTML = "34";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "telurio") {
        infoBlock()        
        nome.innerHTML = "Telúrio";
        simbolo.innerHTML = "Te";
        numeroAtomico.innerHTML = "52";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "polonio") {
        infoBlock()        
        nome.innerHTML = "Polônio";
        simbolo.innerHTML = "Po";
        numeroAtomico.innerHTML = "84";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "livermorio") {
        infoBlock()        
        nome.innerHTML = "Livermório";
        simbolo.innerHTML = "Lv";
        numeroAtomico.innerHTML = "116";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "fluor") {
        infoBlock()        
        nome.innerHTML = "Flúor";
        simbolo.innerHTML = "F";
        numeroAtomico.innerHTML = "9";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "cloro") {
        infoBlock()        
        nome.innerHTML = "Cloro";
        simbolo.innerHTML = "Cl";
        numeroAtomico.innerHTML = "17";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "bromo") {
        infoBlock()        
        nome.innerHTML = "Bromo";
        simbolo.innerHTML = "Br";
        numeroAtomico.innerHTML = "35";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "iodo") {
        infoBlock()        
        nome.innerHTML = "Iodo";
        simbolo.innerHTML = "I";
        numeroAtomico.innerHTML = "53";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "astato") {
        infoBlock()        
        nome.innerHTML = "Ástato";
        simbolo.innerHTML = "At";
        numeroAtomico.innerHTML = "85";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "tenesso") {
        infoBlock()        
        nome.innerHTML = "Tenesso";
        simbolo.innerHTML = "Ts";
        numeroAtomico.innerHTML = "117";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "helio") {
        infoBlock()        
        nome.innerHTML = "Hélio";
        simbolo.innerHTML = "He";
        numeroAtomico.innerHTML = "2";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "neonio") {
        infoBlock()        
        nome.innerHTML = "Neônio";
        simbolo.innerHTML = "Ne";
        numeroAtomico.innerHTML = "10";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "argonio") {
        infoBlock()        
        nome.innerHTML = "Argônio";
        simbolo.innerHTML = "Ar";
        numeroAtomico.innerHTML = "18";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "criptonio") {
        infoBlock()        
        nome.innerHTML = "Criptônio";
        simbolo.innerHTML = "Kr";
        numeroAtomico.innerHTML = "36";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "xenonio") {
        infoBlock()        
        nome.innerHTML = "Xenônio";
        simbolo.innerHTML = "Xe";
        numeroAtomico.innerHTML = "54";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "radonio") {
        infoBlock()        
        nome.innerHTML = "Radônio";
        simbolo.innerHTML = "Rn";
        numeroAtomico.innerHTML = "86";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "oganessonio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "lantanio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "cerio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "praseodimio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "neodimio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "promecio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "samario") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "europio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "gadolinio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "terbio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "disprosio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "holmio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "erbio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "tulio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "iterbio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "lutecio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "actinio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "torio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "protactinio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "uranio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "nuptunio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "plutonio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "americio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "curio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "berquelio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "californio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "einstenio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "fermio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "mendelevio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "nobelio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }else if (id === "laurencio") {
        infoBlock()        
        nome.innerHTML = "aaa";
        simbolo.innerHTML = "aaa";
        numeroAtomico.innerHTML = "00";
        massaAtomica.innerHTML = "00";
        pontoFusao.innerHTML = "000°C";
        pontoEbulicao.innerHTML = "000°C";
    }
}




