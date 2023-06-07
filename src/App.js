import { Fragment } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';



// import pages
import LandingPage from './pages/LandingPage'



let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00203F",
    },
    secondary: {
      main: "#47D68F",
    },
    text: {
      primary: "#00203F",
    },
    info: {
      main: "#2E5994",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join("", ""),
    body1: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: -0.3,
    },
    body2: {
      fontFamily: "Inter",
    },
    h6: {
      letterSpacing: -0.3,
      lineHeight: 1.4,
    },
    caption: {
      fontFamily: "Inter",
    },
  },
});

// const styles = {
//   container: {
//     width: { xs: "90%", sm: "80%" },
//     maxWidth: "1300px",
//     margin: "2.5rem auto",
//   },
// };

theme = responsiveFontSizes(theme);


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<LandingPage />}
        path='/'
      />
    )
  )

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Fragment>
          {/* <Box sx={styles.container}> */}
          <RouterProvider router={router} />
          {/* </Box> */}
        </Fragment>

      </ThemeProvider>
    </main>
  );
}

export default App;
