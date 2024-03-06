import { unstable_noStore as noStore } from 'next/cache'

import Main from '@/components/main'

type Content = {
  markdown: string
}

// Make the `request` function generic
// to specify the return data type:
function fetcher<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {}

  // This function is async, it will return a Promise:
): Promise<TResponse> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  return (
    fetch(url, config)
      // When got a response call a `json` method on it
      .then(response => response.json())
      // and return the result data.
      .then(data => data as TResponse)
  )

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}

async function fetchContent(url: string) {
  return await fetcher<Content>(url)
}

export default async function Home() {
  noStore()
  const data: Content = await fetchContent(process.env.CONTENT_URL!)
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <article
          className='prose bg-cb-blue text-cb-white lg:prose-xl prose-headings:text-cb-white prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 w-full rounded p-4'
          dangerouslySetInnerHTML={{ __html: data.markdown }}
        />
      </div>
    </Main>
  )
}
