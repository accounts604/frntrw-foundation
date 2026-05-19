import { Suspense } from 'react'
import type { Metadata } from 'next'
import CapabilityClient from './CapabilityClient'

export const metadata: Metadata = {
  title: 'Capability Statement — Frntrw Foundation',
  description:
    'Statement of Intent and Capability Statement for Frntrw Foundation — Auckland Pasifika-led youth athletic development.',
}

export default function CapabilityPage() {
  return (
    <Suspense fallback={null}>
      <CapabilityClient />
    </Suspense>
  )
}
