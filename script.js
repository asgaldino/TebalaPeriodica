
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
        massaAtomica.innerHTML = "223";
        pontoFusao.innerHTML = "20,9°C";
        pontoEbulicao.innerHTML = "650°C";
    }else if (id === "berilio") {
        infoBlock()        
        nome.innerHTML = "Berílio";
        simbolo.innerHTML = "Be";
        numeroAtomico.innerHTML = "4";
        massaAtomica.innerHTML = "9,0122";
        pontoFusao.innerHTML = "1287°C";
        pontoEbulicao.innerHTML = "2470°C";
    }else if (id === "magnesio") {
        infoBlock()        
        nome.innerHTML = "Magnésio";
        simbolo.innerHTML = "Mg";
        numeroAtomico.innerHTML = "12";
        massaAtomica.innerHTML = "24,305";
        pontoFusao.innerHTML = "650°C";
        pontoEbulicao.innerHTML = "1090°C";
    }else if (id === "calcio") {
        infoBlock()        
        nome.innerHTML = "Cálcio";
        simbolo.innerHTML = "Ca";
        numeroAtomico.innerHTML = "20";
        massaAtomica.innerHTML = "40,078";
        pontoFusao.innerHTML = "841,9°C";
        pontoEbulicao.innerHTML = "1484°C";
    }else if (id === "estroncio") {
        infoBlock()        
        nome.innerHTML = "Estrôncio";
        simbolo.innerHTML = "Sr";
        numeroAtomico.innerHTML = "38";
        massaAtomica.innerHTML = "87,62";
        pontoFusao.innerHTML = "776,9°C";
        pontoEbulicao.innerHTML = "1382°C";
    }else if (id === "bario") {
        infoBlock()        
        nome.innerHTML = "Bário";
        simbolo.innerHTML = "Ba";
        numeroAtomico.innerHTML = "56";
        massaAtomica.innerHTML = "137,33";
        pontoFusao.innerHTML = "730°C";
        pontoEbulicao.innerHTML = "1870°C";
    }else if (id === "radio") {
        infoBlock()        
        nome.innerHTML = "Rádio";
        simbolo.innerHTML = "Ra";
        numeroAtomico.innerHTML = "88";
        massaAtomica.innerHTML = "226";
        pontoFusao.innerHTML = "700°C";
        pontoEbulicao.innerHTML = "1737°C";
    }else if (id === "escandio") {
        infoBlock()        
        nome.innerHTML = "Escandio";
        simbolo.innerHTML = "Sc";
        numeroAtomico.innerHTML = "21";
        massaAtomica.innerHTML = "44,956";
        pontoFusao.innerHTML = "1541°C";
        pontoEbulicao.innerHTML = "2830°C";
    }else if (id === "itrio") {
        infoBlock()        
        nome.innerHTML = "Ítrio";
        simbolo.innerHTML = "Y";
        numeroAtomico.innerHTML = "39";
        massaAtomica.innerHTML = "88,906";
        pontoFusao.innerHTML = "1526°C";
        pontoEbulicao.innerHTML = "3345°C";
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
        massaAtomica.innerHTML = "47,867";
        pontoFusao.innerHTML = "1668°C";
        pontoEbulicao.innerHTML = "3287°C";
    }else if (id === "zirconio") {
        infoBlock()        
        nome.innerHTML = "Zircônio";
        simbolo.innerHTML = "Zr";
        numeroAtomico.innerHTML = "40";
        massaAtomica.innerHTML = "91,224";
        pontoFusao.innerHTML = "1855°C";
        pontoEbulicao.innerHTML = "4409°C";
    }else if (id === "hafnio") {
        infoBlock()        
        nome.innerHTML = "Háfnio";
        simbolo.innerHTML = "Hf";
        numeroAtomico.innerHTML = "72";
        massaAtomica.innerHTML = "178,49";
        pontoFusao.innerHTML = "2233°C";
        pontoEbulicao.innerHTML = "4603°C";
    }else if (id === "ruthenfordio") {
        infoBlock()        
        nome.innerHTML = "Ruthenfórdio";
        simbolo.innerHTML = "Rf";
        numeroAtomico.innerHTML = "104";
        massaAtomica.innerHTML = "267";
        pontoFusao.innerHTML = "1826,85°C";
        pontoEbulicao.innerHTML = "5526,85°C";
    }else if (id === "vanadio") {
        infoBlock()        
        nome.innerHTML = "Vanádio";
        simbolo.innerHTML = "V";
        numeroAtomico.innerHTML = "23";
        massaAtomica.innerHTML = "51,996";
        pontoFusao.innerHTML = "1907°C";
        pontoEbulicao.innerHTML = "2671°C";
    }else if (id === "niobio") {
        infoBlock()        
        nome.innerHTML = "Nióbio";
        simbolo.innerHTML = "Nb";
        numeroAtomico.innerHTML = "41";
        massaAtomica.innerHTML = "92,906";
        pontoFusao.innerHTML = "2623°C";
        pontoEbulicao.innerHTML = "4639°C";
    }else if (id === "tantalo") {
        infoBlock()        
        nome.innerHTML = "Tântalo";
        simbolo.innerHTML = "Ta";
        numeroAtomico.innerHTML = "73";
        massaAtomica.innerHTML = "183,84";
        pontoFusao.innerHTML = "3422°C";
        pontoEbulicao.innerHTML = "5555°C";
    }else if (id === "dubnio") {
        infoBlock()        
        nome.innerHTML = "Dúbnio";
        simbolo.innerHTML = "Db";
        numeroAtomico.innerHTML = "105";
        massaAtomica.innerHTML = "269";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "cromo") {
        infoBlock()        
        nome.innerHTML = "Cromo";
        simbolo.innerHTML = "Cr";
        numeroAtomico.innerHTML = "24";
        massaAtomica.innerHTML = "51,996";
        pontoFusao.innerHTML = "1907°C";
        pontoEbulicao.innerHTML = "2671°C";
    }else if (id === "molibdenio") {
        infoBlock()        
        nome.innerHTML = "Molibdênio";
        simbolo.innerHTML = "Mo";
        numeroAtomico.innerHTML = "42";
        massaAtomica.innerHTML = "95,95";
        pontoFusao.innerHTML = "2623°C";
        pontoEbulicao.innerHTML = "4639°C";
    }else if (id === "tungstenio") {
        infoBlock()        
        nome.innerHTML = "Tungstênio";
        simbolo.innerHTML = "W";
        numeroAtomico.innerHTML = "74";
        massaAtomica.innerHTML = "183,84";
        pontoFusao.innerHTML = "3422°C";
        pontoEbulicao.innerHTML = "5555°C";
    }else if (id === "seaborgio") {
        infoBlock()        
        nome.innerHTML = "Seabórgio";
        simbolo.innerHTML = "Sg";
        numeroAtomico.innerHTML = "106";
        massaAtomica.innerHTML = "269";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "manganes") {
        infoBlock()        
        nome.innerHTML = "Manganês";
        simbolo.innerHTML = "Mn";
        numeroAtomico.innerHTML = "25";
        massaAtomica.innerHTML = "54,938";
        pontoFusao.innerHTML = "1246°C";
        pontoEbulicao.innerHTML = "2061°C";
    }else if (id === "tcnecio") {
        infoBlock()        
        nome.innerHTML = "Tcnécio";
        simbolo.innerHTML = "Tc";
        numeroAtomico.innerHTML = "43";
        massaAtomica.innerHTML = "98";
        pontoFusao.innerHTML = "2157°C";
        pontoEbulicao.innerHTML = "4265°C";
    }else if (id === "renio") {
        infoBlock()        
        nome.innerHTML = "Rênio";
        simbolo.innerHTML = "Re";
        numeroAtomico.innerHTML = "75";
        massaAtomica.innerHTML = "186,21";
        pontoFusao.innerHTML = "3186°C";
        pontoEbulicao.innerHTML = "5596°C";
    }else if (id === "bohrio") {
        infoBlock()        
        nome.innerHTML = "Bóhrio";
        simbolo.innerHTML = "Bh";
        numeroAtomico.innerHTML = "107";
        massaAtomica.innerHTML = "270";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "ferro") {
        infoBlock()        
        nome.innerHTML = "Ferro";
        simbolo.innerHTML = "Fe";
        numeroAtomico.innerHTML = "26";
        massaAtomica.innerHTML = "55,845";
        pontoFusao.innerHTML = "1538°C";
        pontoEbulicao.innerHTML = "2861°C";
    }else if (id === "rutenio") {
        infoBlock()        
        nome.innerHTML = "Rutênio";
        simbolo.innerHTML = "Ru";
        numeroAtomico.innerHTML = "44";
        massaAtomica.innerHTML = "101,07";
        pontoFusao.innerHTML = "2334°C";
        pontoEbulicao.innerHTML = "4150°C";
    }else if (id === "osmio") {
        infoBlock()        
        nome.innerHTML = "Ósmio";
        simbolo.innerHTML = "Os";
        numeroAtomico.innerHTML = "76";
        massaAtomica.innerHTML = "190,23";
        pontoFusao.innerHTML = "3033°C";
        pontoEbulicao.innerHTML = "5012°C";
    }else if (id === "hassio") {
        infoBlock()        
        nome.innerHTML = "Hássio";
        simbolo.innerHTML = "Hs";
        numeroAtomico.innerHTML = "108";
        massaAtomica.innerHTML = "277";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "cobalto") {
        infoBlock()        
        nome.innerHTML = "Cobalto";
        simbolo.innerHTML = "Co";
        numeroAtomico.innerHTML = "27";
        massaAtomica.innerHTML = "58,933";
        pontoFusao.innerHTML = "1495°C";
        pontoEbulicao.innerHTML = "2900°C";
    }else if (id === "rodio") {
        infoBlock()        
        nome.innerHTML = "Ródio";
        simbolo.innerHTML = "Rh";
        numeroAtomico.innerHTML = "45";
        massaAtomica.innerHTML = "102,91";
        pontoFusao.innerHTML = "1964°C";
        pontoEbulicao.innerHTML = "3695°C";
    }else if (id === "iridio") {
        infoBlock()        
        nome.innerHTML = "Irídio";
        simbolo.innerHTML = "Ir";
        numeroAtomico.innerHTML = "77";
        massaAtomica.innerHTML = "192,22";
        pontoFusao.innerHTML = "2466°C";
        pontoEbulicao.innerHTML = "4428°C";
    }else if (id === "meitnerio") {
        infoBlock()        
        nome.innerHTML = "Meitnério";
        simbolo.innerHTML = "Mt";
        numeroAtomico.innerHTML = "109";
        massaAtomica.innerHTML = "278";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "niquel") {
        infoBlock()        
        nome.innerHTML = "Níquel";
        simbolo.innerHTML = "Ni";
        numeroAtomico.innerHTML = "28";
        massaAtomica.innerHTML = "55,693";
        pontoFusao.innerHTML = "1455°C";
        pontoEbulicao.innerHTML = "2913°C";
    }else if (id === "paladio") {
        infoBlock()        
        nome.innerHTML = "Paládio";
        simbolo.innerHTML = "Pd";
        numeroAtomico.innerHTML = "46";
        massaAtomica.innerHTML = "106,42";
        pontoFusao.innerHTML = "1554,90°C";
        pontoEbulicao.innerHTML = "2963°C";
    }else if (id === "platina") {
        infoBlock()        
        nome.innerHTML = "Platina";
        simbolo.innerHTML = "Pt";
        numeroAtomico.innerHTML = "78";
        massaAtomica.innerHTML = "195,08";
        pontoFusao.innerHTML = "1768,3°C";
        pontoEbulicao.innerHTML = "3825°C";
    }else if (id === "darmistadtio") {
        infoBlock()        
        nome.innerHTML = "Darmstádtio";
        simbolo.innerHTML = "Ds";
        numeroAtomico.innerHTML = "110";
        massaAtomica.innerHTML = "281";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "cobre") {
        infoBlock()        
        nome.innerHTML = "Cobre";
        simbolo.innerHTML = "Cu";
        numeroAtomico.innerHTML = "29";
        massaAtomica.innerHTML = "63,546";
        pontoFusao.innerHTML = "1084,62°C";
        pontoEbulicao.innerHTML = "2562°C";
    }else if (id === "prata") {
        infoBlock()        
        nome.innerHTML = "Prata";
        simbolo.innerHTML = "Ag";
        numeroAtomico.innerHTML = "47";
        massaAtomica.innerHTML = "107,87";
        pontoFusao.innerHTML = "961,78°C";
        pontoEbulicao.innerHTML = "2162°C";
    }else if (id === "ouro") {
        infoBlock()        
        nome.innerHTML = "Ouro";
        simbolo.innerHTML = "Au";
        numeroAtomico.innerHTML = "79";
        massaAtomica.innerHTML = "196,97";
        pontoFusao.innerHTML = "1064,18°C";
        pontoEbulicao.innerHTML = "2856°C";
    }else if (id === "roentgenio") {
        infoBlock()        
        nome.innerHTML = "Roentgênio";
        simbolo.innerHTML = "Rg";
        numeroAtomico.innerHTML = "111";
        massaAtomica.innerHTML = "282";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "zinco") {
        infoBlock()        
        nome.innerHTML = "Zinco";
        simbolo.innerHTML = "Zn";
        numeroAtomico.innerHTML = "30";
        massaAtomica.innerHTML = "65,38";
        pontoFusao.innerHTML = "419,53°C";
        pontoEbulicao.innerHTML = "906,9°C";
    }else if (id === "cadmio") {
        infoBlock()        
        nome.innerHTML = "Cádmio";
        simbolo.innerHTML = "Cd";
        numeroAtomico.innerHTML = "48";
        massaAtomica.innerHTML = "112,41";
        pontoFusao.innerHTML = "321,07°C";
        pontoEbulicao.innerHTML = "766,9°C";
    }else if (id === "mercurio") {
        infoBlock()        
        nome.innerHTML = "Mercúrio";
        simbolo.innerHTML = "Hg";
        numeroAtomico.innerHTML = "80";
        massaAtomica.innerHTML = "200,59";
        pontoFusao.innerHTML = "-38,83°C";
        pontoEbulicao.innerHTML = "356,73°C";
    }else if (id === "copernicio") {
        infoBlock()        
        nome.innerHTML = "Copernício";
        simbolo.innerHTML = "Cn";
        numeroAtomico.innerHTML = "112";
        massaAtomica.innerHTML = "285";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "boro") {
        infoBlock()        
        nome.innerHTML = "Boro";
        simbolo.innerHTML = "B";
        numeroAtomico.innerHTML = "5";
        massaAtomica.innerHTML = "10,81";
        pontoFusao.innerHTML = "2075°C";
        pontoEbulicao.innerHTML = "4000°C";
    }else if (id === "aluminio") {
        infoBlock()        
        nome.innerHTML = "Alumìnio";
        simbolo.innerHTML = "Ai";
        numeroAtomico.innerHTML = "13";
        massaAtomica.innerHTML = "26,982";
        pontoFusao.innerHTML = "660,32°C";
        pontoEbulicao.innerHTML = "2519°C";
    }else if (id === "galio") {
        infoBlock()        
        nome.innerHTML = "Gálio";
        simbolo.innerHTML = "Ga";
        numeroAtomico.innerHTML = "31";
        massaAtomica.innerHTML = "69,723";
        pontoFusao.innerHTML = "29,76°C";
        pontoEbulicao.innerHTML = "2204°C";
    }else if (id === "indio") {
        infoBlock()        
        nome.innerHTML = "Índio";
        simbolo.innerHTML = "In";
        numeroAtomico.innerHTML = "49";
        massaAtomica.innerHTML = "104,82";
        pontoFusao.innerHTML = "156,6°C";
        pontoEbulicao.innerHTML = "2072°C";
    }else if (id === "talio") {
        infoBlock()        
        nome.innerHTML = "Tálio";
        simbolo.innerHTML = "Tl";
        numeroAtomico.innerHTML = "81";
        massaAtomica.innerHTML = "204,38";
        pontoFusao.innerHTML = "304°C";
        pontoEbulicao.innerHTML = "1473°C";
    }else if (id === "nihonio") {
        infoBlock()        
        nome.innerHTML = "Nihônio";
        simbolo.innerHTML = "Nh";
        numeroAtomico.innerHTML = "113";
        massaAtomica.innerHTML = "282";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "carbono") {
        infoBlock()        
        nome.innerHTML = "Carbono";
        simbolo.innerHTML = "C";
        numeroAtomico.innerHTML = "6";
        massaAtomica.innerHTML = "12,011";
        pontoFusao.innerHTML = "3642°C";
        pontoEbulicao.innerHTML = "3642°C";
    }else if (id === "silicio") {
        infoBlock()        
        nome.innerHTML = "Silício";
        simbolo.innerHTML = "Si";
        numeroAtomico.innerHTML = "14";
        massaAtomica.innerHTML = "28,083";
        pontoFusao.innerHTML = "1414°C";
        pontoEbulicao.innerHTML = "2900°C";
    }else if (id === "germanio") {
        infoBlock()        
        nome.innerHTML = "Germânio";
        simbolo.innerHTML = "Ge";
        numeroAtomico.innerHTML = "32";
        massaAtomica.innerHTML = "72,63";
        pontoFusao.innerHTML = "938,25°C";
        pontoEbulicao.innerHTML = "2028°C";
    }else if (id === "estanho") {
        infoBlock()        
        nome.innerHTML = "Estanho";
        simbolo.innerHTML = "Sn";
        numeroAtomico.innerHTML = "50";
        massaAtomica.innerHTML = "118,71";
        pontoFusao.innerHTML = "231,93°C";
        pontoEbulicao.innerHTML = "2602°C";
    }else if (id === "chumbo") {
        infoBlock()        
        nome.innerHTML = "Chumbo";
        simbolo.innerHTML = "Pb";
        numeroAtomico.innerHTML = "82";
        massaAtomica.innerHTML = "207,2";
        pontoFusao.innerHTML = "327,46°C";
        pontoEbulicao.innerHTML = "1749°C";
    }else if (id === "flerovio") {
        infoBlock()        
        nome.innerHTML = "Fleróvio";
        simbolo.innerHTML = "Fl";
        numeroAtomico.innerHTML = "114";
        massaAtomica.innerHTML = "289";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "nitrogenio") {
        infoBlock()        
        nome.innerHTML = "Nitrogênio";
        simbolo.innerHTML = "N";
        numeroAtomico.innerHTML = "7";
        massaAtomica.innerHTML = "14,007";
        pontoFusao.innerHTML = "-210,1°C";
        pontoEbulicao.innerHTML = "-195,8°C";
    }else if (id === "fosforo") {
        infoBlock()        
        nome.innerHTML = "Fósforo";
        simbolo.innerHTML = "P";
        numeroAtomico.innerHTML = "15";
        massaAtomica.innerHTML = "30,974";
        pontoFusao.innerHTML = "44,15°C";
        pontoEbulicao.innerHTML = "280,5°C";
    }else if (id === "arsenio") {
        infoBlock()        
        nome.innerHTML = "Arsênio";
        simbolo.innerHTML = "As";
        numeroAtomico.innerHTML = "33";
        massaAtomica.innerHTML = "74,922";
        pontoFusao.innerHTML = "816,9°C";
        pontoEbulicao.innerHTML = "614°C";
    }else if (id === "antimonio") {
        infoBlock()        
        nome.innerHTML = "Antimônio";
        simbolo.innerHTML = "Sb";
        numeroAtomico.innerHTML = "51";
        massaAtomica.innerHTML = "121,76";
        pontoFusao.innerHTML = "630,63°C";
        pontoEbulicao.innerHTML = "1587°C";
    }else if (id === "bismuto") {
        infoBlock()        
        nome.innerHTML = "Bismuto";
        simbolo.innerHTML = "Bi";
        numeroAtomico.innerHTML = "83";
        massaAtomica.innerHTML = "208,98";
        pontoFusao.innerHTML = "271,3°C";
        pontoEbulicao.innerHTML = "1564°C";
    }else if (id === "moscovio") {
        infoBlock()        
        nome.innerHTML = "Moscóvio";
        simbolo.innerHTML = "Mc";
        numeroAtomico.innerHTML = "115";
        massaAtomica.innerHTML = "290";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "oxigenio") {
        infoBlock()        
        nome.innerHTML = "Oxigênio";
        simbolo.innerHTML = "O";
        numeroAtomico.innerHTML = "8";
        massaAtomica.innerHTML = "15,999";
        pontoFusao.innerHTML = "-218°C";
        pontoEbulicao.innerHTML = "-183°C";
    }else if (id === "enxofre") {
        infoBlock()        
        nome.innerHTML = "Enxofre";
        simbolo.innerHTML = "S";
        numeroAtomico.innerHTML = "16";
        massaAtomica.innerHTML = "32,06";
        pontoFusao.innerHTML = "115,21°C";
        pontoEbulicao.innerHTML = "444,72°C";
    }else if (id === "selenio") {
        infoBlock()        
        nome.innerHTML = "Selênio";
        simbolo.innerHTML = "Se";
        numeroAtomico.innerHTML = "34";
        massaAtomica.innerHTML = "78,971";
        pontoFusao.innerHTML = "221°C";
        pontoEbulicao.innerHTML = "685°C";
    }else if (id === "telurio") {
        infoBlock()        
        nome.innerHTML = "Telúrio";
        simbolo.innerHTML = "Te";
        numeroAtomico.innerHTML = "52";
        massaAtomica.innerHTML = "127,6";
        pontoFusao.innerHTML = "449,51°C";
        pontoEbulicao.innerHTML = "987,9°C";
    }else if (id === "polonio") {
        infoBlock()        
        nome.innerHTML = "Polônio";
        simbolo.innerHTML = "Po";
        numeroAtomico.innerHTML = "84";
        massaAtomica.innerHTML = "209";
        pontoFusao.innerHTML = "255°C";
        pontoEbulicao.innerHTML = "961,90°C";
    }else if (id === "livermorio") {
        infoBlock()        
        nome.innerHTML = "Livermório";
        simbolo.innerHTML = "Lv";
        numeroAtomico.innerHTML = "116";
        massaAtomica.innerHTML = "293";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "fluor") {
        infoBlock()        
        nome.innerHTML = "Flúor";
        simbolo.innerHTML = "F";
        numeroAtomico.innerHTML = "9";
        massaAtomica.innerHTML = "18,998";
        pontoFusao.innerHTML = "-220°C";
        pontoEbulicao.innerHTML = "-188,1°C";
    }else if (id === "cloro") {
        infoBlock()        
        nome.innerHTML = "Cloro";
        simbolo.innerHTML = "Cl";
        numeroAtomico.innerHTML = "17";
        massaAtomica.innerHTML = "35,45";
        pontoFusao.innerHTML = "-101,5°C";
        pontoEbulicao.innerHTML = "-34,04°C";
    }else if (id === "bromo") {
        infoBlock()        
        nome.innerHTML = "Bromo";
        simbolo.innerHTML = "Br";
        numeroAtomico.innerHTML = "35";
        massaAtomica.innerHTML = "79,904";
        pontoFusao.innerHTML = "-7,35°C";
        pontoEbulicao.innerHTML = "58,9°C";
    }else if (id === "iodo") {
        infoBlock()        
        nome.innerHTML = "Iodo";
        simbolo.innerHTML = "I";
        numeroAtomico.innerHTML = "53";
        massaAtomica.innerHTML = "126,9";
        pontoFusao.innerHTML = "113,7°C";
        pontoEbulicao.innerHTML = "184,3°C";
    }else if (id === "astato") {
        infoBlock()        
        nome.innerHTML = "Ástato";
        simbolo.innerHTML = "At";
        numeroAtomico.innerHTML = "85";
        massaAtomica.innerHTML = "210";
        pontoFusao.innerHTML = "302°C";
        pontoEbulicao.innerHTML = "350°C";
    }else if (id === "tenesso") {
        infoBlock()        
        nome.innerHTML = "Tenesso";
        simbolo.innerHTML = "Ts";
        numeroAtomico.innerHTML = "117";
        massaAtomica.innerHTML = "294";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "helio") {
        infoBlock()        
        nome.innerHTML = "Hélio";
        simbolo.innerHTML = "He";
        numeroAtomico.innerHTML = "2";
        massaAtomica.innerHTML = "4";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "-269°C";
    }else if (id === "neonio") {
        infoBlock()        
        nome.innerHTML = "Neônio";
        simbolo.innerHTML = "Ne";
        numeroAtomico.innerHTML = "10";
        massaAtomica.innerHTML = "20,18";
        pontoFusao.innerHTML = "-284,6°C";
        pontoEbulicao.innerHTML = "-246,1°C";
    }else if (id === "argonio") {
        infoBlock()        
        nome.innerHTML = "Argônio";
        simbolo.innerHTML = "Ar";
        numeroAtomico.innerHTML = "18";
        massaAtomica.innerHTML = "39,948";
        pontoFusao.innerHTML = "-189°C";
        pontoEbulicao.innerHTML = "-1860°C";
    }else if (id === "criptonio") {
        infoBlock()        
        nome.innerHTML = "Criptônio";
        simbolo.innerHTML = "Kr";
        numeroAtomico.innerHTML = "36";
        massaAtomica.innerHTML = "83,798";
        pontoFusao.innerHTML = "-157,36°C";
        pontoEbulicao.innerHTML = "-153,22°C";
    }else if (id === "xenonio") {
        infoBlock()        
        nome.innerHTML = "Xenônio";
        simbolo.innerHTML = "Xe";
        numeroAtomico.innerHTML = "54";
        massaAtomica.innerHTML = "131,29";
        pontoFusao.innerHTML = "-111,8°C";
        pontoEbulicao.innerHTML = "-108°C";
    }else if (id === "radonio") {
        infoBlock()        
        nome.innerHTML = "Radônio";
        simbolo.innerHTML = "Rn";
        numeroAtomico.innerHTML = "86";
        massaAtomica.innerHTML = "222";
        pontoFusao.innerHTML = "-71,1°C";
        pontoEbulicao.innerHTML = "-61,85°C";
    }else if (id === "oganessonio") {
        infoBlock()        
        nome.innerHTML = "Oganessônio";
        simbolo.innerHTML = "Og";
        numeroAtomico.innerHTML = "118";
        massaAtomica.innerHTML = "294";
        pontoFusao.innerHTML = "Desconhecido";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "lantanio") {
        infoBlock()        
        nome.innerHTML = "Lantânio";
        simbolo.innerHTML = "La";
        numeroAtomico.innerHTML = "57";
        massaAtomica.innerHTML = "138,91";
        pontoFusao.innerHTML = "919,9°C";
        pontoEbulicao.innerHTML = "3464°C";
    }else if (id === "cerio") {
        infoBlock()        
        nome.innerHTML = "Cério";
        simbolo.innerHTML = "Ce";
        numeroAtomico.innerHTML = "58";
        massaAtomica.innerHTML = "140,12";
        pontoFusao.innerHTML = "797,9°C";
        pontoEbulicao.innerHTML = "3360°C";
    }else if (id === "praseodimio") {
        infoBlock()        
        nome.innerHTML = "Praseodímio";
        simbolo.innerHTML = "Pr";
        numeroAtomico.innerHTML = "59";
        massaAtomica.innerHTML = "140,91";
        pontoFusao.innerHTML = "930,9°C";
        pontoEbulicao.innerHTML = "3290°C";
    }else if (id === "neodimio") {
        infoBlock()        
        nome.innerHTML = "Neodímio";
        simbolo.innerHTML = "Nd";
        numeroAtomico.innerHTML = "60";
        massaAtomica.innerHTML = "144,24";
        pontoFusao.innerHTML = "1021°C";
        pontoEbulicao.innerHTML = "3100°C";
    }else if (id === "promecio") {
        infoBlock()        
        nome.innerHTML = "Promécio";
        simbolo.innerHTML = "Pm";
        numeroAtomico.innerHTML = "61";
        massaAtomica.innerHTML = "145";
        pontoFusao.innerHTML = "1100°C";
        pontoEbulicao.innerHTML = "3000°C";
    }else if (id === "samario") {
        infoBlock()        
        nome.innerHTML = "Samário";
        simbolo.innerHTML = "Sm";
        numeroAtomico.innerHTML = "62";
        massaAtomica.innerHTML = "150,36";
        pontoFusao.innerHTML = "1072°C";
        pontoEbulicao.innerHTML = "1803°C";
    }else if (id === "europio") {
        infoBlock()        
        nome.innerHTML = "Európio";
        simbolo.innerHTML = "Eu";
        numeroAtomico.innerHTML = "63";
        massaAtomica.innerHTML = "151,96";
        pontoFusao.innerHTML = "821,9°C";
        pontoEbulicao.innerHTML = "1500°C";
    }else if (id === "gadolinio") {
        infoBlock()        
        nome.innerHTML = "Gadolínio";
        simbolo.innerHTML = "Gd";
        numeroAtomico.innerHTML = "64";
        massaAtomica.innerHTML = "157,25";
        pontoFusao.innerHTML = "1313°C";
        pontoEbulicao.innerHTML = "3250°C";
    }else if (id === "terbio") {
        infoBlock()        
        nome.innerHTML = "Térbio";
        simbolo.innerHTML = "Tb";
        numeroAtomico.innerHTML = "65";
        massaAtomica.innerHTML = "158,93";
        pontoFusao.innerHTML = "1356°C";
        pontoEbulicao.innerHTML = "3230°C";
    }else if (id === "disprosio") {
        infoBlock()        
        nome.innerHTML = "Disprósio";
        simbolo.innerHTML = "Dy";
        numeroAtomico.innerHTML = "66";
        massaAtomica.innerHTML = "162,50";
        pontoFusao.innerHTML = "1412°C";
        pontoEbulicao.innerHTML = "2567°C";
    }else if (id === "holmio") {
        infoBlock()        
        nome.innerHTML = "Hólmio";
        simbolo.innerHTML = "Ho";
        numeroAtomico.innerHTML = "67";
        massaAtomica.innerHTML = "164,93";
        pontoFusao.innerHTML = "1474°C";
        pontoEbulicao.innerHTML = "2700°C";
    }else if (id === "erbio") {
        infoBlock()        
        nome.innerHTML = "Érbio";
        simbolo.innerHTML = "Er";
        numeroAtomico.innerHTML = "68";
        massaAtomica.innerHTML = "167,26";
        pontoFusao.innerHTML = "1545°C";
        pontoEbulicao.innerHTML = "1950°C";
    }else if (id === "tulio") {
        infoBlock()        
        nome.innerHTML = "Túlio";
        simbolo.innerHTML = "Tm";
        numeroAtomico.innerHTML = "69";
        massaAtomica.innerHTML = "168,93";
        pontoFusao.innerHTML = "1545°C";
        pontoEbulicao.innerHTML = "1950°C";
    }else if (id === "iterbio") {
        infoBlock()        
        nome.innerHTML = "Itérbio";
        simbolo.innerHTML = "Yb";
        numeroAtomico.innerHTML = "70";
        massaAtomica.innerHTML = "173,05";
        pontoFusao.innerHTML = "818,9°C";
        pontoEbulicao.innerHTML = "1196°C";
    }else if (id === "lutecio") {
        infoBlock()        
        nome.innerHTML = "Lutécio";
        simbolo.innerHTML = "Lu";
        numeroAtomico.innerHTML = "71";
        massaAtomica.innerHTML = "174,97";
        pontoFusao.innerHTML = "1663°C";
        pontoEbulicao.innerHTML = "3402°C";
    }else if (id === "actinio") {
        infoBlock()        
        nome.innerHTML = "Actínio";
        simbolo.innerHTML = "Ac";
        numeroAtomico.innerHTML = "89";
        massaAtomica.innerHTML = "227";
        pontoFusao.innerHTML = "1050°C";
        pontoEbulicao.innerHTML = "3200°C";
    }else if (id === "torio") {
        infoBlock()        
        nome.innerHTML = "Tório";
        simbolo.innerHTML = "Th";
        numeroAtomico.innerHTML = "90";
        massaAtomica.innerHTML = "232,04";
        pontoFusao.innerHTML = "1750°C";
        pontoEbulicao.innerHTML = "4820°C";
    }else if (id === "protactinio") {
        infoBlock()        
        nome.innerHTML = "Protactínio";
        simbolo.innerHTML = "Pa";
        numeroAtomico.innerHTML = "91";
        massaAtomica.innerHTML = "231,04";
        pontoFusao.innerHTML = "1572°C";
        pontoEbulicao.innerHTML = "4000°C";
    }else if (id === "uranio") {
        infoBlock()        
        nome.innerHTML = "Urânio";
        simbolo.innerHTML = "U";
        numeroAtomico.innerHTML = "92";
        massaAtomica.innerHTML = "238,03";
        pontoFusao.innerHTML = "1135°C";
        pontoEbulicao.innerHTML = "3900°C";
    }else if (id === "nuptunio") {
        infoBlock()        
        nome.innerHTML = "Neptúnio";
        simbolo.innerHTML = "Np";
        numeroAtomico.innerHTML = "93";
        massaAtomica.innerHTML = "237";
        pontoFusao.innerHTML = "644°C";
        pontoEbulicao.innerHTML = "4000°C";
    }else if (id === "plutonio") {
        infoBlock()        
        nome.innerHTML = "Plutônio";
        simbolo.innerHTML = "Pu";
        numeroAtomico.innerHTML = "94";
        massaAtomica.innerHTML = "244";
        pontoFusao.innerHTML = "640°C";
        pontoEbulicao.innerHTML = "3230°C";
    }else if (id === "americio") {
        infoBlock()        
        nome.innerHTML = "Amerício";
        simbolo.innerHTML = "Am";
        numeroAtomico.innerHTML = "95";
        massaAtomica.innerHTML = "243";
        pontoFusao.innerHTML = "1176°C";
        pontoEbulicao.innerHTML = "2011°C";
    }else if (id === "curio") {
        infoBlock()        
        nome.innerHTML = "Cúrio";
        simbolo.innerHTML = "Cm";
        numeroAtomico.innerHTML = "96";
        massaAtomica.innerHTML = "247";
        pontoFusao.innerHTML = "1345°C";
        pontoEbulicao.innerHTML = "3140°C";
    }else if (id === "berquelio") {
        infoBlock()        
        nome.innerHTML = "Berquélio";
        simbolo.innerHTML = "Bk";
        numeroAtomico.innerHTML = "97";
        massaAtomica.innerHTML = "247";
        pontoFusao.innerHTML = "1050°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "californio") {
        infoBlock()        
        nome.innerHTML = "Califórnio";
        simbolo.innerHTML = "Cf";
        numeroAtomico.innerHTML = "98";
        massaAtomica.innerHTML = "251";
        pontoFusao.innerHTML = "899,9°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "einstenio") {
        infoBlock()        
        nome.innerHTML = "Einstênio";
        simbolo.innerHTML = "Es";
        numeroAtomico.innerHTML = "99";
        massaAtomica.innerHTML = "252";
        pontoFusao.innerHTML = "859,9°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "fermio") {
        infoBlock()        
        nome.innerHTML = "Férmio";
        simbolo.innerHTML = "Fm";
        numeroAtomico.innerHTML = "100";
        massaAtomica.innerHTML = "257";
        pontoFusao.innerHTML = "1500°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "mendelevio") {
        infoBlock()        
        nome.innerHTML = "Mendelévio";
        simbolo.innerHTML = "Md";
        numeroAtomico.innerHTML = "101";
        massaAtomica.innerHTML = "258";
        pontoFusao.innerHTML = "830°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "nobelio") {
        infoBlock()        
        nome.innerHTML = "Nobélio";
        simbolo.innerHTML = "No";
        numeroAtomico.innerHTML = "102";
        massaAtomica.innerHTML = "259";
        pontoFusao.innerHTML = "830°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }else if (id === "laurencio") {
        infoBlock()        
        nome.innerHTML = "Laurêncio";
        simbolo.innerHTML = "Lr";
        numeroAtomico.innerHTML = "103";
        massaAtomica.innerHTML = "266";
        pontoFusao.innerHTML = "1600°C";
        pontoEbulicao.innerHTML = "Desconhecido";
    }
}




