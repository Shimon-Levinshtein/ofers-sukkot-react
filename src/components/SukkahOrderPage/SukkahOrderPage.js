import React from 'react';
import './SukkahOrderPage.css';

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

export default SukkahOrderPage;