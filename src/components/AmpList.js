
import { useProductsContext } from "../context/product_context"

const AmpList = () => {
  const {amp_products: amp} = useProductsContext()
  return (
    <div>
      <p>Amp List</p>
      {amp.map((item) => {
        console.log(item.name)
        return (
          <p key={item.id}>{item.name}</p>
        )
      })}
    </div>
  )
}

export default AmpList