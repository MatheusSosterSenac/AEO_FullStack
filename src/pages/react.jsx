import React from "react";
import { Card } from "react-bootstrap";
import Form from "../layout/Form";  // Importando o componente Form
import "../styles/principios.css";

const PrincipiosCard = () => {
    const principios = [
        {
            titulo: "Propriedade Privada",
            descricao: "A propriedade privada é um dos pilares do livre mercado, garantindo que indivíduos possam controlar e beneficiar-se de seus próprios recursos e bens.",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJis2Hx1-jZycF5rK8NJLWevQfKW70fQkOA&s",
        },
        {
            titulo: "Liberdade de Troca",
            descricao: "A liberdade de troca permite que indivíduos negociem livremente bens e serviços, levando a uma alocação eficiente dos recursos.",
            url: "https://media.licdn.com/dms/image/C4D12AQHkMGrzcK8ukQ/article-cover_image-shrink_600_2000/0/1645194839160?e=2147483647&v=beta&t=_6Gwu_w-cOpLQ7nZ0t1MjK3HSYbql7VVrmTXX7x8BNs",
        },
        {
            titulo: "Competição",
            descricao: "A competição entre empresas promove a inovação e a eficiência, resultando em melhores produtos e serviços para os consumidores.",
            url: "https://www.infoescola.com/wp-content/uploads/2008/06/competi%C3%A7%C3%A3o_27598678.jpg",
        },
        {
            titulo: "Preços Determinados pelo Mercado",
            descricao: "Os preços são determinados pela oferta e demanda, refletindo o valor real dos bens e serviços sem intervenção externa.",
            url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwCncxeuVLGd7dlE0a5xKhIwYTjxtNae2S9MUeU4UuZDJW1MyOgOG7mjgfAhhLxHYQ7mNL_kQ_7FpOxyIVRSYAfx0yH66ZhxoytZbZXpDidLNyBdXaO2nTDbKbW4cftMkGaAWGvOql_iI/s1600/dema.jpg",
        },
        {
            titulo: "Empreendedorismo",
            descricao: "O empreendedorismo incentiva a criação de novos negócios e soluções, impulsionando o crescimento econômico e a inovação.",
            url: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_obstaculos-sucesso3.jpg?quality=70&strip=info&w=960",
        },
        {
            titulo: "Responsabilidade Individual",
            descricao: "No livre mercado, os indivíduos são responsáveis por suas próprias ações econômicas, incentivando a tomada de decisões conscientes.",
            url: "https://media.licdn.com/dms/image/D5612AQFlpCkJR_OkiQ/article-cover_image-shrink_600_2000/0/1677869887465?e=2147483647&v=beta&t=yDOh1e8ziykkCu-LgmujEdVyuPj3R0StUqG0ydEn3ps",
        }
    ];

    return (
        <div className="principios">
            {principios.map((principio, index) => (
                <Card key={index} className="principio">
                    <Card.Img variant="top" src={principio.url} alt={principio.titulo} />
                    <Card.Body>
                        <Card.Title>{principio.titulo}</Card.Title>
                        <Card.Text>{principio.descricao}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
            <Form />
        </div>
    );
};

export default PrincipiosCard;
