# O-Housing stagiaires part
## Overview
O-Housing_Stagiaires is a set of APIs for managing stagiaires, rooms, and payments in a housing system. The Stagiaire API allows you to fetch, create, update, and delete stagiaires. The Rooms API enables you to manage rooms, including the ability to fetch all rooms, create or update rooms, delete rooms, and manage stagiaires (participants) within those rooms. The Payments API allows you to manage payments, including fetching, creating, updating, and deleting payments, along with handling monthly payments.

## Stagiaires API Documentation
### Overview
The Stagiaire API allows you to manage stagiaires in the system. You can fetch all stagiaires, create a new stagiaire, update an existing stagiaire, delete a stagiaire.
### 1. Get All Stagiaires
#### Endpoint: 
GET /api/stagiaires
#### Description: 
Fetches all stagiaires in the system.
#### Response: 
A list of stagiaire objects.
#### Example Response:
```json
  [
    {
        "_id": "67dd4ca201fd55b0050cd23e",
        "nom": "Ahmed",
        "prenom": "Ahmeai",
        "email": "ahmed@gmail.com",
        "password": "12345678",
        "telephone": "0011223344",
        "adresse": "12 Rue Almanar",
        "ville": "Casa Blanca",
        "niveau": "Ts",
        "filiere": "Developement Digital",
        "createdAt": "2025-03-21T11:25:22.975Z",
        "updatedAt": "2025-03-21T15:13:31.400Z",
        "__v": 0
    },
    {
        "_id": "67dd861cb87edce22e85dd5e",
        "nom": "Othmane",
        "prenom": "Athmouny",
        "email": "othmane@gmail.com",
        "password": "12345678",
        "telephone": "0011223344",
        "adresse": "16 Rue Almanar",
        "ville": "Casa Blanca",
        "niveau": "Ts",
        "filiere": "Dev",
        "createdAt": "2025-03-21T15:30:36.632Z",
        "updatedAt": "2025-03-21T15:30:36.632Z",
        "__v": 0
    },
    {
        "_id": "67dd96c62f88700151f35d48",
        "nom": "Karim",
        "prenom": "Karimi",
        "email": "karim@gmail.com",
        "password": "12345678",
        "telephone": "0011223344",
        "adresse": "16 Rue Al Massira",
        "ville": "Dakhla",
        "niveau": "T",
        "filiere": "chi cho3ba",
        "createdAt": "2025-03-21T16:41:42.430Z",
        "updatedAt": "2025-03-21T16:41:42.430Z",
        "__v": 0
    },
    {
        "_id": "67ddafd7984ef3f2eb7b5c1c",
        "nom": "Hamid",
        "prenom": "Hamidi",
        "email": "hamis@gmail.com",
        "password": "12345678",
        "telephone": "0011223344",
        "adresse": "16 Rue Al Bartoutus",
        "ville": "Fes",
        "niveau": "S",
        "filiere": "chi cho3ba",
        "createdAt": "2025-03-21T18:28:39.968Z",
        "updatedAt": "2025-03-21T18:28:39.968Z",
        "__v": 0
    },
    {
        "_id": "67ddb00d984ef3f2eb7b5c1e",
        "nom": "Safaa",
        "prenom": "Sandousfa",
        "email": "safaa@gmail.com",
        "password": "12345678",
        "telephone": "0011223344",
        "adresse": "16 Rue Al kriptus",
        "ville": "Meknes",
        "niveau": "Ts",
        "filiere": "chi cho3ba",
        "createdAt": "2025-03-21T18:29:33.311Z",
        "updatedAt": "2025-03-21T18:29:33.311Z",
        "__v": 0
    }
]
```
### 2. Get Stagiaire by ID
#### Endpoint: 
GET /api/stagiaires/:id
#### Description: 
Fetches a single stagiaire by its ID.
#### URL Parameters:
id: The unique identifier of the stagiaire.
#### Response: 
A stagiaire object with the specified ID.
#### Example Response:
```json
  {
    "_id": "67ddb00d984ef3f2eb7b5c1e",
    "nom": "Safaa",
    "prenom": "Sandousfa",
    "email": "safaa@gmail.com",
    "password": "12345678",
    "telephone": "0011223344",
    "adresse": "16 Rue Al kriptus",
    "ville": "Meknes",
    "niveau": "Ts",
    "filiere": "chi cho3ba",
    "createdAt": "2025-03-21T18:29:33.311Z",
    "updatedAt": "2025-03-21T18:29:33.311Z",
    "__v": 0
  }
```
### 3. Create a New Stagiaire
#### Endpoint: 
POST /api/stagiaires
#### Description: 
Creates a new stagiaire.
#### Request Body:
```json
{
    "nom": "Ayoub",
    "prenom": "Ayoubi",
    "email": "ayoub@gmail.com",
    "password": "12345678",
    "telephone": "0011223344",
    "adresse": "16 Rue Al psykardo",
    "ville": "Taza",
    "niveau": "Ts",
    "filiere": "chi cho3ba"
}
```
#### Response: 
The newly created stagiaire object.
#### Example Response:
```json
{
    "nom": "Ayoub",
    "prenom": "Ayoubi",
    "email": "ayoub@gmail.com",
    "password": "12345678",
    "telephone": "0011223344",
    "adresse": "16 Rue Al psykardo",
    "ville": "Taza",
    "niveau": "Ts",
    "filiere": "chi cho3ba",
    "_id": "67ded175b25654b21cb1c742",
    "createdAt": "2025-03-22T15:04:21.014Z",
    "updatedAt": "2025-03-22T15:04:21.014Z",
    "__v": 0
}
```
### 4. Update Stagiaire
#### Endpoint: 
PUT /api/stagiaires/:id
#### Description: 
Updates an existing stagiaire's details.
#### URL Parameters:
id: The unique identifier of the stagiaire.
#### Request Body:
```json
{
    "filiere": "filiere jdida hh"
}
```
#### Response: 
The updated stagiaire object.
#### Example Response:
```json
{
    "_id": "67ded175b25654b21cb1c742",
    "nom": "Ayoub",
    "prenom": "Ayoubi",
    "email": "ayoub@gmail.com",
    "password": "12345678",
    "telephone": "0011223344",
    "adresse": "16 Rue Al psykardo",
    "ville": "Taza",
    "niveau": "Ts",
    "filiere": "filiere jdida hh",
    "createdAt": "2025-03-22T15:04:21.014Z",
    "updatedAt": "2025-03-22T15:08:15.310Z",
    "__v": 0
}
```
### 5. Delete a Stagiaire
#### Endpoint: 
DELETE /api/stagiaires/:id
#### Description: 
Deletes a stagiaire by its ID.
#### URL Parameters:
id: The unique identifier of the stagiaire.
#### Response: 
A success message confirming the stagiaire deletion.
#### Example Response:
```json 
  {
  "message": "Stagiaire deleted successfully"
}
```
## Rooms API Documentation
### Overview
The Rooms API allows you to manage rooms in the system. You can fetch all rooms, create a new room, update an existing room, delete a room, and manage stagiaires (participants) in the rooms.
### 1. Get All Rooms
#### Endpoint: 
GET /api/rooms
#### Description: 
Fetches all rooms in the system.
#### Response: 
A list of room objects.
#### Example Response:
```json
  [
    {
        "_id": "67dda68af88345d67ee1cb44",
        "nom": "Chambre 101",
        "type": "male",
        "stagiaires": [
            "67dd4ca201fd55b0050cd23e",
            "67dd861cb87edce22e85dd5e",
            "67dd96c62f88700151f35d48",
            "67ddb05d984ef3f2eb7b5c22"
        ],
        "__v": 6
    },
    {
        "_id": "67ddada688429cde3355da7b",
        "nom": "Chambre 102",
        "type": "female",
        "stagiaires": [],
        "__v": 0
    }
]
```
### 2. Get Room by ID
#### Endpoint: 
GET /api/rooms/:id
#### Description: 
Fetches a single room by its ID.
#### URL Parameters:
id: The unique identifier of the room.
#### Response: 
A room object with the specified ID.
#### Example Response:
```json
  {
    "_id": "67dda68af88345d67ee1cb44",
    "nom": "Chambre 101",
    "type": "male",
    "stagiaires": [
        "67dd4ca201fd55b0050cd23e",
        "67dd861cb87edce22e85dd5e",
        "67dd96c62f88700151f35d48",
        "67ddb05d984ef3f2eb7b5c22"
    ],
    "__v": 6
  }
```
### 3. Create a New Room
#### Endpoint: 
POST /api/rooms
#### Description: 
Creates a new room.
#### Request Body:
```json
  {
    "nom": "Chambre 103",
    "type": "female",
    "stagiaires": []
  }
```
#### Response: 
The newly created room object.
#### Example Response:
```json
  {
    "nom": "Chambre 103",
    "type": "female",
    "stagiaires": [],
    "_id": "67dec6d513c9925aa36711da",
    "__v": 0
  }
```
### 4. Update Room
#### Endpoint: 
PUT /api/rooms/:id
#### Description: 
Updates an existing room's details.
#### URL Parameters:
id: The unique identifier of the room.
#### Request Body:
```json
  {
    "nom": "Chambre 102"
  }
```
#### Response: 
The updated room object.
#### Example Response:
```json
  {
    "_id": "67ddada688429cde3355da7b",
    "nom": "Chambre 102",
    "type": "female",
    "stagiaires": [],
    "__v": 0
  }
```
### 5. Delete a Room
#### Endpoint: 
DELETE /api/rooms/:id
#### Description: 
Deletes a room by its ID.
#### URL Parameters:
id: The unique identifier of the room.
#### Response: 
A success message confirming the room deletion.
#### Example Response:
```json 
  {
  "message": "Room deleted successfully"
}
```
### 6. Add Stagiaire to Room
#### Endpoint: 
POST /api/rooms/:roomId/add-stagiaire
#### Description: 
Adds a stagiaire (participant) to a room.
#### URL Parameters:
roomId: The ID of the room where the stagiaire will be added.
#### Request Body:
```json
  {
    "stagiaireId": "67ddb00d984ef3f2eb7b5c1e"
  }
```
#### Response: 
A success message indicating the stagiaire was added successfully.
#### Example Response:
```json
  {
    "message": "Stagiaire added successfully!",
    "room": {
        "_id": "67deca54b25654b21cb1c738",
        "nom": "Chambre 102",
        "type": "female",
        "stagiaires": [
            "67ddb00d984ef3f2eb7b5c1e"
        ],
        "__v": 1
    }
  }
```
### 7. Remove Stagiaire from Room
#### Endpoint: 
POST /api/rooms/:roomId/remove-stagiaire
#### Description: 
Removes a stagiaire (participant) from a room.
#### URL Parameters:
roomId: The ID of the room where the stagiaire will be removed from.
#### Request Body:
```json
  {
    "stagiaireId": "67ddb00d984ef3f2eb7b5c1e"
  }
```
#### Response: 
A success message indicating the stagiaire was removed successfully.
#### Example Response:
```json
{
    "message": "Stagiaire removed successfully!",
    "room": {
        "_id": "67deca54b25654b21cb1c738",
        "nom": "Chambre 102",
        "type": "female",
        "stagiaires": [],
        "__v": 2
    }
}
```
### Error Responses
#### Room not found:
##### Code: 404 Not Found
##### Message: "Room not found"
#### Room is full:
##### Code: 400 Bad Request
##### Message: "This room is already full."
### Important Notes
##### A room's capacity determines how many stagiaires can be added to it.
##### Each room can hold a maximum of 4 stagiaires (based on your business logic).
##### When adding a stagiaire, make sure to verify if the stagiaire is already in the room, and if the room has reached its capacity limit.

## Payments API Documentation
### Overview
The Payments API allows you to manage payments in the system. You can fetch all payments, create a new payments, update an existing month payment, delete a payments.
### 1. Get All Payments
#### Endpoint: 
GET /api/payments
#### Description: 
Fetches all payments in the system.
#### Response: 
A list of payment objects.
#### Example Response:
```json
  [
    {
        "_id": "67deb25072eab799b52f5469",
        "stagiaire_id": {
            "_id": "67dd4ca201fd55b0050cd23e"
        },
        "year": "2024/2025",
        "months": {
            "septembre_2024": true,
            "octobre_2024": true,
            "novembre_2024": true,
            "décembre_2024": false,
            "janvier_2025": false,
            "février_2025": false,
            "mars_2025": false,
            "avril_2025": false,
            "mai_2025": false,
            "juin_2025": false,
            "juillet_2025": false,
            "août_2025": false,
            "septembre_2025": false
        },
        "__v": 0
    }
]
```
### 2. Get Payment by ID
#### Endpoint: 
GET /api/payments/:id
#### Description: 
Fetches a single payment by its ID.
#### URL Parameters:
id: The unique identifier of the payment.
#### Response: 
A payment object with the specified ID.
#### Example Response:
```json
  {
    "_id": "67deb25072eab799b52f5469",
    "stagiaire_id": {
        "_id": "67dd4ca201fd55b0050cd23e"
    },
    "year": "2024/2025",
    "months": {
        "septembre_2024": true,
        "octobre_2024": true,
        "novembre_2024": true,
        "décembre_2024": false,
        "janvier_2025": false,
        "février_2025": false,
        "mars_2025": false,
        "avril_2025": false,
        "mai_2025": false,
        "juin_2025": false,
        "juillet_2025": false,
        "août_2025": false,
        "septembre_2025": false
    },
    "__v": 0
}
```
### 3. Create a New Payment
#### Endpoint: 
POST /api/payments
#### Description: 
Creates a new payment.
#### Request Body:
```json
{
    "stagiaire_id": "67ded175b25654b21cb1c742",
    "startYear": 2024
}
```
#### Response: 
The newly created payment object.
#### Example Response:
```json
{
    "stagiaire_id": "67ded175b25654b21cb1c742",
    "year": "2024/2025",
    "_id": "67ded5cab25654b21cb1c74b",
    "months": {
        "septembre_2024": false,
        "octobre_2024": false,
        "novembre_2024": false,
        "décembre_2024": false,
        "janvier_2025": false,
        "février_2025": false,
        "mars_2025": false,
        "avril_2025": false,
        "mai_2025": false,
        "juin_2025": false,
        "juillet_2025": false,
        "août_2025": false,
        "septembre_2025": false
    },
    "__v": 0
}
```
### 4. Update a month in the payment's status
#### Endpoint: 
PUT /api/payments/:id
#### Description: 
Updates an existing month's status (by default it's false).
#### URL Parameters:
id: The unique identifier of the payment.
#### Request Body:
```json
{
    "month": "septembre_2024",
    "paid": true
}
```
#### Response: 
The updated payment object.
#### Example Response:
```json
{
    "message": "Payment status for septembre_2024 updated",
    "payment": {
        "_id": "67ded5cab25654b21cb1c74b",
        "stagiaire_id": "67ded175b25654b21cb1c742",
        "year": "2024/2025",
        "months": {
            "septembre_2024": true,
            "octobre_2024": false,
            "novembre_2024": false,
            "décembre_2024": false,
            "janvier_2025": false,
            "février_2025": false,
            "mars_2025": false,
            "avril_2025": false,
            "mai_2025": false,
            "juin_2025": false,
            "juillet_2025": false,
            "août_2025": false,
            "septembre_2025": false
        },
        "__v": 0
    }
}
```
### 5. Delete a Payment
#### Endpoint: 
DELETE /api/payments/:id
#### Description: 
Deletes a payment by its ID.
#### URL Parameters:
id: The unique identifier of the payment.
#### Response: 
A success message confirming the payment deletion.
#### Example Response:
```json 
  {
  "message": "Payment record deleted successfully"
}
```
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sado8sh/O-Housing_Stagiaires.git
