import clientPromise from "@/lib/mongodb";

export const getListings = async () => {
   const client = await clientPromise
   const db = client.db("home")
   const listings = await db.collection("Listing").find({}).toArray()
    return listings
}