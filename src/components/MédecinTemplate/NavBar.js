import React, { useState  , useEffect  } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import '../Table.css';
function NavBar() {
  useEffect(() => {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'shortcut icon';
  
    document.head.appendChild(faviconLink);

    const mainCssLink = document.createElement('link');
    mainCssLink.rel = 'stylesheet';
    mainCssLink.href = "https://www.corilus.be/hs-fs/hub/4037565/hub_generated/template_assets/70173570924/1676292938917/popular-theme-v2-for-corilus/css/main.min.css";
    document.head.appendChild(mainCssLink);

    const themeOverridesCssLink = document.createElement('link');
    themeOverridesCssLink.rel = 'stylesheet';
    themeOverridesCssLink.href = "https://www.corilus.be/hs-fs/hub/4037565/hub_generated/template_assets/70172074165/1663198676875/popular-theme-v2-for-corilus/css/theme-overrides.min.css";
    document.head.appendChild(themeOverridesCssLink);

    const menuCssLink = document.createElement('link');
    menuCssLink.rel = 'stylesheet';
    menuCssLink.href = "https://www.corilus.be/hs-fs/hub/4037565/hub_generated/module_assets/70172243474/1658998754820/module_70172243474_menu.min.css";
    document.head.appendChild(menuCssLink);

    // Nettoyage : retirer les éléments ajoutés lorsque le composant est démonté
    return () => {
      document.head.removeChild(faviconLink);
      document.head.removeChild(mainCssLink);
      document.head.removeChild(themeOverridesCssLink);
      document.head.removeChild(menuCssLink);
    };
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const logout = () => {
    localStorage.clear(); 
    window.location.href = '/';
  };
  
  function onClickLogout(setting) {
    if (setting === 'logout') {
      logout();
    }
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    
    <div className="navbar"   >
      
    <div data-global-resource-path="popular-theme-v2-for-corilus/templates/partials/header.html" >
      <header id="header" class="header">
      
<div class="header-middle" >

  <div class="header__container content-wrapper" > 
      <div class="header__row-1 top-navigation" > 
        <div class="header--element" >
        
        
          <div id="hs_cos_wrapper_top-navigation"  class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" data-hs-cos-type="module">
            
<nav class="menu menu--desktop"aria-label="Main menu">
<ul class="menu__wrapper no-list" >
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
      <a class="menu__link   " href="https://blog.corilus.be/">Blog</a>
  </li>
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://www.coriluswebshop.be/documents/home.xml?lang=nl" target="_blank" rel="noopener">Webshop</a>
  </li>
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://my.corilus.be/">Support</a>
 
    
  </li>


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://www.corilus.be/resources">Knowledge base</a> 
  </li>
</ul>
</nav>



<nav class="menu menu--mobile" aria-label="Main menu">
<ul class="menu__wrapper no-list">
  






  
  <li class="menu__item menu__item--depth-1 menu__item--has-submenu hs-skip-lang-url-rewrite">
    
      
        <a class="menu__link menu__link--toggle" href="#" aria-haspopup="true" aria-expanded="false">Starten als </a>
      
    
    
      
        <button class="menu__child-toggle no-button" aria-expanded="false">
          <span class="show-for-sr">Show submenu for Starten als </span>
          <span class="menu__child-toggle-icon">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683418 0.292893 0.292893Z" fill="currentColor"></path>
              </svg>
          </span>
        </button>
        <ul class="menu__submenu menu__submenu--level-2 no-list">
          
          
            
  <li class="menu__item menu__item--depth-2  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://academy.corilus.be/">Starten als huisarts</a>
    
    
  </li>

          
            
  <li class="menu__item menu__item--depth-2  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://academy.corilus.be/starten-als-kinesitherapeut">Starten als kinesitherapeut</a>
    
    
  </li>

          
        </ul>
        
    
  </li>


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://blog.corilus.be/">Blog</a>
    
    
  </li>


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://www.coriluswebshop.be/documents/home.xml?lang=nl" target="_blank" rel="noopener">Webshop</a>
    
    
  </li>


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://my.corilus.be/">Support</a>
    
    
  </li>


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://www.corilus.be/resources">Knowledge base</a>
    
    
  </li>




</ul>
</nav></div>
        </div>
        
        
         
        <div class="header__search-parent">
          <span class="header__search--toggle">

  
           
            <svg width="30" height="20" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-2x"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class="" fill="#9CA3AF"></path></svg>
          </span>
          <div class="header__search header--element test">
            
            <div id="hs_cos_wrapper_site_search_custom" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" data-hs-cos-type="module">

<div class="hs-search-field"> 
<div className="hs-search-field__bar">
        <form action="https://www.corilus.be/search-results" data-hs-cf-bound="true">
          <input type="text" className="hs-search-field__input" name="term" autoComplete="off" aria-label="Search" placeholder="Zoek..." />
          <input type="hidden" name="type" value="SITE_PAGE" />
          <input type="hidden" name="type" value="BLOG_POST" />
          <input type="hidden" name="type" value="LISTING_PAGE" />
          <input type="hidden" name="domain" value="blog.corilus.be" />
          <input type="hidden" name="language" value="nl" />
          <button aria-label="Search"><span id="hs_cos_wrapper_site_search_custom_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon"  data-hs-cos-general-type="widget" data-hs-cos-type="icon"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><g id="search1_layer"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></g></svg></span></button>
        </form>
      </div>
  <ul class="hs-search-field__suggestions"></ul>
</div></div>
          </div>
        </div>
        <div>
  <IconButton
    size="large"
    aria-haspopup="true"
    onClick={handleMenu}
  >
    <AccountCircle />
  </IconButton>
  <Menu
    id="menu-appbar"
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    <MenuItem
      onClick={() => {
        onClickLogout('logout');
        handleClose();
      }}
    >
      Logout
    </MenuItem>
  </Menu>
</div>
        
        
        <div class="header__language-switcher" style={{fontSize: '-100px', padding: '-100px' , width: '-100px'}}> 
          <div class="header__language-switcher--label" style={{fontSize: '-100px', padding: '-100px' , width: '-100px'}}>
            <div id="hs_cos_wrapper_language-switcher" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-language_switcher"  data-hs-cos-general-type="widget" data-hs-cos-type="module"><span id="hs_cos_wrapper_language-switcher_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_language_switcher"  data-hs-cos-general-type="widget" data-hs-cos-type="language_switcher"><div class="lang_switcher_class">

   

</div></span>
</div>
            <div class="header__language-switcher--label-current"> nl</div>
            <div class="header--toggle header__language-switcher--toggle header__element-mobile">
              <svg width="25" height="25" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-globe fa-w-16 fa-2x"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" class=""></path></svg>
            </div>
            
          </div>
        </div>
        
      </div>
      

    

    <div class="header__column">

      <div class="header__mobile_buttons">
        <div class="header__navigation--toggle header-mobile--element">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      
    

    <div class="header__logo header__logo--main">
      <div id="hs_cos_wrapper_site_logo" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-logo"  data-hs-cos-general-type="widget" data-hs-cos-type="module">

     
  <img src="../../assets/corilus.PNG" style={{width: '150px', marginRight: '2000px', marginTop: '-10px'}} alt="Corilus" />







<span id="hs_cos_wrapper_site_logo_hs_logo_widget" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"  data-hs-cos-general-type="widget" data-hs-cos-type="logo"><a href="https://www.corilus.be" id="hs-link-site_logo_hs_logo_widget" style={{ borderWidth: '0px', border: '0px' }}></a></span>
</div>
    </div>


      

      <div class="header__row-2 header__navigation header__navigation__mobile_group">

        <div class="header__navigation header--element">
          
          <div id="hs_cos_wrapper_navigation-primary" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" data-hs-cos-type="module">

     







<nav class="menu menu--desktop" aria-label="Main menu">
  
<ul class="menu__wrapper no-list">


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
  
    
      <a class="menu__link   " href="https://www.corilus.be/helena">Helena</a>
    
    
  </li>


  
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
    
      <a class="menu__link   " href="https://www.corilus.be/hardware">Hardware</a>
    
    
  </li>
  <li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
  
    
  <a class="menu__link   " href="/upload">EFACT</a>


</li>
<li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
  
    
  <a class="menu__link   " href="/calendar">calendar</a>


</li>
<li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
  
    
  <a class="menu__link   " href="/listConsultation">Consultation</a>


</li>
<li class="menu__item menu__item--depth-1  hs-skip-lang-url-rewrite">
  
    
  <a class="menu__link   " href="/home">Home</a>


</li>


</ul>
</nav>


</div>
          
          
          
        </div>
       
 
        
          
        <div class="header__cta--wrapper">
          <div id="hs_cos_wrapper_job-cta" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" data-hs-cos-type="module">




   

<a class="job-cta header__cta  cta_button button--small  cta_secondary" href="https://jobs.corilus.be/open-jobs" target="_blank" rel="noopener">
Jobs 
<span>25</span>
</a></div>
        </div>
        


      </div>

    </div>

  </div>
</div>  




</header>




</div>

   </div>

  );
}

export default NavBar