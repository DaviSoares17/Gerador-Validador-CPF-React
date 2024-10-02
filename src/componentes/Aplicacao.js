import "./Aplicacao.css";
import "./Tabs.css";
import "./Modal.css";
import valida from "../valida.js";
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InputMask from 'react-input-mask';
import geraCpf from "../gera.js";




const Aplicacao = (props) => {

    const [tabIndex, setTabIndex] = useState(0);
    const [valorInput2, setValorInput2] = useState('')
    const [modalAberto, setModalAberto] = useState(false)
    const [modalAberto2, setModalAberto2] = useState(false)
    const [valorInput, setValorInput] = useState('')

    const atualizaMudanca = (event) => {
        setValorInput(event.target.value);
    }

    const fecharModal = (event) => {
        event.preventDefault();
        setModalAberto(false);
        setModalAberto2(false);
    }

    const botao1 = (event) => {
        event.preventDefault();
        if (valida(valorInput)){
           setModalAberto(true);
        }else{
           setModalAberto2(true);
        }
    }

    const botao2 = (event) => {
        event.preventDefault();
        setValorInput2(geraCpf());
    }

    return(

        <div className="aplicacao">
            <div className="animated">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="custom-tab-list">
                        <Tab>Validar</Tab>
                        <Tab>Gerar</Tab>
                    </TabList>
                    <TabPanel>
                        <form>
                            <label>CPF para validação:</label>
                            <InputMask mask="999.999.999-99" value={valorInput} onChange={atualizaMudanca}></InputMask>
                            <button onClick={botao1}>VALIDAR</button>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form>
                            <label>Clique para gerar um CPF</label>
                            <button onClick={botao2}>GERAR</button>
                            <InputMask value={valorInput2}></InputMask> 
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
            
            {modalAberto && (
                <div className="modal-overlay"> 
                    <div className="modal-content">           
                        <span className="fecha-modal" onClick={fecharModal}>
                        &times; 
                        </span>
                        <p>CPF VALIDO :)</p>
                    </div>
                </div>
            
            )
            }
            {modalAberto2 && (
                <div className="modal-overlay"> 
                    <div className="modal-content">           
                        <span className="fecha-modal" onClick={fecharModal}>
                        &times; 
                        </span>
                        <p>CPF INVALIDO :(</p>
                    </div>
                </div>
                
            )
            }
            </div>
        


    )
}



export default Aplicacao