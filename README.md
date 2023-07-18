  ### Live Link Backend: https://book-catalog-ten.vercel.app/
  ### Live Link frontend: https://book-catalog-rashed.netlify.app/
  ### Git Link frontend: https://github.com/Rashadul-Islam/book-catalog
  ### Application Routes:
  
  ## Main part
  
   ### Auth (User)
   - Route: https://book-catalog-ten.vercel.app/api/v1/auth/signup (POST)
   - Route: https://book-catalog-ten.vercel.app/api/v1/auth/signin (POST)
   - Route: https://book-catalog-ten.vercel.app/api/v1/auth/refresh-token (POST)
   - Route: https://book-catalog-ten.vercel.app/api/v1/auth/logout (POST)

   ### Book
   - Route: https://book-catalog-ten.vercel.app/api/v1/books/recent-books (GET)
   - Route: https://book-catalog-ten.vercel.app/api/v1/books (GET)
   - route: https://book-catalog-ten.vercel.app/api/v1/books/create-book (POST)
   - route: https://book-catalog-ten.vercel.app/api/v1/books/64b4b491f02ae5461cd27798 (SINGLE GET)

   ### Pagination and Filtering routes of book
   - Route: https://book-catalog-ten.vercel.app/api/v1/books?page=1&limit=10 (GET) 
   - Route: https://book-catalog-ten.vercel.app/api/v1/books?searchTerm=rang (GET) (accept author, title, genre as searchTerm value)
   - Route: https://book-catalog-ten.vercel.app/api/v1/books?genre=action (GET) (find book by exact genre)
   - Route: https://book-catalog-ten.vercel.app/api/v1/books?publicationDate=2023-06-07 (GET) (find book by exact date)

   ### Comments
   - route: https://book-catalog-ten.vercel.app/api/v1/books/comment/64b4b491f02ae5461cd27798 (POST)
   
   ### Wishlist
   - Route: https://book-catalog-ten.vercel.app/api/v1/wishlist (GET)
   - Route: https://book-catalog-ten.vercel.app/api/v1/wishlist/create-wishlist (POST) 

   ### Pagination of wishlist
   - Route: https://book-catalog-ten.vercel.app/api/v1/wishlist?page=1&limit=10 (GET) 

   ### Readinglist
   - Route: https://book-catalog-ten.vercel.app/api/v1/readinglist (GET)
   - Route: https://book-catalog-ten.vercel.app/api/v1/readinglist/create-readinglist (POST) 

   ### Pagination of wishlist
   - Route: https://book-catalog-ten.vercel.app/api/v1/readinglist?page=1&limit=10 (GET)


#### Credential:

## user
    {
        "email": "rashed@gmail.com",
        "password": "rashed"
    }