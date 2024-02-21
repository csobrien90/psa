import Image from 'next/image'

import GlyphOfWarding from './components/GlyphOfWarding'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <main>
		<header>
			<h1>Public Service Announcement</h1>
			<p className={styles.subtitle} >Scanning an unknown QR code can be dangerous. Be careful!</p>
		</header>
		<GlyphOfWarding />
	</main>
  );
}
