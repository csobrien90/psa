import Link from 'next/link'

import { getIpData, UserDataObject, IpData } from 'glyph-of-warding'
import GlyphClient from './GlyphClient'

export default async function GlyphOfWarding(): Promise<JSX.Element> {
	// Callback for "beforeunload" event
	const sendData = async (data: UserDataObject) => {
		"use server"
		console.log({ data })
	}

	// Get IP data from the IPData API
	if (!process.env.IPDATA_API_KEY) {
		throw new Error('IPDATA_API_KEY is required')
	}

	let ipData = await getIpData(process.env.IPDATA_API_KEY)

	if (!ipData || 'error' in ipData) {
		throw new Error('Failed to get IP data')
	} else {
		ipData = ipData as IpData
	}

	return (
		<>
			<GlyphClient ipData={ipData} sendData={sendData} />
			<article>
				<h2>Are you visiting from {ipData.city}, {ipData.region}?</h2>
				<p>That's not just a random guess. When you navigated to this page, I looked up your IP address - I can get information about your Internet Service Provider (ISP), like that your carrier is {ipData.carrier.name} or the exact latitude and longitude of the tower/station from which your service ({ipData.latitude}, {ipData.longitude}) is being provided. If the location information above is incorrect, I'm guessing you are using a VPN. If the location is correct, you may want to consider using a service such as <Link href={'https://chado.dev'} target='_blank'>NordVPN</Link></p>
			</article>
		</>
	)
}