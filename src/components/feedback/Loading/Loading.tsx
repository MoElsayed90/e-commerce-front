import { TLoading } from "@customTypes/shared";

type LoadingProp =  {
  status : TLoading
error : null | string
children : React.ReactNode;
}
const Loading = ({status,error,children: children}:LoadingProp) => {
 if (status === "pending"){
  return <div>Loading...</div>;
 }
 if (status === "failed"){
  return <div>{error}</div>;
 }
 
  return  <>{children}</>

}

export default Loading;