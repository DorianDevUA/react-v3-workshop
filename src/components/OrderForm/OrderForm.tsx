import { useId } from 'react';

interface OrderData {
  username: string;
  email: string;
  delivery: string;
  deliveryTime: string;
  restrictions: string[];
}

export default function OrderForm() {
  const fieldId = useId();

  const handleOrder = (formData: FormData) => {
    const orderData: OrderData = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      delivery: formData.get('delivery') as string,
      deliveryTime: formData.get('deliveryTime') as string,
      restrictions: formData.getAll('restrictions') as string[],
    };

    console.log('Order Data:', orderData);
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Client info:</legend>
        <label htmlFor={`${fieldId}-username`}>Name</label>
        <input type="text" name="username" id={`${fieldId}-username`} />

        <label htmlFor={`${fieldId}-email`}>Email</label>
        <input type="email" name="email" id={`${fieldId}-email`} />
      </fieldset>
      <fieldset>
        <legend>Delivery method:</legend>

        <label>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone
        </label>
      </fieldset>

      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <label htmlFor={`${fieldId}-deliveryTime`}>Preferred delivery time</label>
      <select
        name="deliveryTime"
        id={`${fieldId}-deliveryTime`}
        defaultValue=""
      >
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00–12:00)</option>
        <option value="afternoon">Afternoon (12:00–16:00)</option>
        <option value="evening">Evening (16:00–20:00)</option>
      </select>

      <button type="submit">Place order</button>
    </form>
  );
}

// interface orderFormProps {
//   onSubmit: (value: string) => void;
// }

// const OrderForm = (props: orderFormProps) => {
//   const { onSubmit } = props;

//   const handleSubmit = (formData: FormData) => {
//     const name = formData.get('username') as string;

//     onSubmit(name);
//   };

//   return (
//     <>
//       <form action={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default OrderForm;
