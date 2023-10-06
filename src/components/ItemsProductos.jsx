export function ItemsProductos({item}) {
  return (
    <article class="items__card">
      <img
        src={item.img}
        alt="items image"
        class="items__img"
      />

      <h3 class="items__name">{item.title}</h3>
      <span class="items__price">{item.precio}</span>

      <button class="items__button">
        <i class="ri-heart-3-line"></i>
      </button>
    </article>
  );
}
