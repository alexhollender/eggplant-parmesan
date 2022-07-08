function IngredientItemTitle({ ingredient, amount }) {
  return (
    <>
      <b>{ingredient}</b> {amount ? `(`+amount+`)` : null}
    </>
  );
}

export default IngredientItemTitle;
