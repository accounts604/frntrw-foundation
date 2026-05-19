import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getStory, getStorySlugs } from '@/lib/stories'
import StoryArticle from './StoryArticle'

export function generateStaticParams() {
  return getStorySlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) return { title: 'Story not found — Frntrw Foundation' }

  const url = `https://frntrwfoundation.org.nz/stories/${story.slug}`
  return {
    title: `${story.title} — Frntrw Foundation`,
    description: story.dek,
    openGraph: {
      title: story.title,
      description: story.dek,
      url,
      siteName: 'Frntrw Foundation',
      images: [{ url: story.heroImage, width: 1200, height: 630, alt: story.title }],
      type: 'article',
      publishedTime: story.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: story.title,
      description: story.dek,
      images: [story.heroImage],
    },
    alternates: { canonical: url },
  }
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) notFound()
  return (
    <Suspense fallback={null}>
      <StoryArticle story={story} />
    </Suspense>
  )
}
