import { useContext } from "react";

import CollectionContext from "../../context/collectionContext";
import Loader from "../../components/Loader/Loader";
import SlideItem from "../../components/Slide/SlideItem";

const SlideShowPage = () => {
const {collection} = useContext(CollectionContext)

const handleSlideItem = (idx = 0) => {

if(collection) return collection[idx]

return <Loader/>
}


    return ( <section>
        <SlideItem slide={handleSlideItem()}/>
    </section> );
}
 
export default SlideShowPage;