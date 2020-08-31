import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { TextField, FormGroup, Select, InputLabel, FormControl } from "@material-ui/core";
import "./styles.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { finishPurchase } from "../../store/purchase/actions";

interface Props {
  total: number;
}

const ClientForm: FC<Props> = ({ total }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(finishPurchase({ name, email, sex }));
    setName("");
    setEmail("");
    setSex("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="client-form">
        <FormGroup className="client-form-input">
          <TextField 
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => 
            setName(event.target.value)}/>
        </FormGroup>

        <FormGroup className="client-form-input">
          <TextField 
          label="Email" 
          variant="outlined" 
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)}/>
        </FormGroup>

        <FormGroup className="client-form-select">
          <FormControl variant="outlined">
            <InputLabel htmlFor="select-label-input">Sexo</InputLabel>
            <Select
              native={true}
              label="Sexo"
              inputProps={{
                name: "sexo",
                id: "select-label-input"
              }}
              value={sex}
              onChange={(event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) =>
                setSex(event.target.value as string)}
            >
              <option aria-label="None" value="" />
              <option value="M">Homem</option>
              <option value="F">Mulher</option>
            </Select>
          </FormControl>
        </FormGroup>
      </div>
      <div className="purchase-container">
          <strong className="client-form-total">Total: R$ {total}</strong>
          <Link type="submit" to="/finish-purchase" className="client-form-button">
            FINALIZAR COMPRA
          </Link>
        </div>
    </form>
  );
}

export default ClientForm;
