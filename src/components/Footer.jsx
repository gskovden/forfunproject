import "../utils/i18next";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <p className="footer__title">{t("footer.copyright")}</p>
    </div>
  )
}

export default Footer;