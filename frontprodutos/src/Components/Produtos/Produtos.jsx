import axios from "axios";
import { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7193/Produtos")
      .then((response) => {
        console.log(response.data);
        setProdutos(response.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  return (
    <div>
      {produtos.map((produto, key) => {
        return (
          <div className="card" key={key}>
            <div className="card-body">
              <h1>{produto.nome}</h1>
              <h1>{produto.preco}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Produtos;
