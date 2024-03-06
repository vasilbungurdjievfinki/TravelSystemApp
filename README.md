# Travel System Web Application
The Travel System App is a simple solution created for travel (bus) companies 
aiming to streamline their operational processes and enhance the overall travel experience.
The platform allows users to effortlessly browse, select, and book bus tickets for their journeys. 
With an intuitive interface and robust functionality, travelers can explore available buses, view available seats, 
and make secure reservations with ease. Alongside facilitating  booking experiences for travelers, 
the application allows companies to manage bus lines efficiently and gain insights into reservations.
## Features
### 1.	Home Page:
-	Intuitive Home Page with user-friendly interface.
-	Header with links to the Bus List and Reservations pages.
  
![proekt1](https://github.com/vasilbungurdjievfinki/TravelSystemApp/assets/140083351/07306a2f-2404-46f6-8e85-08f4796720f4)
### 2.	Bus List Page:
-	View available buses with details such as departure time, destination, and remaining seats.
-	Filter buses based on date and price.

![Proekt2](https://github.com/vasilbungurdjievfinki/TravelSystemApp/assets/140083351/bbd6f588-7a85-4148-98e3-932e619c57fa)
### 3.	Making Reservations:
- Users can select available buses and make reservations for their preferred travel dates.
- Seat availability updates with every reservation to prevent overbooking.
- If all seats are booked the bus dissapears from the list.

![Proekt3](https://github.com/vasilbungurdjievfinki/TravelSystemApp/assets/140083351/821578ac-9fd4-4f21-bd0c-d78afe5c6478)
 
### 4.	Reservation Page:
- Passengers reserve their seats and get redirected to the reservations page.
-	The number of available seats decreases after the reservation.
- The amount for payment is automatically calculated depending on how many seats were reserved.

![Proekt5](https://github.com/vasilbungurdjievfinki/TravelSystemApp/assets/140083351/343a4d0e-b96b-4e30-a8fa-45dc4f2b8404)


### 5.	Add/Edit Bus Form
- Add new or edit existing bus lines.
- It is not allowed to enter blank fields or enter a date before the current date.

![Proekt4](https://github.com/vasilbungurdjievfinki/TravelSystemApp/assets/140083351/fde69fe8-1804-4d34-bd12-fc7f98f4933d)

### 6.	Validation
-	Validation is used so that no fields entered can be blank, and the date of travel cannot be earlier than the current date.
- The number of seats reserved can't be higher than the number of available seats.
- If all seats are booked the bus dissapears from the list.

![Proekt6](https://github.com/vasilbungurdjievfinki/TravelSystemApp/assets/140083351/858e1460-54ca-49dd-971d-9f45968912a4)

## Technologies used


- #### Front-end
  - React.js
  - React Router for client-side Routing
  - Axios for handling HTTP requests
- #### Back-end
  - Spring Boot
  - Spring Data JPA for Database operations
  - H2 Database(for development) MySQL(for production)

