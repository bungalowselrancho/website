'use client';

//* Google Maps
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

//* Styles
import styles from './styles.module.css';

export default function Maps() {
	return (
		<>
			<APIProvider apiKey={'AIzaSyAvsNSqJu6fPHUXyivHkZEK7E4mROBwL7E'}>
				<Map
					mapId={'311ac32c3a732a0a'}
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
