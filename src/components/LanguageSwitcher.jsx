import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div style={{
      position: "fixed",
      top: 12,
      right: 20,
      display: "flex",
      gap: "8px",
      zIndex: 9999
    }}>
      <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}