# GatorSplit

## Project Description  
**GatorSplit** is a simple and easy-to-use app that helps anyone manage shared expenses effortlessly. Whether it’s splitting rent with roommates, dividing up a group dinner bill, or keeping track of who paid what on a trip, GatorSplit makes it fair and hassle-free.  

## Features:

👥 Create and join groups

💸 Add and split expenses among group members

📊 View individual balances

✅ Settle up with participants

🔐 Secure user authentication

🖥️ Clean and responsive interface

## System Requirements

- Go (v1.20+)
- Node.js (v18+)
- npm (v9+)
- PostgreSQL (v14+)
- Git

## Setup Instructions

1. Clone the Repository

` git clone https://github.com/sriraghu42/gatorsplit.git `
`cd gatorsplit`
`git checkout main`

2. PostgreSQL Setup

- Create a new PostgreSQL database (e.g., gatorsplit_dev)
- Make sure the PostgreSQL server is running
- Update your database credentials in backend/database/database.go:

`dsn := "host=localhost user='postgres' password='your_password' dbname=gatorsplit_dev port=5432 sslmode=disable TimeZone=UTC"`

Replace:

user with your PostgreSQL username

password with your password

dbname with your created database name

3. Run the Backend (Go):

`cd backend`

`go run main.go`

Backend will start at: http://localhost:8080

4. Run the Frontend (React)

`cd frontend`

`npm install`

`npm start`

The frontend will start at: http://localhost:3000

## Running Tests:

Go Backend Unit Tests:

`cd backend`

`go test ./...`

React Frontend Tests:

`cd frontend`

`npm test`

Sample HomePage:
<img width="1452" alt="image" src="https://github.com/user-attachments/assets/daf2173b-c1cb-4ddf-bf5b-74c1d619925b" />

Sample User Dashboard:
<img width="1456" alt="image" src="https://github.com/user-attachments/assets/58ee4c69-675a-4fec-9d0c-0ded17362d81" />

Sample Groups and Expenses Page:
<img width="1496" alt="image" src="https://github.com/user-attachments/assets/896a8405-a343-438f-a302-64c5a0e28e77" />

Working demo:
https://www.youtube.com/watch?v=XWwqWO_QxZE

## Project Members  

1. Varun Rudrangi - Frontend 
2. Chandana Nukala - Frontend 
3. Sri Raghu Katragadda - Backend  
4. Yeswanth Vootla - Backend
