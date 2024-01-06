import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
  const position = [21.368627, 105.9231807];
  return (
    <>
      <MapContainer
        zoom={24}
        center={position as any}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position as any}>
          <Popup>Thôn Hương Sơn, Xã Hoà Sơn, Hiệp Hoà, Bắc Giang</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
