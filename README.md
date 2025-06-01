# Meet the Met

**Meet the Met** is a responsive web application that connects to the [Metropolitan Museum of Art’s public API](https://metmuseum.github.io/) to explore objects collections. 

## Features

- Paginated display of artworks  
- Detailed view for individual art objects  
- Filter objects by department  
- Search for objects by ID or title  
- Mobile-responsive interface  
- Modern and accessible UI design using Tailwind and Shadcn

## Tech Stack

- React.js  
- React Query  
- TypeScript  
- Tailwind CSS  
- Shadcn/UI  
- Domain-Driven Design (DDD)  
- Vertical Slice Architecture

## Project Structure

The codebase follows a vertical slice architecture under a `features/` directory promoting separation of concerns, scalability, and maintainability.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/meet-the-met.git
cd meet-the-met
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## API Reference

This project consumes the [Metropolitan Museum of Art Collection API](https://metmuseum.github.io/). No API key is required. Endpoints used include:

- `/departments` - List of departments  
- `/search` - Search for object IDs by term  
- `/objects/{objectID}` - Retrieve detailed object data


