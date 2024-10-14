//NOTE: Temp data

import { type Comic } from "./comic";
import avengersImg from '~/shared/assets/avengers-img.jpg';
import daredevilImg from '~/shared/assets/daredevil-img.jpg';
import thorComicImg from '~/shared/assets/thor-comic-img.jpg';

export const comics: Comic[] = [
    {
        comicId: '1',
        title: 'Averangers',
        description: 'Founded by S.H.I.E.L.D. Director Nick Fury, the team is a United States–based organization composed primarily of superpowered and gifted individuals, described as Earths Mightiest Heroes, who are committed to the worlds protection from a variety of threats.',
        imgSrc: avengersImg
    },
    {
        comicId: '2',
        title: 'Daredevil',
        description: 'Daredevil is the Man Without Fear! Blinded as a youngster by radioactive chemicals, Matt Murdock soon found that his other senses had been heightened to extraordinary levels. As an adult, he took on the mantle of Daredevil- the protector of the gritty New York neighborhood Hells Kitchen.',
        imgSrc: daredevilImg,
    },
    {
        comicId: '3',
        title: 'Thor (Marvel Comics)',
        description: 'Thor, a founding member of the superhero group the Avengers, often battles his evil adoptive brother Loki, a Marvel character adapted from the Norse god of mischief. He is among Marvels most powerful superheroes. Many recurring characters in his stories are based on Norse Mythology.',
        imgSrc: thorComicImg,
    }
]