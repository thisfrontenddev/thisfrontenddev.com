type Props = {
  params: {
    slug: string
  }
}

export default function Post(props: Props) {
  const { params } = props
  return <div>Post: {params.slug}</div>
}
