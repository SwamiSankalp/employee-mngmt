# Employee Management!

A basic Node.js + Express.js APIs with MongoDB, as the DB (using Mongoose ODM), for a simple Employee Management application.

**To use the application, follow the steps below:**

_Step 1_: Clone the repository

```
$ git clone https://github.com/SwamiSankalp/employee-mngmt.git
```

_Step 2_: Using the following command, install all the required dependencies:

```
$ npm install
```

_Step 3_: Run `npm start` to spin up the server using *nodemon*.

_Step 4_: Use any API client to test this backend APIs, or integrate it with your frontend. The table below contains a list of API endpoints.

### API Endpoints

| S.No | Path        | METHOD | Body                                                                                                                                                         | Goal                                   |
| ---- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| 1    | `/api/users`         | `POST`  | { "username": _String_, "password": _String_ }                                                                                                                                                            | Registers a User |
| 2    | `/api/login` | `POST` | { "username": _String_, "password": _String_ } | Login as a User             |
| 3    | `/api/employee` | `GET` | - | Fetch all the created Employees             |
| 4    | `/api/employee` | `POST` | { "name": _String_, "department": _String_, "salary": _Number_ }, `AuthenticationHeaders`: `Bearer token` | Creates a Employee under a signed in User             |
| 5    | `/api/employee/:employeeId` | `PUT` | { "name": _String_, "department": _String_, "salary": _Number_ } | Updates the employee based on passed employeeId             |
| 6    | `/api/employee/:employeeId` | `DELETE` | - | Deletes the employee based on passed employeeId & the userId            |

#### Body Data for the `/api/users` path POST request

| S.No | Key             | Value type | Required |
| ---- | --------------- | ---------- | -------- |
| 1    | `username`       | `String`  | ✅       |
| 2    | `password`         | `String`  | ✅     |

#### Body Data for the `/api/employee` path POST request

| S.No | Key             | Value type | Required |
| ---- | --------------- | ---------- | -------- |
| 1    | `name`       | `String`  | ✅       |
| 2    | `department`         | `String`  | ✅       |
| 3    | `salary`          | `Number`  | ✅       |

#### Body Data for the `/api/employee/:employeeId` path PUT request

| S.No | Key             | Value type | Required |
| ---- | --------------- | ---------- | -------- |
| 1    | `name`       | `String`  | [ ]      |
| 2    | `department`         | `String`  | [ ]       |
| 3    | `salary`          | `Number`  | [ ]       |
