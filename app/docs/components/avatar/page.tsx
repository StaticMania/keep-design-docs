import type { Metadata, NextPage } from 'next'
import AvatarDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Avatar component in the Keep React allows you to display user avatars or profile images in a consistent and visually appealing manner.',
  title: 'Avatar - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AvatarDocs />
    </DocsContentLayout>
  )
}

export default page
