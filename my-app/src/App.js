import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <h2>Bienvenidos a El Rincón de las Copas</h2>

      <ItemListContainer
        nombre="Cerveza Andes roja 473cc"
        img="https://cepadevinos.com/wp-content/uploads/2021/08/CervezaAndesRojita269ml_grande3.png"
        precio="$699"
        detalle="La Andes origen Rojita, color ámbar cobrizo, es una cerveza de deleite. Ideal para acompañar pescados o carnes rojas, elaborados con verduras frescas o grilladas. Pastas, ya sean con o sin relleno, con salsas suaves de tomate o con un toque de crema. Crumble de manzana o de pera.
        TIPO: Roja
        ALCOHOL: 5,1%"
      />
      <ItemListContainer
        nombre="Cerveza Corona 710cc"
        img="https://cepadevinos.com/wp-content/uploads/2017/03/Cerveza-Corona-710Cc-CERVEZA-CORONA-DESC-X710ML-1-571.jpg"
        precio="$1759"
        detalle="Corona es una cerveza premium, clásica y auténtica, reconocida mundialmente por su alta calidad, su sabor distintivo e imagen. Es una cerveza que transmite tranquilidad y relajación, invitando a los consumidores a desconectarse de la monotonía diaria a través de experiencias agradables.
          TIPO: Clasica
            ALCOHOL: 4.5"
      />
      <ItemListContainer
        nombre="La Linda Chardonnay"
        img="https://cepadevinos.com/wp-content/uploads/2017/07/Finca_La_Linda_Chardonnay_x30rq3.jpg"
        precio="$460"
        detalle="Es un vino de color amarillo brillante con reflejos dorados y verdosos. Sus intensos aromas frutales típicos de la variedad, que recuerdan a pera, manzana verde y durazno blanco, son una clara evidencia de su juventud. En boca es fresco, vivaz, de cuerpo medio y sin aristas, por lo que resulta un blanco bien frutado y con una equilibrada acidez.
        BODEGA: Finca La Linda
        TIPO: Blanco
        VARIEDAD: Chardonnay Unoaked
        CORTE: Chardonnay Unoaked100 %
        ALCOHOL: 13,5 %"
      />
      <ItemListContainer
        nombre="Familia Gascón Roble Malbec"
        img="https://cepadevinos.com/wp-content/uploads/2016/09/familia-gascon-roble-malbec.jpg"
        precio="$2.699"
        detalle="De color rojo violáceo intenso. Sus aromas recuerdan a ciruelas rojas maduras y frutas negras. En boca presenta una buena concentración, con taninos que aportan suavidad y redondes.Añejado 50% en roble francés y 50% en roble americano. Tiempo en roble: 8 meses.
        BODEGA: Escorihuela Gascon
        TIPO: Tinto
        VARIEDAD: Malbec 
        CORTE: Malbec 100 % 
        ALCOHOL: 14,5 %"
      />
      <ItemListContainer
        nombre="Salentein Cuvée Excepcionnelle Brut Nature"
        img="https://cepadevinos.com/wp-content/uploads/2016/09/salentein.png"
        precio="$460"
        detalle="cTemperatura de servicio de este espumante es de 6º C. Potencial de guarda unos 3 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar con un strudel de queso con uvas.
        BODEGA: Salentein
        TIPO: Espumante
        VARIEDAD: Blend
        CORTE: Chardonnay 60 % Pinot Noir 40 %
        ALCOHOL: 13 %"
      />
    </div>
  );
}

export default App;
