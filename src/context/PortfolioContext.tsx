import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import portfolioConfig from '@/config/portfolio';
import { PortfolioConfig } from '@/config/types';

// Create the context with a default value
const PortfolioContext = createContext<PortfolioConfig>(portfolioConfig);

// Custom hook to use the portfolio context
export function usePortfolio(): PortfolioConfig {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

interface PortfolioProviderProps {
  children: ReactNode;
  config?: PortfolioConfig;
}

// Memoize the provider value to prevent unnecessary re-renders
export function PortfolioProvider({ 
  children, 
  config = portfolioConfig 
}: PortfolioProviderProps) {
  const value = useMemo(() => ({
    ...config
  }), [config]);

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

// Export the context for advanced use cases
export { PortfolioContext };
