import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function CardCat(props) {
    return (
        <div className="comentario">
            <img className="comentario__perfil" src={props.img} alt="foto de um animalzinho fofo" />
            <div>
                <h2 className="comentario__nome">{props.nome}</h2>
                <h3 className="comentario__subtitulo">{props.subtitulo}</h3>
                <hr className="comentario__hr" />
                <p>{props.comentario}</p>
            </div>
        </div>
    )
}

function ObjCat() {
    return (
        <div>
            < CardCat
                img="https://i1.wp.com/pandabege.com.br/wp-content/uploads/2018/10/panda-3503779_960_720.jpg?resize=600%2C400&ssl=1"
                nome="Mellina"
                subtitulo="A profª iti malia"
                comentario="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente assumenda minus error, expedita ea sunt amet sequi sit voluptatum natus repudiandae vel debitis nemo architecto! Voluptates quisquam quae veniam." />

                < CardCat
                img="https://img.buzzfeed.com/buzzfeed-static/static/2015-09/23/18/enhanced/webdr08/original-23765-1443047842-4.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*"
                nome="Beatriz"
                subtitulo="A profª que é super didática"
                comentario="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente assumenda minus error, expedita ea sunt amet sequi sit voluptatum natus repudiandae vel debitis nemo architecto! Voluptates quisquam quae veniam." />

<nav><small>feito com React</small></nav>
        </div> 
    )

}

// classes

// class Chocolate extends React.Component {
//     render(
//         return (
//             <h1>aaa</h1>
//         )
//     )
// }

ReactDOM.render(<ObjCat />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
