# Nails N' Things - React Website

A modern React website featuring a navbar, image carousels, and order forms with Venmo integration.

## Features

- **Responsive Navbar**: Logo on the left, navigation links right-justified
- **Image Carousel**: Interactive carousel component with navigation controls
- **Order Forms**: Complete shipping information forms with validation
- **Venmo Integration**: Checkbox confirmation for Venmo payment to @jsnapoli1
- **Form Validation**: Submit button only enabled when all fields are completed
- **Responsive Design**: Mobile-friendly layout

## Pages

1. **Home**: Welcome page with nail care information
2. **Product 1**: Product showcase with order form
3. **Product 2**: Product showcase with order form
4. **Product 3**: Product showcase with order form

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Navbar.css         # Navbar styles
│   ├── ImageCarousel.js   # Image carousel component
│   ├── ImageCarousel.css  # Carousel styles
│   ├── OrderForm.js       # Order form component
│   └── OrderForm.css      # Form styles
├── pages/
│   ├── Home.js            # Home page
│   ├── Product1.js        # Product 1 page
│   ├── Product2.js        # Product 2 page
│   └── Product3.js        # Product 3 page
├── App.js                 # Main app component
├── App.css                # App styles
├── index.js               # Entry point
└── index.css              # Global styles
```

## Form Requirements

The order form includes the following required fields:
- Full Name
- Email Address
- Shipping Address
- City
- State
- ZIP Code
- Phone Number
- Venmo confirmation checkbox

The submit button is only enabled when all fields are completed and the Venmo checkbox is checked.

## Technologies Used

- React 18
- React Router DOM
- CSS3 with Flexbox and Grid
- Responsive design principles 