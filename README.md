  ### Live Link: https://cow-hut-auth-tau.vercel.app
  ### Application Routes:
  
  ## Main part
  
   ### Auth (User)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/auth/login (POST)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/auth/signup (POST)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/auth/refresh-token (POST)

   ### Auth (Admin)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/admins/create-admin (POST)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/admins/login (POST)
   - route: https://cow-hut-auth-tau.vercel.app/api/v1/admins/refresh-token (POST)
   - route: https://cow-hut-auth-tau.vercel.app/api/v1/admins/my-profile (GET)
   - route: https://cow-hut-auth-tau.vercel.app/api/v1/admins/my-profile (PATCH)
   
   ### User
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/users (GET)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/users/64a24e1fd288b04bba8b1426 (Single GET) 
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/users/64a24e1fd288b04bba8b1426 (PATCH)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/users/64a410542fed4490d5dfa907 (DELETE)

   ### Pagination and Filtering routes of user
   - https://cow-hut-auth-tau.vercel.app/api/v1/users?page=1&limit=10 (GET)
   - https://cow-hut-auth-tau.vercel.app/api/v1/users?sortBy=budget&sortOrder=asc (GET) 
   - https://cow-hut-auth-tau.vercel.app/api/v1/users?searchTerm=rang (GET) (accept firstName, lastName, address as searchTerm value)
   - https://cow-hut-auth-tau.vercel.app/api/v1/users?role=buyer (GET) (find user by exact role)
   - https://cow-hut-auth-tau.vercel.app/api/v1/users?phoneNumber=017807187246 (GET) (find user by exact phone number)

   #### Cows
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/cows (POST)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/cows (GET)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/cows/64a411ad2fed4490d5dfa90f (Single GET)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/cows/64a411ad2fed4490d5dfa90f (PATCH)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/cows/64a411ad2fed4490d5dfa90f (DELETE)

   ### Pagination and Filtering routes of Cows
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?pag=1&limit=10 (GET)
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc (GET)
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?minPrice=3500 (GET) filter cow that starting price 3500 to max
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?maxPrice=20000 (GET) filter cow that maximum price 3500 to min
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?minPrice=2000&maxPrice=70000 (GET) filter cow within price range
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?location=Chattogram (GET) filter cow by exact location
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?age=3 (GET) filter cow by exact age
   - https://cow-hut-auth-tau.vercel.app/api/v1/cows?searchTerm=rang (GET) accept name, location, breed as searchTerm value

   #### Orders
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/orders (POST)
   - Route: https://cow-hut-auth-tau.vercel.app/api/v1/orders (GET)

 ## Bonus Part

#### Admin
   -Route: https://cow-hut-auth-tau.vercel.app/api/v1/admins/create-admin (POST)

#### My Profile
- Route: https://cow-hut-auth-tau.vercel.app/api/v1/users/my-profile (GET)
- Route: https://cow-hut-auth-tau.vercel.app/api/v1/users/my-profile (PATCH)

#### Order:
 - Route: https://cow-hut-auth-tau.vercel.app/api/v1/orders/64a4146cea08cda9e84f6210 (GET)

#### Credential:

## Admin
    {
        "phoneNumber": "01890988443",
        "password": "testTest"
    }

## Buyer
    {
        "phoneNumber": "01780788726",
        "password": "testTest"
    }

## Seller
    {
        "phoneNumber": "01780718726",
        "password": "testTest"
    }