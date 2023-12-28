import { createContext, Context } from "react";
import { ImageType } from "../utils/types";

export interface ICollectionContext {
  collection: ImageType[] | null;
  getCollection: (images: ImageType[]) => void;
}

const CollectionContext: Context<ICollectionContext> = createContext<ICollectionContext>({
  collection: null,
  getCollection: (images: ImageType[]) => {},
});

export default CollectionContext;
