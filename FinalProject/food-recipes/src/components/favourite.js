import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { RecipeCard } from "./RecipeCard";

export const Favouritelist = () => {
  const { favouritelist } = useContext(GlobalContext);

  return (
    <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h3 className="text-capitalize">Favourite List</h3>
                    <span className="count-pill">
                        {favouritelist.length} {favouritelist.length === 1 ? "Recipe" : "Recipes"}
                    </span>
                </div>

        {favouritelist.length > 0 ? (
          <div className="container">
            {favouritelist.map((Recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} type="favouritelist" />
            ))}
          </div>
        ) : (
          <h3>No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
