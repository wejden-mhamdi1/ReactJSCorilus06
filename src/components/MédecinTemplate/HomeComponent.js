import React, { useState,useEffect } from 'react';
import axios from 'axios';
//import translatePage from '../../translatePage';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar'
import Footer from './Footer';
import i18next from 'i18next';

function HomeComponent() {
    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }

  
 /*   const [translatedContent, setTranslatedContent] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('fr'); 
    useEffect(() => {
        const translateContent = async () => {
          const originalContent = document.documentElement.innerHTML;
          const translatedText = await translatePage(originalContent, selectedLanguage);
          setTranslatedContent(translatedText);
        };
    
        translateContent();
      }, [selectedLanguage]);
    
      const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
      };
      <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
   
        </select>

        <div dangerouslySetInnerHTML={{ __html: translatedContent }} />
      </div>*/
  return (
    
    <div className="App">
          <NavBar></NavBar>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
  {/* <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('be')} >
            belge
          </button>
          <button onClick={()=>handleClick('fr')} >
            fr
         </button>
        </nav>
        <header className="App-header">
         
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
        </header>
    </div>*/ }

        
       <section id="banner"> 
       
        <img style={{width: 1120}} src="./source/images/image.png" alt="easylo logo"/>
   
        
         
    </section>
      
  
    <section id="choose" >
        <div class="container ">
            <div class="choose">
                <div class="choose-text">
                    
                    <h1>CareConnect : un pont entre prestataires de soins et patients</h1>
                </div>
                <div class="line"></div>
                   
            
            <div class="row">
                <div class="col-md-3">
                    <div class="choose-img"> <img src="./source/images/image4.png" alt=""/> </div>
                    <div class="protext"><h3>Dossier patient informatisé</h3></div> 
                    <p>
                    Gérez et stockez les données de vos patients dans des fichiers numériques sécurisés. Vous trouverez ainsi vos données à tout moment et où que vous soyez, et vous pourrez les partager aisément avec les patients et d’autres prestataires de soins.
                    </p>
                </div>

                <div class="col-md-3">
                    <div class="choose-img" > <img src="./source/images/image1.png" alt=""/> </div>
                    <div class="protext"><h3>Entièrement connecté</h3></div> 
                    <p>
                    Vous connecter à partir de votre logiciel à tous les services eHealth, vos collègues, les hôpitaux, les plateformes santé et d’autres professionnels de la santé devient un jeu d’enfant.
                    </p>
                </div>

                <div class="col-md-3">
                    <div class="choose-img"> <img src="./source/images/image2.png" alt=""/> </div>
                    <div class="protext"><h3>Plus qu'un simple logiciel</h3></div>
                    <p>
                    Du matériel aux agendas en ligne en passant par un télésecrétariat connecté. Chez Corilus, vous trouverez bien plus qu'un simple logiciel de cabinet. Vous disposerez ainsi de tous les outils nécessaires pour aider vos patients aussi efficacement que possible.
                    </p>
                </div>

                <div class="col-md-3">
                    <div class="choose-img"> <img src="./source/images/image3.png" alt=""/> </div>
                    <div class="protext"><h3>Un soutien optimal</h3></div>
                    <p>
                    Notre équipe de support au client, nos formateurs et autres experts vous conseillent et vous assistent, et suivent de près les derniers développements eHealth. Vous pouvez ainsi vous concentrer sur ce qui compte vraiment : soigner vos patients.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </section>
    <section id="Get-loan">
       
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                       
                       
                    </div>
                    <div class="col-md-6">
                        <div class="choose-img">
                            <img src="./source/images/ca.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
      
    </section>
   
    <section id="news">
        <div class="container">
            <div class="news">
                <h3>Latest News</h3>
                <div class="line"></div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="img"><img src="./source/images/dentiste.png" alt=""/></div>
                      
                        <p class="mx-3">CareConnect Dentist remplit le rôle d'assistant numérique dans votre cabinet dentaire et intègre toutes les fonctionnalités de la santé en ligne d'une manière intelligente et conviviale.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="img"><img src="./source/images/generaliste.png" alt=""/></div>
                       
                        <p class="mx-3">Via eAgreement, vous pouvez facilement suivre en ligne vos demandes de remboursement auprès des mutualités. La facturation se fait également facilement par voie numérique via eFact.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="img"><img src="./source/images/kine.png" alt=""/></div>
                       
                        <p class="mx-3">Notre logiciel a été développé sur la base d'années d'expérience et d'une étroite collaboration avec vos collègues kinésithérapeutes. Il est donc parfaitement adapté à vos besoins.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="img"><img src="./source/images/oph.png" alt=""/></div>
                       
                        <p class="mx-3">CareConnect Ophtalmologist vous offre un soutien optimal pour le suivi de vos patients et de votre administration. Le logiciel contient des modules intelligents notamment pour la gestion de votre agenda et votre facturation.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="img"><img src="./source/images/maison.png" alt=""/></div>
                       
                        <p class="mx-3">De l'administration aux soins : CareConnect into.care simplifie la coopération entre tous les intervenants à l'intérieur et à l'extérieur de votre maison de soins.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="img"><img src="./source/images/infermiere.png" alt=""/></div>
                    
                        <p class="mx-3">CareConnect Nurse est le logiciel pour prestataires de soins infirmiers à domicile qui souhaitent être connectés rapidement et en toute sécurité avec les patients, les autres prestataires de soins et toutes les personnes concernées.</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="./source/images/contacter.png" style={{width: 1120}} alt="easylo logo"/>
    </section>
    <Footer></Footer>
   </div>
  
       
  
       
  );
}

export default HomeComponent