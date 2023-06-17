import {useCallback, useState} from 'react';
import './item-add.css';
import {ItemType} from '../../shared';
import Modal from '../common/modal';
import AddPlayerForm from './add-player-form/AddPlayerForm';
import {FIXMELATER} from "../../shared/Constants";

// Контроллер модалки с кнопкой активации
export const ItemAdd = (props: { onAddItem: FIXMELATER; itemType: FIXMELATER; }) => {
    // condole.log()
    const [modalActive, setModalActive] = useState(false);
    const {onAddItem, itemType} = props;
    const onSubmit = useCallback((v: FIXMELATER) => {
        onAddItem(v);
        setModalActive(false);
    }, [onAddItem]);
    if (itemType === ItemType.MESSAGE) return (<div/>);
    return (
        <div className="col">
            <div className="item-add-form d-flex row">
                <button
                    className="item-add-form btn btn-secondary btn-lg btn-block"
                    onClick={() => {
                        setModalActive(true);
                    }}
                >
                    Add {itemType}
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <AddPlayerForm
                    onAddItem={onSubmit}
                />
            </Modal>
        </div>
    );
};
