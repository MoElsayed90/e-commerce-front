import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/cotegoriesSlice/categoriesSlice";
import { Container} from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

 
  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records} //data loaping
          renderItem={(record) =>  <Category {...record} />} // rendering callback func 
        />
      </Loading>
    </Container>
  );
};

export default Categories;
