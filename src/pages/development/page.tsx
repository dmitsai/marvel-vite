import React from 'react';
import './ui/styles.css';
import { Card } from '~/features/card/ui/Card';
import { characters } from '~/entities/character';
import { comics } from '~/entities/comic';

const DevelopmentPage: React.FC = () => (
    <div className='wrapper'>
        <Card item={characters[0]} />
        <Card item={comics[0]} />
    </div>
);

export default DevelopmentPage;