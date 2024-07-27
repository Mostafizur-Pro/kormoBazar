# Kormo Bazaar

Welcome to Kormo Bazaar! This is a job portal application where users can view, edit, and delete job posts.

## Live Demo

You can view the live application here: [Kormo Bazaar Live](https://kormo-bazaar.vercel.app/)

## Server

The server for this application can be found at: [Kormo Bazaar Server](https://kormo-bazar-server1.vercel.app/)

## Features

- **View Job Posts**: Browse through a list of available job posts.
- **Filter Jobs**: Filter job posts by category.
- **Edit Jobs**: Edit job details if you are the owner of the job post.
- **Delete Jobs**: Delete job posts if you are the owner of the job post.

## Setup Instructions

### Frontend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Mostafizur-Pro/kormoBazar.git
    ```

2. **Navigate to the frontend directory:**

    ```bash
    cd kormoBazar
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run start
    ```

### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Mostafizur-Pro/kormoBazarServer1.git
    ```

2. **Navigate to the backend directory:**

    ```bash
    cd kormoBazarServer1
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    npm run dev
    ```

## API Endpoints

- **GET /api/v1/jobs**: Retrieve all job posts.
- **GET /api/v1/jobs?category={category}**: Retrieve job posts filtered by category.
- **PUT /api/v1/jobs/update/:id**: Update a specific job post.
- **DELETE /api/v1/jobs/delete/:id**: Delete a specific job post.

## Contributing

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Commit your changes**.
4. **Push your branch** to GitHub.
5. **Open a pull request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out at [your-email@example.com](mailto:your-email@example.com).

