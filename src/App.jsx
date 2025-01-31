import "./App.css";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])
  
  const lng = navigator.language;

  return (
    <>
      <p>{t('greeting.hello')}</p>
      <p>
        Browser language: {lng}
      </p>
      <Button className="bg-slate-600">Click me</Button>
    </>
  );
}

export default App;
