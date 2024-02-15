// MyComponent.tsx
import GlyphOfWarding from './components/GlyphOfWarding'

export default function Home() {
  return (
    <main>
		<header>
			<h1>Public Service Announcement</h1>
			<p>Scanning an unknown QR code can be dangerous. Be careful!</p>
		</header>
		<GlyphOfWarding />
	</main>
  );
}
