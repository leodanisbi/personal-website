import { Component, signal } from '@angular/core';
import { fadeInAnimation } from '../../../animations';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  animations: [fadeInAnimation]
})
export class Experience {
  experiences = [
        {
      id: 1,
      period: '2023 - Actualidad',
      title: 'Desarrollador Frontend Freelance (Angular)',
      company: 'Proyectos Diversos (Cliente Directo)',
      summary: 'Colaboro directamente con clientes para desarrollar aplicaciones web a medida, desde la conceptualización hasta el despliegue, enfocándome en soluciones robustas y escalables con Angular.',
      details: 'Mi rol como freelance me ha permitido gestionar el ciclo de vida completo de proyectos frontend para una variedad de clientes. Soy responsable de la traducción de requisitos de negocio en soluciones técnicas eficientes, diseñando arquitecturas de componentes escalables y aplicando las mejores prácticas de Angular (standalone components, signals, RxJS). Además del desarrollo, me encargo de la configuración de pipelines de CI/CD, la optimización del rendimiento y el mantenimiento post-lanzamiento, asegurando una comunicación fluida y una entrega de valor constante.',
      tags: ['Angular', 'TypeScript', 'Standalone Components', 'Signals', 'RxJS', 'CI/CD', 'Scrum']
    },
    {
      id: 2,
      period: '2017 - 2023',
      title: 'Desarrollador Frontend (Angular)',
      company: 'Plataforma de Streaming (VOD & Live)',
      summary: 'Lideré el desarrollo frontend para una plataforma de streaming, especializándome en arquitecturas reactivas y optimización de reproductores de video.',
      details: 'Como desarrollador principal de Angular (desde la v7), fui responsable de la arquitectura frontend, la migración a nuevas versiones y la implementación de features clave. Mi rol fue cross-funcional, requiriendo experiencia en la orquestación de pipelines de video (FFmpeg, Shaka Packager para HLS/DASH) y la integración de reproductores (Shaka Player, Video.js). También gestioné entornos de desarrollo y monitoreo con Docker, Grafana y Elasticsearch.',
      tags: ['Angular', 'TypeScript', 'Docker', 'FFmpeg', 'HLS/DASH', 'Shaka Player']
    },
    {
      id: 3,
      period: '2014 - 2017',
      title: 'Especialista en Soporte y Desarrollo',
      company: 'Centro de Soporte, UCI',
      summary: 'Desarrollé módulos personalizados para Drupal 7 y gestioné solicitudes de cambio, trabajando con jQuery, JavaScript nativo y PHP.',
      details: 'En mi primer rol post-universitario, me enfoqué en el mantenimiento y extensión del CMS Drupal 7. Esta experiencia consolidó mis habilidades fundamentales en tecnologías web (HTML, CSS, JavaScript/jQuery) y me dio una base sólida en la interacción cliente-servidor y la gestión de bases de datos en un entorno basado en PHP.',
      tags: ['Drupal 7', 'jQuery', 'JavaScript', 'PHP', 'HTML/CSS']
    },
    {
      id: 4,
      period: '2009 - 2014',
      title: 'Ingeniería Informática',
      company: 'Universidad de las Ciencias Informáticas (UCI), La Habana',
      summary: 'Formación académica integral en Ingeniería de Software, administración de sistemas y bases de datos, con una especialización en Software Libre.',
      details: 'Durante mis cinco años de carrera, adquirí una base teórica y práctica sólida en algoritmia, estructuras de datos, y paradigmas de programación. Mi formación en la Facultad 1 (Software Libre) me especializó en el ecosistema Linux, permitiéndome desarrollar habilidades avanzadas en administración de sistemas operativos, redes y gestión de bases de datos. Desarrollé múltiples proyectos académicos utilizando Java y PHP, sentando las bases para mi carrera profesional en el desarrollo web y la gestión de sistemas complejos.',
      tags: ['Ingeniería de Software', 'Linux', 'Java', 'PHP', 'Bases de Datos', 'Redes']
    }
  ];

  // Signal para controlar qué experiencia está expandida
  activeExperienceId = signal<number | null>(null);

  toggleExperience(id: number) {
    this.activeExperienceId.set(this.activeExperienceId() === id ? null : id);
  }

}
