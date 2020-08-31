import React, { useState, FC } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import { Fab, Paper, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { addProduct } from "../../store/products/actions";
import "./styles.css";
import { useDispatch } from "react-redux";

const Accordion = withStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    backgroundColor: 'rgba(255,255,255,.5)',
    borderWidth: '0',
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: '15px'
  },
  expanded: {}
})(MuiAccordion);

interface Props {
  product: {
    id: number;
    name: string;
    image_url: string;
    price: number;
    quantity: number;
  }
}

const ProductItem: FC<Props> = ({ product }) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");const dispatch = useDispatch();

  function minus() {
    product.quantity === 0
    ?  product.quantity = 0
    :  product.quantity -= 1
  }

  function plus() {
    product.quantity += 1
  }

  const handleAdd = () => {
    if(product.quantity === 0) {
      product.quantity -= 1
      dispatch(addProduct(product.id, 1))
    } else {
      dispatch(addProduct(product.id, product.quantity))
    }
  }

  return (
    <div 
      className="product-item" 
      onMouseOver={() => setExpanded(false)} 
      onMouseOut={() => setExpanded("panel1")}>
      <div className="product-item-image">
        <img
          src={product.image_url}
          alt="Product"
        />
      </div>
      <Accordion
        square
        className="product-item-info"
        expanded={expanded === false}
      >
        <header>
          <h3>{product.name}</h3>
          <strong>R$ ${product.price.toFixed(2)}</strong>
          <span>Até 12x de R$ ${(product.price / 2).toFixed(2)}</span>
          <span>
            R$ ${(product.price * 0.9).toFixed(2)} à vista (10% de desconto)
          </span>
        </header>
        <footer>
          <div className="quantity-control">
            <Fab 
              onClick={minus} 
              size="small" 
              className="quantity-control-button">
              <RemoveIcon />
            </Fab>
            <Paper className="quantity-control-box">
              {product.quantity}
            </Paper>
            <Fab 
              onClick={plus} 
              size="small" 
              className="quantity-control-button">
              <AddIcon />
            </Fab>
          </div>
          <Button
            className="product-add-button"
            color="primary"
            variant="contained"
            onClick={handleAdd}>
            ADICIONAR
          </Button>
        </footer>
      </Accordion>
    </div>
  );
}

export default ProductItem;