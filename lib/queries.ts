import { client } from './sanity'

// Festival Config (singleton)
export async function getFestivalConfig() {
  return client.fetch(
    `*[_type == "festivalConfig"][0]{
      festivalName,
      festivalDate,
      festivalDescription,
      aboutShort,
      heroImage,
      socialLinks,
      contactEmail,
      townCouncilLogo,
      chamberLogo
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Trade Stands
export async function getTradeStands(featured?: boolean) {
  const filter = featured
    ? `*[_type == "tradeStand" && published == true && featured == true]`
    : `*[_type == "tradeStand" && published == true]`
  return client.fetch(
    `${filter} | order(stallName asc){
      _id,
      stallName,
      stallCategory,
      description,
      website,
      socialMedia,
      image,
      featured,
      standNumber
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Events
export async function getEvents(eventType?: string) {
  const filter = eventType
    ? `*[_type == "event" && published == true && eventType == $eventType]`
    : `*[_type == "event" && published == true]`
  return client.fetch(
    `${filter} | order(eventTime asc){
      _id,
      eventTitle,
      eventTime,
      eventDescription,
      eventLocation,
      eventType,
      image,
      speaker,
      speakerBio
    }`,
    eventType ? { eventType } : {},
    { next: { revalidate: 60 } }
  )
}

// Sponsors
export async function getSponsors() {
  return client.fetch(
    `*[_type == "sponsor" && published == true] | order(sponsorType asc, sponsorName asc){
      _id,
      sponsorName,
      sponsorType,
      description,
      logo,
      website
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Pages
export async function getPage(slug: string) {
  return client.fetch(
    `*[_type == "page" && pageSlug == $slug][0]{
      pageTitle,
      pageSlug,
      content,
      metaDescription,
      metaKeywords
    }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}
