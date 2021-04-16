import React, { Fragment } from 'react';
import './Search.css';


function Search() {


    return (
        <Fragment>
             
            <div class="row">
                <div class="col-xs-12">
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Buscar"/>
                        </div>
                        <button type="submit" class="btn btn-default">Buscar</button>
                    </form>
                </div>
            </div>

        </Fragment>
    );

}
export default Search;