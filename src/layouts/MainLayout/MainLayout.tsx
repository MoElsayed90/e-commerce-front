import { Container } from "react-bootstrap";
import styles from "./styles.module.css"
import {Footer, MainHeader} from "@components/common";
import { Outlet } from "react-router-dom";
const {wrapper , container} =styles
const MainLayout = () => {
  return (
    <Container className={container}>
    <MainHeader/>
      <div className={wrapper}>
      <Outlet/>
      </div>
      <Footer/>
    </Container>
  )

}

export default MainLayout;