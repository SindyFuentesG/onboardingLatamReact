import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  Container,
  CssBaseline,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { createProduct } from "../helpers/createProduct";

const useStyles = makeStyles((theme) => ({
  containerForm: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Create() {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    createProduct(data);
    router.push("/");
  };

  const valueHigherThanZero = (value) => {
    const errorMessage = value <= 0 ? "Value must be higher than zero" : "";
    return errorMessage;
  };
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.containerForm}>
        <Typography variant="h4">Create Product</Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            inputRef={register({
              required: "Please enter the name of the product",
              maxLength: {
                value: 100,
                message: "Name can't have more than 100 characters",
              },
            })}
            id="name"
            label="Name"
            name="name"
            error={!!errors.name}
            helperText={!!errors.name ? errors.name.message : ""}
          ></TextField>
          <TextField
            variant="outlined"
            margin="normal"
            type="number"
            fullWidth
            inputRef={register({
              required: "Please enter the price of the product",
              validate: (value) => valueHigherThanZero(value) || true,
            })}
            id="price"
            label="Price"
            name="price"
            error={!!errors.price}
            autoFocus
            helperText={!!errors.price ? errors.price.message : ""}
          ></TextField>
          <TextField
            variant="outlined"
            margin="normal"
            type="number"
            required
            fullWidth
            inputRef={register({
              required: "Please enter the quantity of the product",
              validate: (value) => valueHigherThanZero(value) || true,
            })}
            id="quantity"
            label="Quantity"
            name="quantity"
            error={!!errors.quantity}
            autoFocus
            helperText={!!errors.quantity ? errors.quantity.message : ""}
          ></TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            rowsMax="6"
            inputRef={register({
              required: "Please enter the description of the product",
            })}
            id="description"
            label="Description"
            name="description"
            error={!!errors.description}
            autoFocus
            helperText={!!errors.description ? errors.description.message : ""}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Create;
