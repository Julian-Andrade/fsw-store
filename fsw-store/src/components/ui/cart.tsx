import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import BadgeTitle from "./badge-title";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import productTotalPrice from "@/utils/product";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div>
      <BadgeTitle iconSvg={<ShoppingCartIcon size={16} />} title="Carrinho" />

      {/* Render Products */}
      <div className="flex flex-col">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={productTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="mt-10 p-5 text-center font-semibold">
            Você ainda não possui nenhum item adicionado ao carrinho. Vamos as
            compras!
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subTotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>Grátis</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
