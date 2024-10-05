import styles from "./styles.module.css";
const { footerContainer } = styles;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={footerContainer}>© {currentYear} Our BelleFilleStore. All rights reserved.</div>
  );
};

export default Footer;