# Green Field Admin

Admin page layout using React-Bootstrap (https://react-bootstrap.github.io/).

Pages are written as for an actual project using state and in some cases API calls to update state. The idea here is that the structure is usable for projects, unlike other HTML templates that are static pages, even the React versions of most admin templates only wrap the static html instead of being converted to a well structured React layout.

## 5 Example Pages

- Contact Page
- Contact Details
- Blog (using api data from jasonplaceholder)
- Live Weather (live api data from OpenWeatherMap)
- Invoice

### Blog 

Blog page uses https://jsonplaceholder.typicode.com for Users, Posts and Comments. State is managed within the page and provides an interactive experience by choosing a person, choosing a post and viewing the posts and comments.

Demonstrates the use of useEffect to manage data. The blog data is not available outside of the page.

### Weather

Change the API for the weather as the API being used is a free key and has limited calls allowed.

This page demonstrates the use of Context and how Data can be managed separatly from the component using the data. In most cases this is a better data management pattern when dealing with data that may cross multiple different pages of the application.

## Custom Components

Uses https://www.npmjs.com/package/react-bootstrap and https://www.npmjs.com/package/react-bootstrap-text 

Sample components shown are
- Buttons
- Typography (using react-bootstrap-text)
- Alerts
- Navbar
- Table

## Customizing the Colors

Green Field Admin uses bootstrap and the bootstrap scss design system. To change a color modify the 
\styles\greenfield.scss 
file with the new colors.

Adjustments to any Bootstrap scss variables can be applied to adjust margins etc.

## New Pages

Please log an enhancement issue if you would like an example of a page created
