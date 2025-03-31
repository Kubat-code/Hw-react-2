import styled from "styled-components";

export const ProductsList = ({
  product,
  deleteHandel,
  increment,
  decrement,
  disabledDecrementButton,
  totalPrice,
}) => {
  return (
    <Table>
      <TableContent>
        <thead>
          <tr>
            <th>#</th>
            <th>Продукты</th>
            <th>Название продуктов</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Удаление</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.price}$</td>
              <td style={{ width: "298px" }}>
                <IncDec>
                  <span>{item.amount}</span>
                  <button className="incBtn" onClick={() => increment(item.id)}>
                    +
                  </button>
                  <button
                    className="decremetButton"
                    onClick={() => decrement(item.id)}
                    disabled={disabledDecrementButton(item.id)}
                  >
                    -
                  </button>
                </IncDec>
              </td>
              <td style={{ width: "277px" }}>
                <DeleteButton onClick={() => deleteHandel(item.id)}>
                  Удалить
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContent>
      <h2>Итог цена: {totalPrice}</h2>
    </Table>
  );
};

const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  font-family: sans-serif;
`;

const TableContent = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  thead {
    background-color: #f5f5f5;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }
`;

const IncDec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  button {
    width: 30px;
    height: 30px;
    background-color: #20dd1d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #109d2c;
    }
  }
  .decremetButton {
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }

  span {
    width: 20px;
    text-align: center;
    font-weight: bold;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;
