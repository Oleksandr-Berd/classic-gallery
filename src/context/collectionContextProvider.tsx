import React, { Component, ReactNode } from "react";
import CollectionContext, { ICollectionContext } from "./collectionContext";
import { ImageType } from "../utils/types";

export interface IState {
  collection: ImageType[] | null;
  getCollection: (images: ImageType[]) => void;
}

interface IProps {
  children?: ReactNode;
}

export default class ColelctionContextProvider extends Component<IProps, IState> {
  state: IState = {
    collection: localStorage.getItem("collection") ? JSON.parse(localStorage.getItem("collection")!) : null,
    getCollection: (images: ImageType[]) => {
      this.setState({ collection: images });
      localStorage.setItem("collection", JSON.stringify(images));
    },
  };

  render() {
    const collectionContextValue: ICollectionContext = {
      collection: this.state.collection,
      getCollection: this.state.getCollection,
    };

    return (
      <CollectionContext.Provider value={collectionContextValue}>
        {this.props.children}
      </CollectionContext.Provider>
    );
  }
}
