# O-Housing stagiaires part

## Stagiaires API Documentation

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

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sado8sh/O-Housing_Stagiaires.git
