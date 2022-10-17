
import { useProductsContext } from "../context/product_context"

const PedalList = () => {
  const {pedal_products: pedal} = useProductsContext()
  return (
    <div>
      <p>Guitar List</p>
      {pedal.map((item) => {
        return (
          <p key={item.id}>{item.name}</p>
        )
      })}
    </div>
  )
}

export default PedalList