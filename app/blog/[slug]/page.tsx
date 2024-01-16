type Props = {
  params: {
    slug: string
  }
}

export default function Post(props: Props) {
  const { params } = props
  console.log(params.slug)
  return <div>Post: {params.slug}</div>
}
