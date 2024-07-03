import React from 'react';

export const ThemeContext = React.createContext({
    theme: 'light',
    toggle: ()=>{},
});

export function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)
  const [isTheme, setIsTheme] = React.useState('light');
  
  
const toggleTheme = () =>{
     setIsTheme((prevTheme)=>{
         return prevTheme==='light'?'dark':'light';
     });
 };
 const ThemeCntx = {
     theme: isTheme,
    toggle: toggleTheme,
 };
 
 return (
     <ThemeContext.Provider value={ThemeCntx}>
        {children}
     </ThemeContext.Provider>
     );
}