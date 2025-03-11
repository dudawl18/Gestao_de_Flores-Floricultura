import './CardMaterial.css'

function CardMaterial(props) {
  const {nome, quantidade, unidade} = props.material

  return (
    <div className="card-content">
      <h3>Nome: {nome}</h3>
      <h3>Quantidade: {quantidade}</h3>
      <h3>Unidade: {unidade}</h3>
    </div>
  )
}

export default CardMaterial
