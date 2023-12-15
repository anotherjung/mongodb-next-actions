import { getListings } from "@/actions/getListings"

const Page = async () => {
  const listings = await getListings()
  console.log(1, listings[0])
  return (
    <>
      {listings.map((item) => (
        <p key="item._id">{item.title}</p>
      ))}
    </>
  )
}
export default Page;