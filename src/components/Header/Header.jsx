import React, { Fragment}  from 'react';
import './Header.css'


function Header() {
    // basico JSX

    return (
        <Fragment>
    <div className="header">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-header text-center jumbotron">
                        <h1 id="title">El Heraldo</h1>
                    </div>
                </div>
            </div>
        <div class="row">
            <div class="col-xs-12">
                <ul id="menu" class="nav nav-justified nav-pills" data-spy="affix" data-offset-top="150">
                    <li class="badge">
                        <a href="elheraldo.co.html" class="glyphicon glyphicon-home" id="id-noticia"> Noticias</a>
                    </li>
                    <li>
                        <a href="https://www.elheraldo.co/judicial" target="_blank">Judiciales</a>
                    </li>
                    <li>
                        <a href="https://www.elheraldo.co/deportes" target="_blank">Deportes</a>
                    </li>
                    <li>
                        <a href="https://www.elheraldo.co/local" target="_blank">Clasificados </a>
                    </li>
                    <li>
                        <a href="https://www.elheraldo.co/politica" target="_blank">Política </a>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                            aria-expanded="false">Otras Secciones <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="https://www.elheraldo.co/nacional" target="_blank">País</a></li>
                            <li><a href="https://www.elheraldo.co/internacional" target="_blank"
                                    class="glyphicon glyphicon-globe"> Mundo</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="https://www.elheraldo.co/entretenimiento" target="_blank"
                                    class="glyphicon glyphicon-phone"> Entretenimiento</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        </div>
            
        </Fragment>

    );
}
export default Header;
