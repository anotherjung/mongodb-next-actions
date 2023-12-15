quick refernce to add mongodb to nextjs 13 actions 

npx create-next-app@13.5.6 --ts --app --tailwind

yarn add mongodb

add .env 
- DATABASE_URL=DATABASE_URL=mongodb+srv://

lib/mongodb.ts

add data to home db, Listing collection
```
{
  "title": "batman"
}
```
actions/getListings.ts

app/page.tsx