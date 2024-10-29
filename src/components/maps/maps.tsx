'use client';

//* Google Maps
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

//* Styles
import styles from './styles.module.css';

export default function Maps() {
	return (
		<>
			<APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
				<Map
					mapId="4ee2f601a80ceaf2"
					className={styles.map}
					defaultCenter={{
						lat: -32.21541213989258,
						lng: -58.21834182739258,
					}}
					defaultZoom={16}
					gestureHandling={'greedy'}
					disableDefaultUI={true}
					colorScheme={'FOLLOW_SYSTEM'}
				>
					<AdvancedMarker
						position={{
							lat: -32.21541213989258,
							lng: -58.21834182739258,
						}}
					/>
				</Map>
			</APIProvider>
		</>
	);
}
