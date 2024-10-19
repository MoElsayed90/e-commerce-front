import { Col, Row } from "react-bootstrap";
type TGridList<T> = {
records:T[];
renderItem: (record:T)=> React.ReactNode
}
type HasId = {id?:number}
const GridList = <T extends HasId>({records,renderItem}:TGridList<T>) => {
  const categoriesList =
  records.length > 0
    ? records.map((record) => (
        <Col
          key={record.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    : "there are no categories";
  return (
    <Row>{categoriesList}</Row>
  )

}

export default GridList;