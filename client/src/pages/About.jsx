import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          JobPortal est une plateforme de recherche d'emploi développée pour connecter efficacement les chercheurs d'emploi et les entreprises à travers une interface conviviale et performante. Ce projet est conçu pour faciliter l'accès aux opportunités professionnelles, offrant aux utilisateurs une recherche simplifiée et aux entreprises un espace pour publier leurs offres.

Pour en savoir plus sur JobPortal et les services offerts par notre équipe, n'hésitez pas à visiter notre site ou à contacter nos contributeurs pour toute information supplémentaire sur les projets en cours et les nouvelles fonctionnalités à venir.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        Pour en savoir plus sur JobPortal, ses fonctionnalités et les dernières nouveautés, n'hésitez pas à explorer notre site ou à entrer en contact avec notre équipe. Nous sommes à votre écoute pour répondre à vos questions et vous guider dans l'utilisation de la plateforme. Notre équipe travaille continuellement sur des améliorations et des mises à jour, intégrant les retours des utilisateurs et les évolutions du marché de l'emploi, pour offrir une expérience utilisateur enrichie et toujours plus intuitive.

À travers notre engagement à innover et à optimiser les outils mis à disposition, JobPortal souhaite devenir le partenaire incontournable de la croissance professionnelle des candidats et du succès des entreprises. Nous croyons fermement que la recherche d'emploi et le recrutement doivent être accessibles, rapides et efficaces, et nous mettons tout en œuvre pour atteindre cet objectif.
        </p>
      </div>
    </div>
  );
};

export default About;
