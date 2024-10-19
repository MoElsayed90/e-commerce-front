import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix  , ProductscleanUp} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
const Products = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const {records,loading,error} = useAppSelector((state)=> state.products)
  useEffect(()=>{
    let prefix:string 
    if (params.prefix && typeof params.prefix === "string") {
      prefix = params.prefix
      dispatch(actGetProductsByCatPrefix(prefix))
    }
    return () => {
      dispatch(ProductscleanUp())
    }
  },[dispatch, params.prefix])
  return (
    <Container>
      <Loading status={loading} error={error}>
      <GridList
          records={records} //data loaping
          renderItem={(record) =>  <Product {...record} />} // rendering callback func 
        />
      </Loading>
    </Container>
  );
};

export default Products;