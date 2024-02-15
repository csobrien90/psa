"use client"

import { useEffect } from "react"
import { GoW, IpData, IpDataError } from 'glyph-of-warding'

export default function GlyphClient({ ipData, sendData }: { ipData: IpData | IpDataError, sendData: any }) {

	useEffect(() => {
		const glyph = new GoW(ipData, sendData)
		glyph.init()

		return () => {
			glyph.teardown()
		}
	}, [])

	return null
}