import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector((state) => state.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
