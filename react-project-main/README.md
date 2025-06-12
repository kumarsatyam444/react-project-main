# PopX Account Creation - React Project

A React-based user registration application that allows users to create PopX accounts with a clean, modern interface.

## Features

- **User Registration Form** with the following fields:
  - Full Name (required)
  - Phone Number (required)
  - Email Address (required)
  - Password (required)
  - Company Name (optional)
  - Agency Status (Yes/No radio buttons)

- **Form Validation** with required field indicators
- **React Router Integration** for navigation between pages
- **Responsive Design** with CSS modules
- **State Management** using React hooks

## Project Structure

```
react-project-main/
├── src/
│   ├── Signup.jsx          # Main signup component
│   ├── signup.module.css   # Styles for signup component
│   ├── index.js           # Application entry point
│   ├── index.module.css   # Global styles
│   └── App.js             # Main App component
├── public/
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-project-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

## Component Details

### SignUp Component (`src/Signup.jsx`)

The main signup component includes:
- Form state management using React hooks
- Controlled input components
- Form submission handling
- Navigation to profile page with user data
- CSS modules for styling

**State Variables:**
- `name` - User's full name
- `phone` - User's phone number
- `email` - User's email address
- `password` - User's password
- `company` - User's company name

## Routing

The application uses React Router for navigation:
- Form submission redirects to `/profile` route
- User data (name and email) is passed via route state

## Styling

- Uses CSS Modules for component-scoped styling
- Responsive design principles
- Clean, modern UI with form validation indicators

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **Create React App** - Project bootstrapping

## Future Enhancements

- [ ] Add form validation with error messages
- [ ] Implement backend API integration
- [ ] Add password strength indicator
- [ ] Include email verification
- [ ] Add loading states during form submission
- [ ] Implement proper error handling

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Made by Kumar Satyam(LinkedIn: https://www.linkedin.com/in/kumar--satyam/)