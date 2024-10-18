import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/cotegoriesSlice/categoriesSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if(!records.length){
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

  const categoriesList = records.length > 0 ? records.map((record)=>(
    <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
    <Category {...record} />
  </Col>
  )) : "there are no categories"
  return (
    <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  );
};

export default Categories;
