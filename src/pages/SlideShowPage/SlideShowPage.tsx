import { useContext } from "react";
import CollectionContext from "../../context/collectionContext";

const SlideShowPage = () => {
const {collection} = useContext(CollectionContext)


console.log(collection);


    return ( <section></section> );
}
 
export default SlideShowPage;