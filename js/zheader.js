// window.addEventListener("DOMContentLoaded", page)
function zHeaderMenu() {
    let zHeader = document.createElement("div");
    zHeader.className = "z-header";
    document.body.appendChild(zHeader);
    
    let zHeaderContainer = document.createElement("div");
    zHeaderContainer.className = "z-header-container";
    zHeader.appendChild(zHeaderContainer);
    
    let zLogo = document.createElement("div");
    zLogo.className = "z-logo";
    zHeaderContainer.appendChild(zLogo);
    
    let zLogoContainer = document.createElement("div");
    zLogoContainer.className = "z-logo-container";
    zLogo.appendChild(zLogoContainer);
    
    let zNavArea = document.createElement("div");
    zNavArea.className = "z-nav-area";
    zHeaderContainer.appendChild(zNavArea);
    
    let zNav = document.createElement("div");
    zNav.className = "z-nav";
    zNavArea.appendChild(zNav);
    
    let zNavItem1 = document.createElement("a");
    zNavItem1.className = "z-nav-item z-nav-item-home";
    zNavItem1.href = "#"
    zNav.appendChild(zNavItem1);
    
    let zNavItemContainer1 = document.createElement("div");
    zNavItemContainer1.className = "z-nav-item-container z-nav-item-home-container";
    zNavItem1.appendChild(zNavItemContainer1);
    
    let zNavItem2 = document.createElement("a");
    zNavItem2.className = "z-nav-item z-nav-item-about";
    zNavItem2.href = "#"
    zNav.appendChild(zNavItem2);
    
    let zNavItemContainer2 = document.createElement("div");
    zNavItemContainer2.className = "z-nav-item-container z-nav-item-about-container";
    zNavItem2.appendChild(zNavItemContainer2);
    
    let zNavItem3 = document.createElement("a");
    zNavItem3.className = "z-nav-item z-nav-item-skills";
    zNavItem3.href = "#"
    zNav.appendChild(zNavItem3);
    
    let zNavItemContainer3 = document.createElement("div");
    zNavItemContainer3.className = "z-nav-item-container z-nav-item-skills-container";
    zNavItem3.appendChild(zNavItemContainer3);
    
    let zNavItem4 = document.createElement("a");
    zNavItem4.className = "z-nav-item z-nav-item-works";
    zNavItem4.href = "#"
    zNav.appendChild(zNavItem4);
    
    let zNavItemContainer4 = document.createElement("div");
    zNavItemContainer4.className = "z-nav-item-container z-nav-item-works-container";
    zNavItem4.appendChild(zNavItemContainer4);
    
    let zNavItem5 = document.createElement("a");
    zNavItem5.className = "z-nav-item z-nav-item-contact";
    zNavItem5.href = "#"
    zNav.appendChild(zNavItem5);
    
    let zNavItemContainer5 = document.createElement("div");
    zNavItemContainer5.className = "z-nav-item-container z-nav-item-contact-container";
    zNavItem5.appendChild(zNavItemContainer5);
    
    let zSocial = document.createElement("div");
    zSocial.className = "z-social";
    zNavArea.appendChild(zSocial);
    
    let zSocialItem1 = document.createElement("a");
    zSocialItem1.className = "z-social-item z-social-item-git";
    zSocialItem1.href = "#"
    zSocial.appendChild(zSocialItem1);
    
    let zSocialItemContainer1 = document.createElement("div");
    zSocialItemContainer1.className = "z-social-item-container z-social-item-git-container";
    zSocialItem1.appendChild(zSocialItemContainer1);
    
    let zSocialItem2 = document.createElement("a");
    zSocialItem2.className = "z-social-item z-social-item-inst";
    zSocialItem2.href = "#"
    zSocial.appendChild(zSocialItem2);
    
    let zSocialItemContainer2 = document.createElement("div");
    zSocialItemContainer2.className = "z-social-item-container z-social-item-inst-container";
    zSocialItem2.appendChild(zSocialItemContainer2);
  }
  zHeaderMenu()