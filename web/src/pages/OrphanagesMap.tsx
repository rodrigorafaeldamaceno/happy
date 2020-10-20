import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Link } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";
import Leaflet from "leaflet";

import "../styles/pages/orphanages_map.css";
import "leaflet/dist/leaflet.css";

const mapIcon = Leaflet.icon({ iconUrl: mapMarkerImg });

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Medianeira</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[-25.290964, -54.0971119]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[-25.290964, -54.0971119]} icon={mapIcon} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
