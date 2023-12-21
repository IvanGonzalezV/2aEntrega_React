import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Router, RouterOutlined } from "@mui/icons-material";

// // REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// PAGES
import HomePage from "../HomePage/Home"
import Categories from "../CategoriesPage/Categories";
import Contact from "../ContactPage/Contact";

import { Route } from "react-router";

<div>HomePage</div>
const HomePage = () => {
    return (
        <Router>
            <div>
                {/* UserCard 1 */}
                <UserCard
                    img="https://www.lifewire.com/thmb/-XzfSzwECtdVWm0dcHvrKaskquY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-182145942IvanWuPI-59270da13df78cbe7ef31ca8.jpg"
                    name="Stereo Receiver & Amplifier"
                    offer="$650 (40% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 2 */}
                <UserCard
                    img="https://littlevisuals.co/images/brownie.jpg"
                    name="Vintage Kodak Camera"
                    offer="$95 (15% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 3 */}
                <UserCard
                    img="https://media.istockphoto.com/id/1364243700/es/foto/sistemas-de-componentes-de-audio-vintage-receptor-est%C3%A9reo-altavoces-y-auriculares.jpg?s=612x612&w=0&k=20&c=qlKCLZtLywW7SLwft8bHrf-TB1X-XmQUAdWjPyH3FYg="
                    name="Vintage Compact Stereo System"
                    offer="$250 (20% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 4 */}
                <UserCard
                    img="https://media.istockphoto.com/id/949475016/es/foto/sistema-est%C3%A9reo-de-audio-anal%C3%B3gico-amplificador-auriculares-altavoces.jpg?s=2048x2048&w=is&k=20&c=SQYY87Y-HnAAfgfLDmAonqlDZHv3p1mtALtKLssbAGo="
                    name="Vintage Preamp System"
                    offer="$280 (12% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 5 */}
                <UserCard
                    img="https://media.istockphoto.com/id/694822874/es/foto/dos-altavoces-de-sonido-en-fondo-negro.jpg?s=612x612&w=0&k=20&c=1e5z2mTtsxMgUuqi5Lb56bsngFqG7ziXZyrtIMlq5aM="
                    name="Subwoffer (20 inches)"
                    offer="$175 (11% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 6 */}
                <UserCard
                    img="https://media.istockphoto.com/id/529367931/es/foto/smart-pantalla-t%C3%A1ctil-de-un-sistema-multimedia-para-autom%C3%B3viles.jpg?s=612x612&w=0&k=20&c=vjXRpM90vR3wPcjP8ThGrbyOvDrGuj-KphVwJTVMPFg="
                    name="Android Car Audio"
                    offer="$135 (17% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 7 */}
                <UserCard
                    img="https://media.istockphoto.com/id/1174077302/es/foto/reloj-de-tel%C3%A9fono-de-prensa-de-mano-masculino-cctv.jpg?s=612x612&w=0&k=20&c=gZGiP7uccaB02KYMi4gtd0Uwo6_imFquQyS59fCl_eQ="
                    name="Remote Security WiFi Camera"
                    offer="$250 (20% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 8 */}
                <UserCard
                    img="https://media.istockphoto.com/id/1301521723/es/foto/c%C3%A1mara-cctv-en-la-oficina-borrosa-de-plan-abierto.jpg?s=612x612&w=0&k=20&c=h4jT513MVEGDPNMwy2fBtXaw5VEukxbhYfpa803EsjU="
                    name="Ceiling Dome ip camera"
                    offer="$650 (40% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 9 */}
                <UserCard
                    img="https://media.istockphoto.com/id/517153292/es/foto/embarcaci%C3%B3n-marina-radio-aislado-sobre-blanco.jpg?s=612x612&w=0&k=20&c=ArM-WCnIm4-79Psv7lydmDYT8cYZdbwEbfOwameqjho="
                    name="Civil Band Movil Station"
                    offer="$190 (10% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 10 */}
                <UserCard
                    img="https://media.istockphoto.com/id/1353022859/es/foto/caja-de-altavoces.jpg?s=612x612&w=0&k=20&c=tskA5QjgD-P9AnjGoPog4uM92limpDmKRDL5fTb8wMs="
                    name="Wireless Subwoffer"
                    offer="$65 (7% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 11 */}
                <UserCard
                    img="https://media.istockphoto.com/id/982861082/es/foto/fondo-de-auriculares-inal%C3%A1mbricos-un-m%C3%ADnimo-concepto.jpg?s=612x612&w=0&k=20&c=qi59ePXBk_VRae5bqP2gNH4rZV-XJ7w0lIXgY44BY_s="
                    name="On Ear Bluethoot Headphones"
                    offer="$125 (10% off)"
                    date="Offer Available Until March 2024"
                />

                {/* UserCard 12 */}
                <UserCard
                    img="https://media.istockphoto.com/id/863878098/es/foto/c%C3%A1mara-del-beb%C3%A9-y-beb%C3%A9-audio-monitor-3d-rendering-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=ueZi2DJc6rBNVZkry_VJwp0G9--57U2Av8lGEUCq-ok="
                    name="Wireless Baby Monitor"
                    offer="$115 (16% off)"
                    date="Offer Available Until March 2024"
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Categories" element={<CategoriesPage />} />
                    <Route path="/Contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default HomePage;