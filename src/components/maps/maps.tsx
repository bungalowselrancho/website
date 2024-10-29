'use client';

//* Google Maps
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

//* Styles
import styles from './styles.module.css';

export default function Maps() {
	return (
		<>
			<APIProvider apiKey={'AIzaSyD9-RoIc1BVftx7odu7_l7lMaOWa2EOy3s'}>
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
