import React,  { Fragment} from 'react';
import  './Footer.css';
import './heraldo-v3.css'


const Footer = ({año}) => {
    return (
        <Fragment>

               <div class="row">
                <div class="col-xs-12">
                    <footer class="text-center">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                PBX: (57) (5) 3715000 Línea de atención: (57) (5) 313-3400 /
                                300-910-9968
                                Calle 53B
                                N° 46 - 25, Barranquilla - Atlántico Oficina Bogotá: Dirección Calle 88 No. 13 A 07
                                Teléfono:
                                (1)
                                218 5733
                            </div>
                            <div class="panel-footer"> <a href="https://www.elheraldo.co/">https://www.elheraldo.co/</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </Fragment>
     
    );
}
export default Footer;
