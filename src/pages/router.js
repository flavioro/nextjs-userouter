import { useRouter } from 'next/router'

export default function ReadMore({ post }) {
  const router = useRouter()

  return (
    <span
      onClick={() => {
        router.push({
          pathname: '/'
        })
      }}
    >
      Click here to read more
    </span>
  )
}