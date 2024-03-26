import {
  ReactNode,
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";

interface IThemeContext {
  isWhite: boolean;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Context error");
  }

  return context;
};

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [isWhite, setIsWhite] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsWhite(!isWhite);
  }, [isWhite]);

  const contextValue = useMemo(
    () => ({ isWhite, toggleTheme }),
    [isWhite, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
