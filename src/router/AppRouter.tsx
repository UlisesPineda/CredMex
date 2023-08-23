import { Route, Routes } from "react-router-dom";
import { CreditoPymeApp } from "../CreditoPymeApp";
import { CookiesPage, PrivacyPage, NotFound } from "../ui";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <CreditoPymeApp /> } />
        <Route path="/politica-de-privacidad" element={ <PrivacyPage /> } />
        <Route path="/politica-de-cookies" element={ <CookiesPage /> } />
        <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
};
