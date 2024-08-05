# JustThread Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Features](#features)
   - [Register](#register)
   - [Login](#login)
   - [Post a Thread](#post-a-thread)
   - [Like a Thread](#like-a-thread)
6. [Testing](#testing)

## Introduction

JustThread is a web application for posting threads. UpVotes or DownVotes other thread

## Prerequisites

Ensure you have the following software installed on your computer:

- Node.js (20+)
- pnpm

## Installation

Follow these steps to install and run the project:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rianabd01/web-JustThread.git
   cd JustThread
   ```

2. **Install Dependencies:**
   ```bash
   pnpm install
   ```

## Running the Application

To run the application in development mode, use the following command:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

## Features

### Register

Users can register a new account by filling out the registration form, which includes:

- Name
- Email
- Password

### Login

Users can log in to the application by entering:

- Email
- Password

### Post a Thread

Logged-in users can create a new thread post by filling in:

- Title
- Content
- Category

### Like a Thread

Only Logged-in users can like threads posted by other users.

## Testing

### Unit Testing and End to end Test

To run unit tests and end to end testing, use the following command:

```bash
pnpm run ci:test
```
