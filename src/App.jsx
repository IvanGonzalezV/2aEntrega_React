import React from "react";
import "./App.css"


// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// PROPS => strings, arrays, booleans, function, objects, todo tipo de datos

const user1 = "Stereo Receiver & Amplifier"
const user2 = "Vintage Kodak Camera"
const user3 = "Vintage Compact Stereo System"
const user4 = "Vintage Preamp System"
const user5 = "Subwoffer (20 inches)"
const user6 = "Android Car Audio"
const user7 = "Remote Security WiFi Camera"
const user8 = "Ceiling Dome ip camera"
const user9 = "Civil Band Movil Station"
const user10 = "Wireless Subwoffer"
const user11 = "On Ear Bluethoot Headphones"
const user12 = "Wireless Baby Monitor"

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header
          title=""
          subtitle=""
        />

        <NavBar />
        <ItemListContainer />

        <div className="UserSectiona">
          <UserCard
            img="https://www.lifewire.com/thmb/-XzfSzwECtdVWm0dcHvrKaskquY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-182145942IvanWuPI-59270da13df78cbe7ef31ca8.jpg"
            name={user1}
            offer="$650 (40% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://littlevisuals.co/images/brownie.jpg"
            name={user2}
            offer="$95 (15% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/1364243700/es/foto/sistemas-de-componentes-de-audio-vintage-receptor-est%C3%A9reo-altavoces-y-auriculares.jpg?s=612x612&w=0&k=20&c=qlKCLZtLywW7SLwft8bHrf-TB1X-XmQUAdWjPyH3FYg="
            name={user3}
            offer="$250 (20% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/949475016/es/foto/sistema-est%C3%A9reo-de-audio-anal%C3%B3gico-amplificador-auriculares-altavoces.jpg?s=2048x2048&w=is&k=20&c=SQYY87Y-HnAAfgfLDmAonqlDZHv3p1mtALtKLssbAGo="
            name={user4}
            offer="$280 (12% off)"
            date="Offer Avalible Until March 2024"
          />
        </div>

        <div className="UserSection">
          <UserCard
            img="https://media.istockphoto.com/id/694822874/es/foto/dos-altavoces-de-sonido-en-fondo-negro.jpg?s=612x612&w=0&k=20&c=1e5z2mTtsxMgUuqi5Lb56bsngFqG7ziXZyrtIMlq5aM="
            name={user5}
            offer="$175 (11% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/529367931/es/foto/smart-pantalla-t%C3%A1ctil-de-un-sistema-multimedia-para-autom%C3%B3viles.jpg?s=612x612&w=0&k=20&c=vjXRpM90vR3wPcjP8ThGrbyOvDrGuj-KphVwJTVMPFg="
            name={user6}
            offer="$135 (17% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/1174077302/es/foto/reloj-de-tel%C3%A9fono-de-prensa-de-mano-masculino-cctv.jpg?s=612x612&w=0&k=20&c=gZGiP7uccaB02KYMi4gtd0Uwo6_imFquQyS59fCl_eQ="
            name={user7}
            offer="$250 (20% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/1301521723/es/foto/c%C3%A1mara-cctv-en-la-oficina-borrosa-de-plan-abierto.jpg?s=612x612&w=0&k=20&c=h4jT513MVEGDPNMwy2fBtXaw5VEukxbhYfpa803EsjU="
            name={user8}
            offer="$650 (40% off)"
            date="Offer Avalible Until March 2024"
          />
        </div>

        <div className="UserSection">
          <UserCard
            img="https://media.istockphoto.com/id/517153292/es/foto/embarcaci%C3%B3n-marina-radio-aislado-sobre-blanco.jpg?s=612x612&w=0&k=20&c=ArM-WCnIm4-79Psv7lydmDYT8cYZdbwEbfOwameqjho="
            name={user9}
            offer="$190 (10% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/1353022859/es/foto/caja-de-altavoces.jpg?s=612x612&w=0&k=20&c=tskA5QjgD-P9AnjGoPog4uM92limpDmKRDL5fTb8wMs="
            name={user10}
            offer="$65 (7% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/982861082/es/foto/fondo-de-auriculares-inal%C3%A1mbricos-un-m%C3%ADnimo-concepto.jpg?s=612x612&w=0&k=20&c=qi59ePXBk_VRae5bqP2gNH4rZV-XJ7w0lIXgY44BY_s="
            name={user11}
            offer="$125 (10% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/863878098/es/foto/c%C3%A1mara-del-beb%C3%A9-y-beb%C3%A9-audio-monitor-3d-rendering-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=ueZi2DJc6rBNVZkry_VJwp0G9--57U2Av8lGEUCq-ok="
            name={user12}
            offer="$115 (16% off)"
            date="Offer Avalible Until March 2024"
          />
        </div>
      </div>
    )
  }
}

export default App;