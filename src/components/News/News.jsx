import React, { Fragment } from 'react';
import './News.css';
import Search from './Search/Search';


function News() {


    return (
        <Fragment>

            <div className="News">
            <Search/>
            {/* Section # 1 */}
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
                {/* Section # 2 */}
                <div class="row">
                    <div class="col-md-6 col-xs-12 text-left">
                        <img src="https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/02/25/vacunacion_en_cartagena.jpeg?itok=16I0_ABQ"
                            alt="img" class="img-news"></img>
                        <div class="caption">
                            <p>El Dadis anunció el envío de un lote de 3.326 biológicos en esta nueva fase, 1.560 de ellas
                                de Pfizer. Turno para mayores de 80 años. </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12 text-left">
                        <h3>Cartagena divulga los puntos de vacunación contra covid-19</h3>
                        <p>Cartagena alista la nueva fase de inmunización contra la covid-19 con la llegada de un lote de
                            1.560 biológicos de Pfizer y 1.666 de Sinovac, declaró este jueves la directora del Dadis,
                            Johana Bueno.

                            Las vacunas de este último laboratorio serán las que recibirán los adultos mayores de 80 años.

                            El Distrito confirmó además que ayer miércoles terminó de aplicar el primer lote de vacunas que
                            el Ministerio de Salud despachó a la capital de Bolívar.

                            Las jornadas de inmunización, que se iniciaron el pasado 18 de febrero, se cumplieron bajo los
                            parámetros establecidos por el Gobierno Nacional y sin contratiempos en tres puntos habilitados:
                            la ESE Hospital Universitario del Caribe, la Clínica del Bosque y la clínica Gestión Salud, sede
                            San Fernando. <a
                                href="https://www.elheraldo.co/bolivar/cartagena-divulga-los-puntos-de-vacunacion-contra-covid-19-797610?utm_source=ELHERALDO&utm_medium=articulo&utm_campaign=recirculacion&utm_term=lo-ultimo"
                                target="_blank"> Leer mas</a></p>
                    </div>
                </div>
                {/* Noticias*/}
                <div class="row">
                    <div class="col-xs-12">
                        <h3>Lo más visto</h3>
                        <div class="menu-noticias">
                            <div class="noticia">
                                <a
                                    href="https://www.elheraldo.co/la-guajira/muere-ahogada-turista-barranquillera-en-palomino-799010">
                                    <h2 class="numeros">1</h2>
                                    <span>
                                        Muere ahogada turista barranquillera en Palomino
                                    </span>
                                </a>
                            </div>
                            <div class="noticia">
                                <a
                                    href="https://www.elheraldo.co/la-guajira/muere-ahogada-turista-barranquillera-en-palomino-799010">
                                    <h2 class="numeros">2</h2>
                                    <span>
                                        Muere ahogada turista barranquillera en Palomino
                                    </span>
                                </a>
                            </div>
                            <div class="noticia">
                                <a
                                    href="https://www.elheraldo.co/la-guajira/muere-ahogada-turista-barranquillera-en-palomino-799010">
                                    <h2 class="numeros">3</h2>
                                    <span>
                                        Muere ahogada turista barranquillera en Palomino
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section # 3 */}
                <div class="row">
                    <div class="col-md-6 col-xs-12 text-left">
                        <h3>Comienza la vacunación de los mayores de 80 en el Atlántico</h3>
                        <iframe width="1920" height="937" src="https://www.youtube.com/embed/J4kNnjG_hPE" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen class="img-news"></iframe>

                        <p class="description">La llegada de nuevas dosis de vacunas contra la covid-19 permitirá al
                            departamento del Atlántico continuar con el plan de vacunación del personal de la salud de la
                            primera línea de atención y de los adultos mayores de 80 años. Estos últimos comienzan este
                            viernes en Puerto Colombia y Galapa, lo mismo que en el resto de municipios fuera del área
                            metropolitana. <a
                                href="https://www.elheraldo.co/atlantico/comienza-la-vacunacion-de-los-mayores-de-80-en-el-atlantico-797594"
                                target="_blank">Leer mas</a></p>
                    </div>
                    <div class="col-md-6 col-xs-12 text-left">
                        <h3>Estudio de videojuegos atlanticense firma contrato con desarrollador de EEUU</h3>
                        <img src="https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2020/11/29/nuevo_proyecto_-_2020-11-29t185424.094.jpg?itok=mjD6s26A"
                            alt="img" class="img-news"></img>
                        <p class="description">El estudio atlanticense Dead Monkey firmó un primer contrato con la compañía
                            norteamericana Tiny Build para codesarrollar un videojuego.

                            Para el secretario TIC, Camilo Cepeda, este es un gran logro que demuestra lo significativo de
                            la industria de los videojuegos para el departamento. <a
                                href="https://www.elheraldo.co/tecnologia/estudio-de-videojuegos-atlanticense-firma-contrato-con-desarrollador-de-eeuu-776830"
                                target="_blank">Leer mas</a></p>
                    </div>
                </div>
                {/*  Pagina anterior y siguiente */}
                <nav aria-label="...">
                    <ul class="pager">
                        <li><a href="elheraldo.co.html">Previous</a></li>
                        <li><a href="elheraldo.co.html">Next</a></li>
                    </ul>
                </nav>

            </div>
        </Fragment>
    );

}
export default News;