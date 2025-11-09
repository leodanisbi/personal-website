import { Routes } from '@angular/router';
import { Hero } from './newView/components/hero/hero';
import { AboutMe } from './newView/components/about-me/about-me';
import { Experience } from './newView/components/experience/experience';
import { Skills } from './newView/components/skills/skills';

export const routes: Routes = [
    { path: '', component: Hero, title: 'Inicio' },
    { path: 'about', component: AboutMe, title: 'Sobre Mí' },
    { path: 'experience', component: Experience, title: 'Experiencia' },
    { path: 'skills', component: Skills, title: 'Habilidades' },
    { path: '**', redirectTo: '' },
];
