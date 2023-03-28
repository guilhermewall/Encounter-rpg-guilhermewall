import { ReactNode } from "react";
import { UserProvider } from "../UserContext";
import { DashboardProvider } from "../DashboardContext";

interface iProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => {
  return (
    <>
      <UserProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </UserProvider>
    </>
  );
};
