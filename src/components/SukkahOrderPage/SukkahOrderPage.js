import React, { useState, useEffect } from 'react';
import './SukkahOrderPage.css';
import { connect } from 'react-redux';

import { requestAllData } from '../../actions/RequestData';

import SizeSelection from './SizeSelection/SizeSelection';
import SizeImage from './SizeImage/SizeImage';
import SelectionStages from './SelectionStages/SelectionStages';
import OneStep from './OneStep/OneStep';
import ChoosingSukkahType from './ChoosingSukkahType/ChoosingSukkahType';
import SelectedSukkah from './SelectedSukkah/SelectedSukkah';
import ChoosingCharacteristics from './ChoosingCharacteristics/ChoosingCharacteristics';
import SelectExtension from './SelectExtension/SelectExtension';
import SummaryOfMoney from './SummaryOfMoney/SummaryOfMoney';
import PrintQuote from './PrintQuote/PrintQuote';
import SubmitForm from './SubmitForm/SubmitForm';


const SukkahOrderPage = props => {
    const [mounted, setMounted] = useState(false);
    if (!mounted) {
        props.requestAllData()
    };

    useEffect(() => {
        setMounted(true)
    }, []);
    return (
        <div className='SukkahOrderPage-continer-div'>
            <SizeSelection />
            <SizeImage />
            <SelectionStages />
            <OneStep />
            <ChoosingSukkahType />
            <SelectedSukkah />
            <ChoosingCharacteristics />
            <SelectExtension />
            <SummaryOfMoney />
            <PrintQuote />
            <SubmitForm />
        </div>
    );
};

const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { requestAllData })(SukkahOrderPage);