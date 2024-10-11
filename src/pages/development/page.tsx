import React from 'react';
import './ui/styles.css';
import { Search } from '~/features/search/ui/Search';


const DevelopmentPage: React.FC = () => {

    return (
        <div className='wrapper'>
            <Search placeholder={'Characters'} label={'Search for Characters by Name'} count={1951} />
        </div>
    );
}
    ;

export default DevelopmentPage;