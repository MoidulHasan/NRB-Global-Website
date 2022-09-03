import { GMap } from 'primereact/gmap';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';
import React, { useEffect, useState } from 'react';

export default function ContactInfoMap() {
    const [googleMapsReady, setGoogleMapsReady] = useState(false);

    useEffect(() => {
        loadGoogleMaps(() => {
            setGoogleMapsReady(true);
        });

        return () => {
            removeGoogleMaps();
        }
    }, []);
    const options = {
        center: { lat: 36.890257, lng: 30.707417 },
        zoom: 12
    };
    return (
        <div>
            <GMap options={options} style={{ width: '100%', minHeight: '320px' }} />
        </div>
    )
}
