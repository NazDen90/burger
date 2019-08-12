import React, {useEffect, useState} from 'react';
import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, errSet] = useState(null);
        useEffect(() => {
              const reqInterceptor = axios.interceptors.request.use(req => {
                errSet(null);
                return req;
            });
            const respInterceptor = axios.interceptors.response.use(res => res, err => {
                console.log(err);
                errSet(err);
            });
            return()=>{
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(respInterceptor);
            }
        });

        const errConfirmHandler = () => {
            errSet(null)
        };
        return (
            <Aux>
                <Modal show={error}
                       modalClosed={errConfirmHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }

};

export default withErrorHandler;
