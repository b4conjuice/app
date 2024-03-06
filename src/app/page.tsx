import { unstable_noStore as noStore } from 'next/cache'

import Main from '@/components/main'
import fetcher from '@/lib/fetcher'

type Content = {
  markdown: string
}

export default async function Home() {
  noStore()
  const data: Content = await fetcher(process.env.CONTENT_URL!)
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <article
          className='prose w-full rounded bg-cb-blue p-4 text-cb-white lg:prose-xl prose-headings:text-cb-white prose-a:text-cb-pink hover:prose-a:text-cb-pink/75'
          dangerouslySetInnerHTML={{ __html: data.markdown }}
        />
      </div>
    </Main>
  )
}
