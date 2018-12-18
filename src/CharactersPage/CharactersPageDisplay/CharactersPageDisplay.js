import React from 'react';
import CharactersPage from '../../CharactersPage/CharactersPage';
import BeraBio from '../../CharactersPage/BeraBio/BeraBio';
import FayeBio from '../../CharactersPage/FayeBio/FayeBio';
import IanBio from '../../CharactersPage/IanBio/IanBio';
import XenonBio from '../../CharactersPage/XenonBio/Xenon';


const charactersPageDisplay = () => (
    <div>

        <CharactersPage name = "Ian"
                        bio={<IanBio/>}
                        job1 = "Job 1"
                        job2 = "Job 2"
                        job3 = "Job 3"
                        job4 = "Job 4"
                        job5 = "Job 5"/>

        <CharactersPage name = "Faye"
                        bio={<FayeBio/>}
                        job1 = "Job 1"
                        job2 = "Job 2"
                        job3 = "Job 3"
                        job4 = "Job 4"
                        job5 = "Job 5"/>

        <CharactersPage name = "Xenon"
                        bio={<XenonBio/>}
                        job1 = "Job 1"
                        job2 = "Job 2"
                        job3 = "Job 3"
                        job4 = "Job 4"
                        job5 = "Job 5"/>

        <CharactersPage name = "Bera"
                        bio={<BeraBio/>}
                        job1 = "Job 1"
                        job2 = "Job 2"
                        job3 = "Job 3"
                        job4 = "Job 4"
                        job5 = "Job 5"/>

    </div>
);

export default charactersPageDisplay;