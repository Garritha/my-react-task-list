import { extendTheme } from '@chakra-ui/react';

const lightTheme = extendTheme({
  config: { 
    initialColorMode: "light", // Establece el modo claro como predeterminado   
    },
    colors: {
    primary: {
      100: '#E5E7EB', // Color principal claro
      500: '#6B7280', // Color principal normal
      900: '#1F2937', // Color principal oscuro
    },
    // Agrega otros colores específicos del tema claro si es necesario
  },
  fonts: {
    body: 'Roboto, sans-serif', // Fuente para el cuerpo del texto
    heading: 'Poppins, sans-serif', // Fuente para encabezados
    // Agrega otras fuentes específicas del tema claro si es necesario
  },
  // Otros ajustes de estilo específicos del tema claro
});

const darkTheme = extendTheme({
    config: {
      initialColorMode: "dark", // Establece el modo oscuro
    },
    colors: {
      primary: {
        100: '#E5E7EB', // Color principal claro
        500: '#6B7280', // Color principal normal
        900: '#1F2937', // Color principal oscuro
      },
      // Agrega otros colores específicos del tema oscuro si es necesario
    },
    fonts: {
      body: 'Roboto, sans-serif', // Fuente para el cuerpo del texto
      heading: 'Poppins, sans-serif', // Fuente para encabezados
      // Agrega otras fuentes específicas del tema oscuro si es necesario
    },
    // Otros ajustes de estilo específicos del tema oscuro
  });

export { lightTheme, darkTheme };
