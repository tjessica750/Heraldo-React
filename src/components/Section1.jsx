import React, { Fragment } from 'react';
import './Section.css'
import  './heraldo-v3.css'


function Section1() {


    return (
        <Fragment>
              <div class="content">
            <div className="Section1">
            <div class="row">
            <div class="col-md-6 col-xs-12 text-left">
                    <h3>Barranquillero lidera estudio contra gen cancerígeno</h3>
                    <p>Edmond Feris Cure es un barranquillero de 32 años de origen libanés, que se encuentra trabajando
                        en Estados Unidos en una iniciativa que busca revolucionar los tratamientos contra el cáncer. Su
                        labor se concentra específicamente en una terapia que tiene como fin inhibir el gen que hace que
                        las células cancerígenas evadan al sistema inmune del ser humano.

                        Desde su infancia mostró interés por la ciencia siguiendo el ejemplo de su tío Edmond Yunis,
                        quien es profesor de Patología en Harvard Medical School. Era un niño curioso y a los nueve años
                        empezó a acompañar a Yunis a su laboratorio de inmunogenética para que este le explicara de
                        forma sencilla las complejidades de sus investigaciones en este campo. <a
                            href="https://www.elheraldo.co/ciencia/barranquillero-lidera-estudio-contra-gen-cancerigeno-797526"
                            target="_blank">Leer mas</a></p>
                </div>
             
                <div class="col-md-6 col-xs-12 text-right">

                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="item active">
                                <img src="https://www.elheraldo.co/sites/default/files/styles/width_860/public/articulo/2021/02/25/3c_cientifico.jpg?itok=yjC5JPrM" alt="Cereus"></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <p>Edmond Feris Cure trabaja en una terapia que de ser efectiva podría revolucionar
                                        tratamientos contra el cáncer. Farmacéutica se sumó a investigación. </p>
                                </div>
                            </div>
                            <div class="item">
                                <img src="https://www.elheraldo.co/sites/default/files/styles/width_820/public/97c407cfe460c0569980ef5aca05f43d.jpg?itok=tBZ7_MJv"
                                    alt="Rebutia"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>

            </div>

        </Fragment>
    );

}
export default Section1;